import { motion } from 'motion/react';
import { ArrowRight, Users, Network, BookOpen, HandHeart } from 'lucide-react';

export function StandWithUs() {
  const options = [
    { icon: Network, title: "Collaborate", desc: "Partner with us on democratic initiatives." },
    { icon: Users, title: "Join the Network", desc: "Become part of our growing professional community." },
    { icon: BookOpen, title: "Research Partnerships", desc: "Engage in data-driven civic studies." },
    { icon: HandHeart, title: "Volunteer", desc: "Contribute your time to meaningful campaigns." }
  ];

  return (
    <section id="stand-with-us" className="py-24 bg-white text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy rounded-sm overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  Stand With WE-PACT
                </h2>
                <p className="text-xl text-gray-300 font-light mb-10 leading-relaxed">
                  Join a growing community working at the intersection of people, strategy, research and democratic participation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:WEPACT5565@GMAIL.COM" 
                    className="bg-saffron hover:bg-amber-600 text-navy font-semibold px-8 py-4 rounded-sm transition-colors flex items-center justify-center gap-2 group"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="bg-navy-light p-12 md:p-16 border-t lg:border-t-0 lg:border-l border-navy-lighter">
              <h3 className="text-xl font-semibold text-white mb-8">Ways to get involved</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {options.map((opt, i) => {
                  const Icon = opt.icon;
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Icon className="w-6 h-6 text-saffron mb-3" />
                      <h4 className="font-bold text-white mb-2">{opt.title}</h4>
                      <p className="text-sm text-gray-400 font-light">{opt.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
