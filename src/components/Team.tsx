import { motion } from 'motion/react';

export function Team() {
  const teamMembers = [
    {
      name: "[Team Member Name]",
      role: "Lead Strategist",
      expertise: "Political Strategy & Public Policy",
      bio: "Over a decade of experience advising on large-scale electoral campaigns and shaping evidence-based policy narratives."
    },
    {
      name: "[Team Member Name]",
      role: "Head of Data Analytics",
      expertise: "Quantitative Research & Polling",
      bio: "Specialises in voter behaviour analysis, demographic modeling, and turning complex datasets into actionable campaign intelligence."
    },
    {
      name: "[Team Member Name]",
      role: "Director of Grassroots",
      expertise: "Community Organisation & Mobilisation",
      bio: "Extensive background in building local community networks, volunteer training, and on-the-ground constituency engagement."
    },
    {
      name: "[Team Member Name]",
      role: "Digital Communications Lead",
      expertise: "Digital Strategy & Media Management",
      bio: "Expert in ethical digital campaigning, combating misinformation, and leveraging new media to amplify democratic participation."
    }
  ];

  return (
    <section id="team" className="py-24 bg-gray-50 text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
              The Team
            </h2>
            <div className="w-20 h-1 bg-saffron mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-light">
              A multidisciplinary group of researchers, strategists, and organisers committed to elevating the standard of political campaigning.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full mb-6 overflow-hidden">
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-navy/10 flex items-center justify-center text-navy/30">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif mb-1 group-hover:text-accent-blue transition-colors">
                {member.name}
              </h3>
              <div className="text-saffron font-medium text-sm mb-3">{member.role}</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-100 pb-4">
                {member.expertise}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
