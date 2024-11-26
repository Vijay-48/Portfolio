import { motion } from 'framer-motion';
import { Github, Bot, Smartphone, Database } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      category: "AI/ML",
      icon: <Bot className="w-6 h-6" />,
      items: [
        {
          title: "Joe Personal Voice Assistant",
          description: "An AI-powered voice assistant with natural language processing capabilities.",
          link: "https://github.com/Vijay-48/Joe-Personal-Voice-Assistant"
        },
        {
          title: "Customizable Voice Assistant",
          description: "Voice assistant using OpenAI for enhanced interaction.",
          link: "https://github.com/Vijay-48/Customizable-Voice-Assistant-Using-OpenAI"
        }
      ]
    },
    {
      category: "Android Development",
      icon: <Smartphone className="w-6 h-6" />,
      items: [
        {
          title: "Tic-Tac-Toe",
          description: "Classic game implemented as an Android application.",
          link: "https://github.com/Vijay-48/Tic-Tac-Toe"
        },
        {
          title: "Stopwatch App",
          description: "Precise timing application with lap recording feature.",
          link: "https://github.com/Vijay-48/Stopwatch-App"
        }
      ]
    },
    {
      category: "Blockchain",
      icon: <Database className="w-6 h-6" />,
      items: [
        {
          title: "Decentralized Document Verification",
          description: "Blockchain-based system for secure document verification.",
          link: "https://github.com/Vijay-48"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group block bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all hover:scale-105"
                  >
                    <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      {project.title}
                      <Github className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-gray-300">{project.description}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}