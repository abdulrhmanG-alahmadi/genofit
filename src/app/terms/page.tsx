'use client'

import { useLanguage } from '@/contexts/language-context'
import { ArrowLeft, ArrowRight, Shield, FileText, Users, Globe, CreditCard, Scale, AlertTriangle, Database } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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
              <span>{t('terms.back-home')}</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              {t('terms.title')}
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
              {t('terms.introduction.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('terms.introduction.welcome')}
            </p>
          </section>

          {/* Genetic Testing Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.genetic-testing.title')}
            </h2>

            {/* Data Collection */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('terms.genetic-testing.data-collection.title')}
                  </h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• {t('terms.genetic-testing.data-collection.item1')}</li>
                    <li>• {t('terms.genetic-testing.data-collection.item2')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('terms.genetic-testing.data-usage.title')}
                  </h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• {t('terms.genetic-testing.data-usage.item1')}</li>
                    <li>• {t('terms.genetic-testing.data-usage.item2')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('terms.genetic-testing.privacy.title')}
                  </h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• {t('terms.genetic-testing.privacy.item1')}</li>
                    <li>• {t('terms.genetic-testing.privacy.item2')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('terms.genetic-testing.data-sharing.title')}
                  </h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• {t('terms.genetic-testing.data-sharing.item1')}</li>
                    <li>• {t('terms.genetic-testing.data-sharing.item2')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results and Reports */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('terms.genetic-testing.results.title')}
                  </h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• {t('terms.genetic-testing.results.item1')}</li>
                    <li>• {t('terms.genetic-testing.results.item2')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Terms of Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.usage.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('terms.usage.description')}
            </p>
          </section>

          {/* Limited Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.liability.title')}
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-gray-700 leading-relaxed">
                {t('terms.liability.description')}
              </p>
            </div>
          </section>

          {/* External Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.external-links.title')}
            </h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.external-links.description')}
              </p>
            </div>
          </section>

          {/* Website Usage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.website-usage.title')}
            </h2>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• {t('terms.website-usage.item1')}</li>
              <li>• {t('terms.website-usage.item2')}</li>
              <li>• {t('terms.website-usage.item3')}</li>
            </ul>
          </section>

          {/* Trademarks and Copyright */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.trademarks.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('terms.trademarks.description')}
            </p>
          </section>

          {/* Registered Users */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.registered-users.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('terms.registered-users.description')}
            </p>
          </section>

          {/* User Provided Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.user-info.title')}
            </h2>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• {t('terms.user-info.item1')}</li>
              <li>• {t('terms.user-info.item2')}</li>
            </ul>
          </section>

          {/* International Users */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.international-users.title')}
            </h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-teal-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.international-users.description')}
              </p>
            </div>
          </section>

          {/* Applicable Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.applicable-law.title')}
            </h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.applicable-law.description')}
              </p>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('terms.payment.title')}
            </h2>
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• {t('terms.payment.item1')}</li>
                  <li>• {t('terms.payment.item2')}</li>
                  <li>• {t('terms.payment.item3')}</li>
                  <li>• {t('terms.payment.item4')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                {t('terms.contact.message')}
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
              {t('terms.back-home')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 