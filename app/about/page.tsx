import Image from 'next/image';
import { Calendar, MapPin, Clock, Users, Heart, Target, Award, Activity } from 'lucide-react';
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About the Event
            </h1>
            <p className="text-xl md:text-2xl">
              Learn more about our mission to support Metastatic Breast Cancer research
            </p>
          </div>
        </section>

        {/* Main About Image */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative w-full h-[400px] md:h-[600px]">
                <Image
                  src="/images/about.png"
                  alt="LightUpMBC Event"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Event Overview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              Event Overview
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* What is the Event */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-10 h-10 text-teal-600" />
                  <h3 className="text-2xl font-bold text-gray-800">What is the Event?</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The LightUpMBC Howard Beach Color Fun Run is an exciting 3-mile color run/walk through Frank M. Charles Memorial Park. No running experience is necessary! The event kicks off with a spectacular color powder toss, followed by three color stations throughout the course where volunteers will spray participants with vibrant, safe colors.
                </p>
              </div>

              {/* Why We Run */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-10 h-10 text-pink-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Why We Run</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This event shines a light on Metastatic Breast Cancer (Stage 4), where cancer has spread beyond the breast. There is currently NO CURE. We run to raise critical funding for research through METAvivor, bringing hope to those affected and their families.
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-10 h-10 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-800">What to Expect</h3>
                </div>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• 3-mile color run/walk (all fitness levels welcome)</li>
                  <li>• Opening ceremony with color powder toss</li>
                  <li>• Three color stations throughout the course</li>
                  <li>• Amazing raffle prizes (winners announced after the walk)</li>
                  <li>• Family-friendly atmosphere</li>
                  <li>• Community gathering and celebration</li>
                </ul>
              </div>

              {/* Impact */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-10 h-10 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Your Impact</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold text-purple-600 text-xl">100%</span> of net proceeds fund MBC research through METAvivor. Every registration, donation, and sponsorship directly supports:
                </p>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• Groundbreaking research initiatives</li>
                  <li>• Clinical trials for new treatments</li>
                  <li>• Hope for those living with MBC</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Card */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                Event Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Date</h3>
                    <p className="text-gray-700">Saturday, October 25, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Schedule</h3>
                    <p className="text-gray-700">Check-In: 2:00 PM</p>
                    <p className="text-gray-700">Race Start: 3:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-700">Frank M. Charles Memorial Park</p>
                    <p className="text-gray-700">Howard Beach, Queens, NY</p>
                    <p className="text-gray-700 font-semibold">Meet at: 98 St. & 165 Ave.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Distance</h3>
                    <p className="text-gray-700">3 Miles</p>
                    <p className="text-gray-700 text-sm italic">No experience necessary!</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-xl font-bold text-gray-800 mb-4">
                  5th Annual Miles for MBC and Kelly Marie
                </p>
                <p className="text-center text-lg text-gray-700">
                  Presented to benefit <span className="font-bold text-teal-600">METAvivor</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Whether you walk, run, volunteer, donate, or sponsor, every contribution helps us get closer to finding a cure for Metastatic Breast Cancer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DonateButton size="large" variant="primary" />
              <a
                href="/#register"
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

