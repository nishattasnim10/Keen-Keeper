import React from 'react'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import fb from '../../assets/facebook.png'

const Footer = () => {
  return (
      <footer className="bg-[#1e3d2f] text-white py-12 px-6">
          <div className="container mx-auto flex flex-col items-center text-center">

              {/* Brand Name */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  KeenKeeper
              </h1>

              {/* Tagline */}
              <p className="text-gray-300 max-w-2xl text-xs md:text-base mb-8">
                  Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
              </p>

              {/* Social Links Section */}
              <div className="flex flex-col items-center gap-4 mb-12">
                  <h3 className="text-lg font-medium">Social Links</h3>
                  <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                          <img src={instagram} alt="Instagram" className="w-6 h-6" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                          <img src={fb} alt="Facebook" className="w-6 h-6" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                          <img src={twitter} alt="Twitter" className="w-6 h-6" />
                      </a>
                  </div>
              </div>

              {/* Bottom Bar */}
              <div className="w-full border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4">
                  <p>© 2026 KeenKeeper. All rights reserved.</p>
                  <div className="flex gap-6">
                      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                      <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                      <a href="#" className="hover:text-white transition-colors">Cookies</a>
                  </div>
              </div>

          </div>
      </footer>
  )
}

export default Footer