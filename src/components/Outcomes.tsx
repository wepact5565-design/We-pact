import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Outcomes() {
  const outcomes = [
    { title: "Better understanding of public issues", desc: "Clear identification of key voter priorities through structured research." },
    { title: "Stronger campaign organisation", desc: "Streamlined operational structures and disciplined grassroots networks." },
    { title: "Evidence-based decision making", desc: "Resource allocation driven by data rather than intuition." },
    { title: "Improved public engagement", desc: "Higher interaction rates through localized, relevant messaging." },
    { title: "Better communication", desc: "Consistent narrative delivery across all media and interpersonal channels." },
    { title: "Data-informed strategy", desc: "Dynamic tactical adjustments based on real-time feedback loops." },
  ];

  return (
    <section id="outcomes" className="py-24 bg-white text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
              Our Outcomes
            </h2>
            <div className="w-20 h-1 bg-saffron mb-8" />
            <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-accent-blue mb-8">
              <h3 className="text-2xl font-bold font-serif mb-3">Evidence, Not Exaggeration.</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                We believe in ethical campaigning and accountability. Outcomes shown on this platform are 
                based strictly on verified projects and documented evidence. We do not fabricate statistics, 
                claim unverified electoral victories, or misrepresent our impact.
              </p>
            </div>
            <p className="text-gray-600">
              For detailed case studies and performance metrics regarding <span className="font-semibold">[Verified Project]</span>, 
              please contact our strategy team.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-gray-100 rounded-sm hover:shadow-sm transition-shadow"
              >
                <CheckCircle2 className="w-6 h-6 text-saffron mb-4" />
                <h4 className="font-bold mb-2">{outcome.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {outcome.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
