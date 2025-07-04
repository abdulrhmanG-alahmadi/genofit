'use client'

import { useLanguage } from '@/contexts/language-context'
import { ArrowLeft, ArrowRight, Mail, MessageCircle, Phone, Clock, HelpCircle, Wrench, Package, MessageSquare, Zap, Target, CheckCircle, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function SupportPage() {
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
              <span>{t('support.back-home')}</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              {t('support.title')}
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
              {t('support.introduction.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('support.introduction.description')}
            </p>
          </section>

          {/* Communication Channels */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('support.channels.title')}
            </h2>

            {/* Email Support */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('support.channels.email.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    {t('support.channels.email.description')}
                  </p>
                  <p className="font-semibold text-blue-600">
                    <a href="mailto:info@genofit.sa" className="hover:underline">
                      info@genofit.sa
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('support.channels.chat.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('support.channels.chat.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Support */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('support.channels.phone.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    {t('support.channels.phone.description')}
                  </p>
                  <p className="font-semibold text-purple-600">
                    <a href="tel:+966123456789" className="hover:underline">
                      +966 12 345 6789
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Working Hours */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('support.hours.title')}
            </h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  {t('support.hours.schedule')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('support.hours.after-hours')}
                </p>
              </div>
            </div>
          </section>

          {/* Support Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('support.services.title')}
            </h2>

            {/* General Inquiries */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('support.services.general.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('support.services.general.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('support.services.technical.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('support.services.technical.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Tracking */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('support.services.tracking.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('support.services.tracking.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Complaints and Feedback */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('support.services.feedback.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('support.services.feedback.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitments */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('support.commitments.title')}
            </h2>

            {/* Quick Response */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('support.commitments.response.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('support.commitments.response.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Efficient Problem Solving */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('support.commitments.solving.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('support.commitments.solving.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Accurate Information */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('support.commitments.information.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('support.commitments.information.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Improvement Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {t('support.improvement.title')}
            </h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• {t('support.improvement.item1')}</li>
                  <li>• {t('support.improvement.item2')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                {t('support.contact.message')}
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-semibold text-blue-600">
                  <a href="mailto:info@genofit.sa" className="hover:underline">
                    📧 info@genofit.sa
                  </a>
                </p>
                <p className="font-semibold text-blue-600">
                  <a href="tel:+966123456789" className="hover:underline">
                    📞 +966 12 345 6789
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8 border-t">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isRTL ? <ArrowRight className="w-5 h-5 mr-2" /> : <ArrowLeft className="w-5 h-5 mr-2" />}
              {t('support.back-home')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 