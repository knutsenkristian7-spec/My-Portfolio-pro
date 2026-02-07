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
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "DeFi Protocol",
      description: "CosmWasm-based DeFi application for the Cosmos ecosystem. Implements staking, liquidity pools, and yield farming with secure smart contracts.",
      tags: ["Blockchain", "CosmWasm", "Rust", "DeFi"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Web3 Wallet Integration",
      description: "Comprehensive Web3 authentication and transaction system supporting MetaMask, WalletConnect, and Cosmos wallets. Features multi-chain support and seamless UX.",
      tags: ["Web3", "Full Stack", "TypeScript", "CosmJS"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Blockchain Analytics Dashboard",
      description: "Real-time blockchain analytics platform with on-chain data visualization, smart contract monitoring, and transaction tracking across multiple networks.",
      tags: ["Full Stack", "Blockchain", "Next.js", "PostgreSQL"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "DAO Governance Platform",
      description: "Decentralized autonomous organization platform with proposal voting, treasury management, and tokenomics. Built with Solidity and React.",
      tags: ["Web3", "Blockchain", "Solidity", "Governance"],
      gradient: "from-violet-500/20 to-purple-500/20",
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
