import { Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-navy-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="text-3xl font-serif font-bold tracking-tight mb-4 inline-block">
              WE-PACT<span className="text-saffron">.</span>
            </a>
            <p className="text-sm text-gray-400 mb-6 font-light leading-relaxed">
              We The Political Action Team.
              <br />
              Empowering Democracy. Building the Future.
            </p>
            <p className="text-sm text-gray-300 font-medium mb-6">
              हमारा संकल्प: विकास और एकता
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/14qNhbmzEDT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/wethepeople5565?s=11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pactwe?igsi=bmRudGwxdDBhYW9r" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><a href="#home" className="hover:text-saffron transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-saffron transition-colors">Our Story</a></li>
              <li><a href="#efforts" className="hover:text-saffron transition-colors">Our Efforts</a></li>
              <li><a href="#outcomes" className="hover:text-saffron transition-colors">Our Outcomes</a></li>
              <li><a href="#vision" className="hover:text-saffron transition-colors">Our Vision</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><a href="#media" className="hover:text-saffron transition-colors">Media & News</a></li>
              <li><a href="#team" className="hover:text-saffron transition-colors">The Team</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <a href="mailto:WEPACT5565@GMAIL.COM" className="hover:text-white transition-colors">WEPACT5565@GMAIL.COM</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <a href="tel:+919654242216" className="hover:text-white transition-colors">+91 9654242216</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <span>[Office Address Placeholder]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-lighter flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} WE-PACT (We The Political Action Team). All rights reserved.</p>
          <p>Where People, Strategy & Democracy Connect.</p>
        </div>
      </div>
    </footer>
  );
}
