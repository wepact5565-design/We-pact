import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-navy text-white overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541872579728-662589578dd3?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-green-600/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-navy-light border border-navy-lighter rounded-full text-sm font-medium text-saffron mb-6">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
            We The Political Action Team
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tight mb-6 leading-[1.1]">
            Where People, <br className="hidden md:block" />
            <span className="text-gray-300">Strategy & Democracy</span> <br />
            Connect.
          </h1>
          
          <p className="text-xl md:text-2xl font-serif text-accent-blue mb-4">
            EMPOWERING DEMOCRACY. BUILDING THE FUTURE.
          </p>
          
          <p className="text-lg text-gray-300 font-medium mb-8">
            हमारा संकल्प: विकास और एकता (Our Resolution: Progress and Unity)
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
            WE-PACT brings together political research, campaign strategy, data analytics, grassroots engagement and digital communication to build more informed and participatory democratic campaigns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a 
              href="#stand-with-us" 
              className="bg-saffron hover:bg-amber-600 text-navy font-semibold px-8 py-4 rounded-sm transition-colors flex items-center justify-center gap-2 group"
            >
              Stand With WE-PACT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#what-we-do" 
              className="bg-transparent border border-gray-600 hover:border-gray-300 text-white font-semibold px-8 py-4 rounded-sm transition-colors flex items-center justify-center"
            >
              Explore Our Work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#story" className="text-gray-500 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
