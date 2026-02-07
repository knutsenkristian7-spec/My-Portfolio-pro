import { motion } from "motion/react";
import { MapPin, Code2, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <h2 className="text-4xl text-cyan-400" style={{ fontWeight: 600 }}>About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl mb-2 text-white" style={{ fontWeight: 600 }}>Location</h3>
              <p className="text-white/60">Kazakhstan (Remote)</p>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl mb-2 text-white" style={{ fontWeight: 600 }}>Experience</h3>
              <p className="text-white/60">Senior Developer</p>
            </motion.div>

            {/* Specialization Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl mb-2 text-white" style={{ fontWeight: 600 }}>Focus</h3>
              <p className="text-white/60">Web3 & AI Platforms</p>
            </motion.div>
          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
          >
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              I'm a Senior Full Stack & Blockchain Developer with extensive experience building
              cutting-edge Web3 applications, AI platforms, and scalable distributed systems.
              My expertise spans the full technology stack, from crafting intuitive frontend
              experiences to architecting robust backend infrastructures.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              With deep knowledge in <span className="text-cyan-400">React</span>,{" "}
              <span className="text-cyan-400">Next.js</span>,{" "}
              <span className="text-cyan-400">Solidity</span>,{" "}
              <span className="text-cyan-400">Rust</span>, and{" "}
              <span className="text-cyan-400">Golang</span>, I specialize in developing
              decentralized applications (dApps), smart contracts, and multi-agent AI systems.
              I've successfully delivered enterprise-grade solutions for international clients
              across Web3 startups and AI platforms.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Working remotely from Kazakhstan, I bring a global perspective to every project,
              combining technical excellence with a passion for innovation in blockchain
              technology and artificial intelligence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
