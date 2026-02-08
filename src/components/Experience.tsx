import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Zuvu",
      role: "Full Stack & Blockchain Developer",
      period: "2024 - 2025",
      highlights: [
        "Developed zuvu.ai that provides access to 250+ AI models and agents, featuring multi-agent squads, intelligent task routing, real-time collaborative chat, and document integration to streamline workflows and reduce costs.",
        "Developed the websites makeitaquote, makeitasticker, and socialtensor using React.js and Tailwind CSS.",
        "Integrated a wallet into the NFTInpect website using web3.js.",
        "Created three bots for Twitter, Discord, and Telegram related to MIAQ and MIAS using Python",
        "Participated in the socialtensor subnet based NicheImage subnet with bittensor.",
      ],
    },
    {
      company: "TechFye",
      role: "Blockchain Developer",
      period: "2021 - 2024",
      highlights: [
        "Contributed to the smart contract Solidity smart contract behind the NFT marketplace featured createNFT, listNFT, cancelListing, addToCart, burn, and other relevant functions.",
        "Architected feature-rich gaming, rewards, and a pack NFT project for a major sports league. Developed a rewards staking feature for our NFT stack.",
        "Created a generic smart contracts viewer feature on the Commonwealth DAO Platform. The feature allowed users to add and view any contract on the Ethereum Networks using just the address and ABI. It also allowed users to call the contract functions.",
        "Maintained and developed upon the entire Solidity stack.",
        "Used Jira for bug tracking and feature development tracking. Used Confluence for documentation",
      ],
    },
    {
      company: "Freeblock",
      role: "Full Stack Developer",
      period: "2019 - 2020",
      highlights: [
        "Built and maintained a dashboard billing page that illustrates the usage of Unity game services with sophisticated graphs and charts.",
        "Architected and built back-end APIs to monitor usage events with ETL tools and trigger notifications at certain conditions.",
        "Developed a Web 3.0 real-time bidding auction app that helps artists to auction their art.",
        "Created the API and UI of a media hosting app from scratch to help artists easily manage their art and collections.",
        "Participated in smart contract development."
      ],
    },
    {
      company: "ilink",
      role: "Full Stack Developer",
      period: "2018 - 2019",
      highlights: [
        "Built automation solutions for data ETL, logins, form submission, and other repetitive actions for 100+ different sources.",
        "Built dashboards for clients to interact with and view the progress of large-scale data scraping and API consumption tasks.",
        "Reverse-engineered hundreds of hidden website APIs to extract desired data for clients.",
        "Worked as a full-stack developer in UI components as well as back-end and API endpoints.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
            <h2 className="text-4xl text-blue-400" style={{ fontWeight: 600 }}>Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 md:pl-24"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-4 ring-black/50" />
                  </div>

                  {/* Content Card */}
                  <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-2xl text-white mb-1" style={{ fontWeight: 600 }}>
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.role}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
