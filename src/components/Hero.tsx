import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Name Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-cyan-300">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
          >
            Artur Abdusametov
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white/90"
            style={{ fontWeight: 600 }}
          >
            Full Stack & Blockchain Developer
          </motion.h2>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building next-generation Web3 applications, AI platforms, and scalable systems.
            Specialized in blockchain technologies, decentralized apps, and full-stack development
            with a passion for innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <span className="text-white" style={{ fontWeight: 600 }}>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border border-white/20 rounded-lg hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <span className="text-white" style={{ fontWeight: 600 }}>Contact Me</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-white/80" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-white/80" />
            </a>
            <a
              href="mailto:Knutsenkristian@gmail.com"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-white/80" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
