import { motion } from 'motion/react';

export function Vision() {
  const topics = [
    "Democratic participation",
    "Youth engagement",
    "Responsible political communication",
    "Evidence-based governance",
    "Technology-enabled democracy",
    "Grassroots voices",
    "Ethical campaigning"
  ];

  return (
    <section id="vision" className="relative py-32 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay grayscale" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="text-saffron font-medium tracking-widest uppercase text-sm mb-6">Our Vision</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-12 leading-tight">
            Building a More Informed, Participatory & Responsive Democracy.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {topics.map((topic, i) => (
              <span 
                key={i}
                className="px-4 py-2 border border-navy-lighter bg-navy/50 backdrop-blur-sm rounded-full text-sm md:text-base font-light text-gray-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
