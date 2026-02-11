import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  gradient: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "zuvu.ai",
      description: "Enterprise AI platform featuring multi-agent systems, real-time collaboration, and intelligent automation. Built with Next.js, Node.js, and advanced AI models.",
      tags: ["AI", "Full Stack", "Next.js", "Microservices"],
      link: "https://zuvu.ai",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "NFT Marketplace",
      description: "Decentralized NFT marketplace with smart contract minting, trading, and royalty distribution. Features Web3 wallet integration and gas-optimized Solidity contracts.",
      tags: ["Web3", "Blockchain", "Solidity", "React"],
      link: "https://my-nft-marketplace.vercel.app",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "CosmWasm smart contract",
      description: "I have some experience of CosmWasm smart contracts in Rust and Cosmos SDK development in Go.",
      tags: ["Web3", "Blockchain", "Golang", "Rust", "React"],
      link: "https://developers.cosmos.network/",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Render Vue.js from inside Twig",
      description: "Wrote components with Vue.js, and SCSS. I also wrote back-end routing using PHP Symfony.",
      tags: ["Symfony", "Vue.js", "JavaScript", "SCSS"],
      link: "https://ux.symfony.com/vue",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Django CMS Live Demo",
      description: "Converted an old PHP site to Django-Python.",
      tags: ["Python", "Django", "JaveScript", "HTML/CSS"],
      link: "https://www.django-cms.org/en/django-cms-demo/",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Back-end API",
      description: "Architected and built back-end APIs to monitor usage events with ETL tools and trigger notifications at certain conditions.",
      tags: [ "React", "Next.js", "TailwindCSS"],
      link: "https://retool.com/templates/etl-monitoring-dashboard",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Web 3.0 real-time bidding auction app",
      description: "Developed a Web 3.0 real-time bidding auction app that helps artists to auction their art",
      tags: ["Web3", "Blockchain", "Solidity", "React"],
      link: "https://web3.gbm.auction/",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Artist",
      description: "Created the API and UI of a media hosting app from scratch to help artists easily manage their art and collections.",
      tags: ["Web3", "Blockchain", "Solidity", "React"],
      link: "https://www.artstation.com/",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Automation Solutions",
      description: "Built automation solutions for data ETL, logins, form submission, and other repetitive actions for 100+ different sources.",
      tags: ["Blockchain", "Web3", "python", "React"],
      link: "https://zapier.com/",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Dashboards for Clients",
      description: "Built dashboards for clients to interact with and view the progress of large-scale data scraping and API consumption tasks.",
      tags: ["Blockchain", "CosmWasm", "Rust", "DeFi"],
      link: "https://www.elastic.co/kibana",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Reverse-engineering",
      description: "Reverse-engineered hundreds of hidden website APIs to extract desired data for clients.",
      tags: ["Blockchain",  "Rust", "DeFi"],
      link: "https://portswigger.net/burp",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Thought of the day",
      description: "Worked as a full-stack developer in UI components as well as back-end and API endpoints.",
      tags: ["Django", "HTML/CSS", "JavaScript", "Node.js", "PHP"],
      link: "https://www.topchretien.com",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <h2 className="text-4xl text-cyan-400" style={{ fontWeight: 600 }}>Featured Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="w-6 h-6 rounded bg-white/20" />
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-white/60" />
                      </a>
                    )}
                    <button className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300">
                      <Github className="w-4 h-4 text-white/60" />
                    </button>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors" style={{ fontWeight: 600 }}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-white/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
