import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
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
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <h2 className="text-4xl text-cyan-400" style={{ fontWeight: 600 }}>Get In Touch</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl mb-4 text-white" style={{ fontWeight: 600 }}>
                  Let's collaborate
                </h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  I'm always interested in hearing about new projects, opportunities, or just
                  connecting with fellow developers and innovators in the Web3 space.
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:Knutsenkristian@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">Email</div>
                  <div className="text-white">Knutsenkristian@gmail.com</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">GitHub</div>
                  <div className="text-white">View my repositories</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">LinkedIn</div>
                  <div className="text-white">Connect professionally</div>
                </div>
              </a>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm flex flex-col justify-center"
            >
              <div className="mb-8">
                <h3 className="text-2xl mb-4 text-white" style={{ fontWeight: 600 }}>
                  Available for Work
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Currently open to freelance projects, consulting opportunities, and full-time
                  positions in Web3, blockchain development, and AI platforms.
                </p>
              </div>

              <a
                href="mailto:Knutsenkristian@gmail.com"
                className="group w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                <span className="text-white" style={{ fontWeight: 600 }}>Send me a message</span>
              </a>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-white/50 text-center">
                  Based in Kazakhstan • Remote Work
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
