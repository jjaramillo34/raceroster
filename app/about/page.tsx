import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Users, Heart, Target, Award, Activity, Star, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import DonateButton from '../components/DonateButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Event - LightUpMBC Howard Beach Color Fun Run',
  description: 'Learn about the LightUpMBC Howard Beach Color Fun Run - a 3-mile color run/walk to benefit METAvivor and support Metastatic Breast Cancer research. Join us October 25, 2025.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src="/images/logo.png"
                  alt="LightUpMBC Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About the Event
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Learn more about our mission to support Metastatic Breast Cancer research and join us in making a difference
            </p>
          </div>
        </section>

        {/* Main About Image Section - Enhanced */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            {/* Image Container with Better Handling */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative Border Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-emerald-500 to-pink-500 opacity-10 pointer-events-none"></div>
              
              <div className="relative bg-white p-4 md:p-8">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src="/images/about.png"
                    alt="LightUpMBC Event - Community coming together for MBC research"
                    fill
                    className="object-contain bg-gradient-to-br from-gray-50 to-white"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>
                
                {/* Image Caption */}
                <div className="mt-6 text-center">
                  <p className="text-lg md:text-xl text-gray-700 font-semibold">
                    Join us for the 5th Annual LightUpMBC Howard Beach Color Fun Run
                  </p>
                  <p className="text-gray-600 mt-2">
                    A celebration of hope, community, and the fight against Metastatic Breast Cancer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Highlights - New Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4 fill-current" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Event Highlights
              </h2>
              <p className="text-xl text-gray-600">What makes this event special</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Highlight 1 */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-teal-100 to-teal-50 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Activity className="w-12 h-12 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Color Fun Run</h3>
                <p className="text-gray-600">Experience the joy of color with powder tosses and spray stations throughout the 3-mile course</p>
              </div>

              {/* Highlight 2 */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="w-12 h-12 text-pink-600 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">100% for Research</h3>
                <p className="text-gray-600">Every dollar raised goes directly to METAvivor to fund critical MBC research</p>
              </div>

              {/* Highlight 3 */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Family Friendly</h3>
                <p className="text-gray-600">All ages and fitness levels welcome - walk, jog, or run at your own pace</p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Overview */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              Event Overview
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* What is the Event */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Activity className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">What is the Event?</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The LightUpMBC Howard Beach Color Fun Run is an exciting 3-mile color run/walk through Frank M. Charles Memorial Park. No running experience is necessary! The event kicks off with a spectacular color powder toss, followed by three color stations throughout the course where volunteers will spray participants with vibrant, safe colors.
                </p>
              </div>

              {/* Why We Run */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Why We Run</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This event shines a light on Metastatic Breast Cancer (Stage 4), where cancer has spread beyond the breast. There is currently NO CURE. We run to raise critical funding for research through METAvivor, bringing hope to those affected and their families.
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Zap className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">What to Expect</h3>
                </div>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>3-mile color run/walk (all fitness levels welcome)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Opening ceremony with color powder toss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Three color stations throughout the course</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Amazing raffle prizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Family-friendly celebration</span>
                  </li>
                </ul>
              </div>

              {/* Impact */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Your Impact</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold text-purple-600 text-2xl">100%</span> of net proceeds fund MBC research through METAvivor. Every registration, donation, and sponsorship directly supports:
                </p>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Groundbreaking research initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Clinical trials for new treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Hope for those living with MBC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Card */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 via-emerald-50 to-pink-50 rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                Event Details
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                      <Calendar className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">Date</h3>
                      <p className="text-gray-700">Saturday, October 25, 2025</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 p-3 rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">Schedule</h3>
                      <p className="text-gray-700">Check-In: 2:00 PM</p>
                      <p className="text-gray-700">Race Start: 3:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">Location</h3>
                      <p className="text-gray-700">Frank M. Charles Memorial Park</p>
                      <p className="text-gray-700">Howard Beach, Queens, NY</p>
                      <p className="text-gray-700 font-semibold mt-1">Meet at: 98 St. & 165 Ave.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">Distance</h3>
                      <p className="text-gray-700">3 Miles</p>
                      <p className="text-gray-700 text-sm italic">No experience necessary!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <p className="text-xl font-bold text-gray-800 mb-2">
                  5th Annual Miles for MBC and Kelly Marie
                </p>
                <p className="text-lg text-gray-700">
                  Presented to benefit <span className="font-bold text-teal-600">METAvivor</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-pink-500 fill-current mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Whether you walk, run, volunteer, donate, or sponsor, every contribution helps us get closer to finding a cure for Metastatic Breast Cancer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DonateButton size="large" variant="primary" />
              <a
                href="https://raceroster.com/events/2025/101366/miles-for-mbc-and-kelly-marie/register?ref=event-right-sidebar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Register to Run</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="gradient-hero text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="w-8 h-8" />
              <Activity className="w-8 h-8" />
              <Users className="w-8 h-8" />
            </div>
            <p className="text-2xl font-bold mb-4">
              100% of net proceeds fund MBC research through METAvivor
            </p>
            <p className="text-lg">
              Together, we can make a difference in the fight against Metastatic Breast Cancer
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
