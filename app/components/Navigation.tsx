'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="LightUpMBC Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-pink-600 bg-clip-text text-transparent">
              LightUpMBC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              About
            </Link>
            <a
              href="#sponsors"
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              Sponsors
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              Contact
            </a>
            <a
              href="https://raceroster.com/events/2025/101366/miles-for-mbc-and-kelly-marie/fundraising-organization/71286#event-description"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all shadow-md hover:shadow-lg"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-teal-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-teal-600 font-semibold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-teal-600 font-semibold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <a
              href="#sponsors"
              className="block text-gray-700 hover:text-teal-600 font-semibold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Sponsors
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-teal-600 font-semibold transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://raceroster.com/events/2025/101366/miles-for-mbc-and-kelly-marie/fundraising-organization/71286#event-description"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

