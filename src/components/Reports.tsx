import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { ReportCard } from './ReportCard';
import { reports } from '../data/reports';

export function Reports() {
  return (
    <section id="reports" className="py-24 bg-gray-50 text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-saffron" />
            <span className="text-xs font-bold text-saffron uppercase tracking-widest">
              Publications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Research Reports
          </h2>
          <div className="w-20 h-1 bg-saffron mb-8" />
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Our election analysis, policy research, and data-driven insights
            on democratic participation and political strategy in India.
          </p>
        </motion.div>

        {reports.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-lg">No reports published yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <ReportCard key={report.id} report={report} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
