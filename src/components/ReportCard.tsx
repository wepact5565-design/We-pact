import { motion } from 'motion/react';
import { FileText, Download, Calendar, Tag, CheckCircle2 } from 'lucide-react';
import type { Report } from '../data/reports';

interface ReportCardProps {
  report: Report;
  index: number;
}

export function ReportCard({ report, index }: ReportCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white border border-gray-100 rounded-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <div className="h-1 bg-saffron w-full" />

      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-navy text-white font-semibold tracking-wide uppercase rounded-sm">
            <Tag className="w-3 h-3" />
            {report.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-gray-500 font-medium">
            <Calendar className="w-3.5 h-3.5" />
            {report.date}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-serif font-bold text-navy mb-4 leading-snug group-hover:text-navy-light transition-colors">
          {report.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {report.description}
        </p>

        <div className="mb-6 flex-1">
          <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-saffron" />
            Key Findings
          </h4>
          <ul className="space-y-2">
            {report.keyFindings.map((finding, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
          <a
            href={report.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors"
          >
            <FileText className="w-4 h-4" />
            Read Report
          </a>
          <a
            href={report.pdf}
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-navy text-navy text-sm font-semibold rounded-sm hover:bg-navy hover:text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
    </motion.article>
  );
}
