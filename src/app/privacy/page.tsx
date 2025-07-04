'use client'

import { useLanguage } from '@/contexts/language-context'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className={`flex items-center text-blue-600 hover:text-blue-800 transition-colors ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
            >
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              <span>{t('privacy.back-home')}</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              {t('privacy.title')}
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container-max py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('privacy.introduction.title')}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t('privacy.introduction.paragraph1')}</p>
              <p>{t('privacy.introduction.paragraph2')}</p>
            </div>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('privacy.data-collection.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('privacy.data-collection.intro')}
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>{t('privacy.data-collection.item1')}</li>
              <li>{t('privacy.data-collection.item2')}</li>
              <li>{t('privacy.data-collection.item3')}</li>
              <li>{t('privacy.data-collection.item4')}</li>
            </ul>
          </section>

          {/* Why We Collect Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('privacy.why-collect.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('privacy.why-collect.intro')}
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>{t('privacy.why-collect.item1')}</li>
              <li>{t('privacy.why-collect.item2')}</li>
              <li>{t('privacy.why-collect.item3')}</li>
              <li>{t('privacy.why-collect.item4')}</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('privacy.data-protection.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('privacy.data-protection.intro')}
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>{t('privacy.data-protection.item1')}</li>
              <li>{t('privacy.data-protection.item2')}</li>
              <li>{t('privacy.data-protection.item3')}</li>
            </ul>
          </section>

          {/* Cookies Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('privacy.cookies.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('privacy.cookies.intro')}
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed mb-6">
              <li>{t('privacy.cookies.item1')}</li>
              <li>{t('privacy.cookies.item2')}</li>
              <li>{t('privacy.cookies.item3')}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              {t('privacy.cookies.disable')}
            </p>
          </section>

          {/* External Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('privacy.external-links.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('privacy.external-links.content')}
            </p>
          </section>

          {/* Preventing Data Collection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('privacy.prevent-collection.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('privacy.prevent-collection.intro')}
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed mb-6">
              <li>{t('privacy.prevent-collection.item1')}</li>
              <li>{t('privacy.prevent-collection.item2')}</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              {t('privacy.prevent-collection.guarantee')}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.contact.message')}
              </p>
              <p className="mt-4 font-semibold text-blue-600">
                <a href="mailto:info@genofit.sa" className="hover:underline">
                  info@genofit.sa
                </a>
              </p>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8 border-t">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isRTL ? <ArrowRight className="w-5 h-5 mr-2" /> : <ArrowLeft className="w-5 h-5 mr-2" />}
              {t('privacy.back-home')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 