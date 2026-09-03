import { motion } from 'motion/react';
import { Newspaper, FileText, Video, ExternalLink } from 'lucide-react';

export function Media() {
  const mediaItems = [
    { type: 'Article', title: '[Media Article Headline Placeholder]', source: 'National Daily', date: 'Oct 2023', icon: Newspaper },
    { type: 'Report', title: '[Research Report Title Placeholder]', source: 'WE-PACT Insights', date: 'Sep 2023', icon: FileText },
    { type: 'Video', title: '[Campaign Insight Video Placeholder]', source: 'News Channel', date: 'Aug 2023', icon: Video },
    { type: 'Article', title: '[Interview Title Placeholder]', source: 'Digital Media', date: 'Jul 2023', icon: ExternalLink },
  ];

  return (
    <section id="media" className="py-24 bg-gray-50 text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              Media & Insights
            </h2>
            <div className="w-20 h-1 bg-saffron mb-4" />
            <p className="text-gray-600 font-light max-w-xl">
              Our latest research, publications, and press coverage on democratic participation and electoral strategy.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:text-navy transition-colors whitespace-nowrap"
          >
            View All Updates
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full cursor-pointer"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron mb-4">
                  <Icon className="w-4 h-4" />
                  {item.type}
                </div>
                <h3 className="font-bold font-serif mb-4 group-hover:text-accent-blue transition-colors leading-snug flex-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-50">
                  <span>{item.source}</span>
                  <span>{item.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
