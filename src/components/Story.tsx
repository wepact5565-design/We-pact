import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Story() {
  return (
    <section id="story" className="py-24 bg-white text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="text-saffron font-medium tracking-widest uppercase text-sm mb-4">Established in 2024</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-saffron mb-10" />
            
            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
              <p className="font-medium text-navy text-xl">
                WE-PACT is a collective of ignited and conscious minds—driven by ideas, guided by purpose, and committed to meaningful action.
              </p>
              <p>
                Founded in 2024, WE-PACT emerged from a shared belief that political campaigning in India can evolve—becoming more research-driven, data-informed, people-centric, ethical, and participatory.
              </p>
              <p>
                We were brought together by a common ambition: to contribute towards a revolutionary transformation in the way political campaigns are researched, designed, communicated, and executed in India.
              </p>
              <p>
                WE-PACT brings together young and experienced minds from diverse academic and professional backgrounds, including academics, researchers, students across India, and Indian students and professionals connected with institutions overseas. This diversity of perspectives allows us to look at Indian political campaigns not merely through the lens of elections, but through the wider dimensions of society, public policy, governance, technology, communication, and democratic participation.
              </p>
              <p>
                We believe that the future of political campaigning lies at the intersection of people and data, grassroots realities and academic knowledge, technology and human understanding, strategy and democratic values.
              </p>
              <p className="font-medium text-navy">
                At WE-PACT, we work towards building this bridge.
              </p>
              <p>
                From constituency research and political data analytics to grassroots engagement, digital communication, campaign strategy, public-issue research, and campaign management—we aim to bring a more professional, evidence-based, innovative, and ethical approach to political campaigning.
              </p>
            </div>
          </motion.div>
          
          {/* Manifesto/Poem Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-navy text-white p-8 md:p-12 rounded-sm sticky top-32 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-6 text-saffron leading-snug">
                WE-PACT is not simply a campaign organisation.
              </h3>
              <p className="text-gray-300 font-light leading-relaxed mb-10 text-lg">
                It is an evolving ecosystem of ideas, expertise, research, technology, and people—working towards a more informed, responsive, and participatory democracy in India.
              </p>
              
              <div className="border-t border-navy-lighter pt-8">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-semibold">At WE-PACT,</p>
                <ul className="space-y-4 font-serif text-xl md:text-2xl mb-10">
                  <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-saffron" /> Ideas create possibilities.</li>
                  <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-saffron" /> Research creates clarity.</li>
                  <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-saffron" /> Strategy creates direction.</li>
                  <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-saffron" /> People create change.</li>
                  <li className="flex items-center gap-4 text-accent-blue"><span className="w-2 h-2 rounded-full bg-accent-blue" /> Democracy gives it purpose.</li>
                </ul>

                <div className="border-t border-navy-lighter pt-8">
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-semibold">Connect With Us</p>
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://www.facebook.com/share/14qNhbmzEDT/?mibextid=wwXIfr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-navy-lighter flex items-center justify-center text-white hover:bg-saffron hover:text-navy transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://x.com/wethepeople5565?s=11" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-navy-lighter flex items-center justify-center text-white hover:bg-saffron hover:text-navy transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/pactwe?igsi=bmRudGwxdDBhYW9r" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-navy-lighter flex items-center justify-center text-white hover:bg-saffron hover:text-navy transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
