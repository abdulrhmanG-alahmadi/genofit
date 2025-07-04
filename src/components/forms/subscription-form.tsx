'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { createSubscription, SubscriptionData } from '@/lib/firebase-service'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

interface SubscriptionFormProps {
  isOpen: boolean
  onClose: () => void
  packageType: string
  packageName: string
}

const countryCodes = [
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+962', name: 'Jordan', flag: '🇯🇴' },
  { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
]

export function SubscriptionForm({ isOpen, onClose, packageType, packageName }: SubscriptionFormProps) {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+966',
    phone: '',
    gender: '',
    age: '',
    id: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleIdChange = (value: string) => {
    // Only allow numeric input and limit to 10 digits
    const numericValue = value.replace(/\D/g, '').slice(0, 10)
    handleInputChange('id', numericValue)
  }

  const validateForm = (): string | null => {
    if (!formData.fullName.trim()) return t('form.validation.full-name-required')
    if (!formData.email.trim()) return t('form.validation.email-required')
    if (!formData.phone.trim()) return t('form.validation.phone-required')
    if (!formData.gender) return t('form.validation.gender-required')
    if (!formData.age.trim()) return t('form.validation.age-required')
    if (!formData.id.trim()) return t('form.validation.id-required')

    // Email validation - must have format example@domain.extension
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return t('form.validation.email-invalid')
    }

    // Phone validation - basic format check
    const phoneRegex = /^[0-9]{7,15}$/
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      return t('form.validation.phone-invalid')
    }

    // Age validation
    const age = parseInt(formData.age)
    if (isNaN(age) || age < 16 || age > 100) {
      return t('form.validation.age-invalid')
    }

    // ID validation - exactly 10 digits
    if (formData.id.length !== 10 || !/^\d{10}$/.test(formData.id)) {
      return t('form.validation.id-invalid')
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const subscriptionData: SubscriptionData = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: `${formData.countryCode}${formData.phone.trim()}`,
        gender: formData.gender,
        age: parseInt(formData.age),
        id: formData.id.trim(),
        packageType
      }

      const docId = await createSubscription(subscriptionData)
      console.log('Subscription created successfully:', docId)
      
      setIsSuccess(true)
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        countryCode: '+966',
        phone: '',
        gender: '',
        age: '',
        id: ''
      })
    } catch (error) {
      console.error('Subscription error:', error)
      setError(error instanceof Error ? error.message : t('form.validation.unexpected-error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setError(null)
    onClose()
  }

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-green-600">
              {t('form.success.title')}
            </DialogTitle>
            <DialogDescription className="text-center space-y-2">
              <span className="block">{t('form.success.message')} <strong>{packageName}</strong>!</span>
              <span className="block text-sm text-gray-600">
                {t('form.success.note')}
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={handleClose} className="bg-gradient-to-r from-blue-600 to-purple-600">
              {t('form.success.close')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t('form.title')} {packageName}
          </DialogTitle>
          <DialogDescription>
            {t('form.description')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="fullName">{t('form.full-name')}</Label>
            <Input
              id="fullName"
              type="text"
              placeholder={t('form.full-name-placeholder')}
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('form.email')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('form.email-placeholder')}
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t('form.phone')}</Label>
            <div className="flex gap-2">
              <Select value={formData.countryCode} onValueChange={(value) => handleInputChange('countryCode', value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                placeholder={t('form.phone-placeholder')}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="flex-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gender">{t('form.gender')}</Label>
              <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t('form.gender-placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">{t('form.gender-male')}</SelectItem>
                  <SelectItem value="female">{t('form.gender-female')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">{t('form.age')}</Label>
              <Input
                id="age"
                type="number"
                placeholder={t('form.age-placeholder')}
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                min="16"
                max="100"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="id">{t('form.id')}</Label>
            <Input
              id="id"
              type="text"
              placeholder={t('form.id-placeholder')}
              value={formData.id}
              onChange={(e) => handleIdChange(e.target.value)}
              required
              maxLength={10}
              pattern="[0-9]{10}"
              inputMode="numeric"
            />
            <p className="text-sm text-gray-500">
              {formData.id.length}/10 {isRTL ? 'أرقام' : 'digits'}
            </p>
          </div>

          <div className={`flex justify-end space-x-3 pt-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              {t('form.cancel')}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t('form.submitting')}
                </>
              ) : (
                t('form.submit')
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 