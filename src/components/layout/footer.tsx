'use client'

import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'

export function Footer() {
  const { t, isRTL } = useLanguage()
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/bg.png" 
                alt="GenoFit Logo" 
                width={40} 
                height={40} 
                className="object-contain"
              />
              <span className="text-2xl font-bold text-gradient">GenoFit</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.privacy-policy')}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.return-policy')}
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.support-policy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact-info')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    {t('footer.address-line1')}<br />
                    {t('footer.address-line2')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+966123456789" className="text-gray-400 hover:text-white transition-colors" dir="ltr">
                  +966 12 345 6789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@genofit.sa" className="text-gray-400 hover:text-white transition-colors">
                  info@genofit.sa
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')} {t('common.founded')}.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">{t('footer.follow-us')}</span>
            <div className="flex space-x-2">
              <span className="text-2xl">🇸🇦</span>
              <span className="text-gray-400 text-sm">{t('footer.made-in-saudi')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 