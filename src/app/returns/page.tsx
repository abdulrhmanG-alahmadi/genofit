'use client'

import { useLanguage } from '@/contexts/language-context'
import { ArrowLeft, ArrowRight, Package, Clock, AlertTriangle, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ReturnPolicyPage() {
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
              <span>{t('returns.back-home')}</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              {t('returns.title')}
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container-max py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          
          {/* Return Policy Conditions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('returns.conditions.title')}
            </h2>

            {/* Cancellation Before Testing */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('returns.conditions.cancellation-title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('returns.conditions.cancellation-desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* No Refund After Use */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('returns.conditions.no-refund-title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('returns.conditions.no-refund-desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Exception Cases */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('returns.conditions.exceptions-title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('returns.conditions.exceptions-desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Cancellation */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('returns.conditions.cancellation-order-title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('returns.conditions.cancellation-order-desc')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Return Procedures */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('returns.procedures.title')}
            </h2>

            {/* Return Request */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('returns.procedures.request-title')}
              </h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('returns.procedures.request-desc')}
                </p>
                <p className="font-semibold text-blue-600">
                  <a href="mailto:info@genofit.sa" className="hover:underline">
                    info@genofit.sa
                  </a>
                </p>
              </div>
            </div>

            {/* Required Documents */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('returns.procedures.documents-title')}
              </h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('returns.procedures.documents-desc')}
                </p>
              </div>
            </div>

            {/* Processing Time */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('returns.procedures.processing-title')}
              </h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('returns.procedures.processing-desc')}
                </p>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('returns.notes.title')}
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 leading-relaxed">
                  {t('returns.notes.verification')}
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-gray-700 leading-relaxed">
                  {t('returns.notes.policy-changes')}
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                {t('returns.contact.message')}
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
              {t('returns.back-home')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 