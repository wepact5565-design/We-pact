import { motion } from 'motion/react';
import { 
  UserCircle, FileText, Search, Users, Map, Video, 
  MessageSquare, ShieldCheck, BookOpen, GraduationCap, 
  Heart, LineChart, HandHeart, Presentation, Radio, 
  ClipboardCheck, Scale, CheckCircle2, XCircle, AlertCircle
} from 'lucide-react';

export function WhatWeDo() {
  const supportAreas = [
    { icon: UserCircle, title: "Candidate Profiling", desc: "Professionally presenting background, track record, vision, and key priorities." },
    { icon: FileText, title: "Manifesto Drafting", desc: "Assisting in creating a practical, issue-based, and citizen-centric manifesto." },
    { icon: Search, title: "Policy Research", desc: "In-depth research on education, jobs, healthcare, sanitation, safety, and environment." },
    { icon: Users, title: "Stakeholder Outreach", desc: "Organizing dialogues with youth, women, civil society, and local resident groups." },
    { icon: Map, title: "Campaign Strategy", desc: "Designing an ethical, issue-focused, and positive electoral campaign roadmap." },
    { icon: Video, title: "Digital Media Production", desc: "Creating infographics, videos, social media posts, and digital collateral." },
    { icon: MessageSquare, title: "Content & Speeches", desc: "Drafting speeches, press releases, pamphlets, Q&A sheets, and public statements." },
    { icon: ShieldCheck, title: "Fact-Checking", desc: "Thoroughly verifying data, facts, and statistical claims used across the campaign." },
    { icon: BookOpen, title: "Volunteer Training", desc: "Equipping volunteers with skills in communication, PR, and campaign ethics." },
    { icon: GraduationCap, title: "Youth Issues", desc: "Mainstreaming student and youth concerns prominently in the campaign." },
    { icon: Heart, title: "Women's Agenda", desc: "Integrating the priorities of women voters and community groups." },
    { icon: LineChart, title: "Public Sentiment", desc: "Gathering regular feedback via field surveys, town halls, and digital polls." },
    { icon: HandHeart, title: "Grievance Redressal", desc: "Systematically tracking citizen grievances and structured follow-ups." },
    { icon: Presentation, title: "Debate Preparation", desc: "Coaching the candidate for public debates, press interviews, and difficult questions." },
    { icon: Radio, title: "Media Management", desc: "Coordinating press conferences, media interviews, and regional news coverage." },
    { icon: ClipboardCheck, title: "Campaign Review", desc: "Conducting periodic reviews of campaign activities and voter feedback." },
    { icon: Scale, title: "Post-Election Accountability", desc: "Monitoring progress on manifesto promises and public governance." },
  ];

  const limitations = [
    "No offering money, gifts, or personal inducements in exchange for votes.",
    "No appeals for votes based on caste, religion, language, or sectarian identity.",
    "No unverified allegations, slander, or personal attacks against opponents.",
    "Strict avoidance of fake news, misinformation, and deceptive promises.",
    "No misuse of public office, government resources, or administrative power.",
    "Mandatory verification of the legal, financial, and practical feasibility of every promise."
  ];

  return (
    <section id="what-we-do" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight text-white">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-saffron mb-6" />
            <p className="text-xl text-accent-blue font-serif font-medium uppercase tracking-wide mb-6">
              Candidate Commitments, Guidelines & Code of Conduct
            </p>
            <p className="text-lg text-gray-300 font-light max-w-3xl">
              The WE-PACT team collaborates closely with candidates to execute and ensure our key operational and campaign support areas.
            </p>
          </motion.div>
        </div>

        {/* Support Areas Grid */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold font-serif mb-8 border-l-4 border-saffron pl-4"
          >
            Key Operational & Campaign Support Areas
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {supportAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-navy-light p-6 rounded-sm border border-navy-lighter hover:border-saffron/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-navy-lighter text-gray-400 font-bold text-xs px-2 py-1 rounded-bl-sm">
                    {index + 1}
                  </div>
                  <div className="mb-4 text-saffron">
                    <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 leading-snug group-hover:text-white text-gray-100 transition-colors pr-4">
                    {area.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {area.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Commitment to Candidates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-navy p-8 rounded-sm border-t-4 border-accent-blue shadow-lg flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-accent-blue" />
              <h3 className="text-2xl font-bold font-serif">Our Commitment to Candidates</h3>
            </div>
            <p className="text-gray-700 italic leading-relaxed font-light text-lg">
              "The WE-PACT team will support making your campaign issue-based, inclusive, transparent, and people-centric. We assist in communicating your vision to citizens through thorough research, manifesto development, public outreach, strategic communication, volunteer training, fact-checking, and responsive citizen feedback systems."
            </p>
          </motion.div>

          {/* Limitations & Code of Conduct */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 text-navy p-8 rounded-sm border-t-4 border-red-500 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-bold font-serif">Our Limitations & Code of Conduct</h3>
            </div>
            <ul className="space-y-4">
              {limitations.map((limitation, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-700 leading-tight">
                    {limitation}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-lighter p-8 rounded-sm border border-navy-light text-center"
        >
          <p className="text-lg md:text-xl font-medium text-gray-200">
            "WE-PACT will support you not only throughout the election campaign, but also in developing the lasting profile of a responsible, inclusive, and accountable public leader."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
