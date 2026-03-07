import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 85, color: 'from-blue-500 to-blue-600' },
      { name: 'C', level: 75, color: 'from-purple-500 to-purple-600' },
      { name: 'SQL', level: 80, color: 'from-green-500 to-green-600' },
      { name: 'HTML/CSS', level: 85, color: 'from-orange-500 to-orange-600' },
    ],
  },
  {
    category: 'Game Development & Design',
    items: [
      { name: 'Godot Engine', level: 80, color: 'from-cyan-500 to-cyan-600' },
      { name: 'Figma', level: 85, color: 'from-pink-500 to-pink-600' },
    ],
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200 shadow-lg"
            >
              <h3 className="text-2xl text-gray-900 mb-8">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-md`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-lg">
            Continuously learning and expanding my skillset to create amazing gaming experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
}