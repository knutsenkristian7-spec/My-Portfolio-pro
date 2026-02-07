import { motion } from "motion/react";
import { Mountain, Snowflake, Book, Gamepad2 } from "lucide-react";

interface Interest {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export function Interests() {
  const interests: Interest[] = [
    {
      title: "Rock Climbing",
      description: "Scaling heights and solving problems, both on the wall and in code",
      icon: <Mountain className="w-6 h-6" />,
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Snowboarding",
      description: "Finding flow and balance in the mountains",
      icon: <Snowflake className="w-6 h-6" />,
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Sci-Fi & Fantasy",
      description: "Exploring worlds of imagination through novels and stories",
      icon: <Book className="w-6 h-6" />,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Gaming",
      description: "Legend of Zelda: BOTW & TOTK enthusiast",
      icon: <Gamepad2 className="w-6 h-6" />,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="interests" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-4xl text-purple-400" style={{ fontWeight: 600 }}>Beyond Code</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>

          {/* Interests Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${interest.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                    {interest.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-white" style={{ fontWeight: 600 }}>
                      {interest.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm text-center"
          >
            <p className="text-lg text-white/70 italic">
              "Life is about balance—whether it's debugging code, conquering a climbing route, or exploring fantastical worlds."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
