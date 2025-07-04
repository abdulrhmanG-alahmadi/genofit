'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/bg.png" 
              alt="GenoFit Logo" 
              width={70} 
              height={70} 
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.home')}
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.how-it-works')}
            </a>
            <a href="#packages" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.packages')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <LanguageSwitcher />
            <a href="#packages">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t('nav.get-started')}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.how-it-works')}
              </a>
              <a 
                href="#packages" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.packages')}
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <div className="pt-4 space-y-3">
                <LanguageSwitcher />
                <a 
                  href="#packages"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full"
                  >
                    {t('nav.get-started')}
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 