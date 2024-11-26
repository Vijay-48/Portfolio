import { motion } from 'framer-motion';
import { Code2, Database, Palette, Terminal } from 'lucide-react';

export function About() {
  const skills = [
    {
      category: "Programming",
      icon: <Terminal className="w-6 h-6" />,
      items: ["Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      category: "Frameworks",
      icon: <Code2 className="w-6 h-6" />,
      items: ["React", "Node.js", "Vite", "Solidity"]
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6" />,
      items: ["Firebase", "MongoDB"]
    },
    {
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      items: ["Illustrator", "Photoshop", "Procreate", "Canva"]
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a 4th-year B-Tech student specializing in Artificial Intelligence,
            based in Hyderabad, Telangana. My passion lies in creating innovative
            solutions using cutting-edge technologies in AI/ML, Web Development,
            and Blockchain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}