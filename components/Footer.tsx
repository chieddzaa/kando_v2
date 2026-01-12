'use client';

import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Shop
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="/women" className="hover:text-white transition-colors">
                  Women
                </a>
              </li>
              <li>
                <a href="/men" className="hover:text-white transition-colors">
                  Men
                </a>
              </li>
              <li>
                <a
                  href="/electronics"
                  className="hover:text-white transition-colors"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a href="/home" className="hover:text-white transition-colors">
                  Home & Living
                </a>
              </li>
              <li>
                <a href="/beauty" className="hover:text-white transition-colors">
                  Beauty
                </a>
              </li>
              <li>
                <a href="/deals" className="hover:text-white transition-colors">
                  Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Customer Service
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="/returns"
                  className="hover:text-white transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/track-order"
                  className="hover:text-white transition-colors"
                >
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              About
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Kando
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/sustainability"
                  className="hover:text-white transition-colors"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Legal
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/accessibility"
                  className="hover:text-white transition-colors"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-2 text-base md:text-lg">
              Stay in the loop
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 mb-4">
              Get the latest deals, new arrivals, and exclusive offers delivered
              to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-button text-white placeholder-neutral-500 focus:outline-none focus:border-primary text-sm"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-white rounded-button font-semibold hover:bg-primary-dark transition-colors text-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <p className="text-xs text-neutral-400 mb-4">We accept</p>
          <div className="flex flex-wrap gap-3 items-center">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(
              (method) => (
                <div
                  key={method}
                  className="px-4 py-2 bg-neutral-800 rounded-button text-xs font-medium text-neutral-300"
                >
                  {method}
                </div>
              )
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-neutral-400">Follow us</span>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Twitter', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href={`/${social.toLowerCase()}`}
                  className="text-neutral-400 hover:text-white transition-colors text-xs"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
            <p>© {new Date().getFullYear()} Kando. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
              <a href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

