import { motion } from "motion/react";
import { Code, Server, Blocks, Database } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Web3.js"],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Golang", "Python", "Nest.js", "Django"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Blockchain",
      icon: <Blocks className="w-6 h-6" />,
      skills: ["Solidity", "CosmWasm", "Rust", "CosmJS", "Hardhat"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
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
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-4xl text-purple-400" style={{ fontWeight: 600 }}>Skills & Technologies</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 text-white`}>
                  {category.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-xl mb-4 text-white" style={{ fontWeight: 600 }}>
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm"
                    >
                      {skill}
                    </div>
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
