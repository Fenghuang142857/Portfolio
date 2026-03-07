import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Gamepad2, Code2, Terminal, Cpu, Layers } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            About <span className="text-purple-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 p-8 h-[600px] relative">
              {/* Animated floating code elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm p-4 rounded-lg"
              >
                <Terminal className="text-white" size={32} />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-24 right-12 bg-white/20 backdrop-blur-sm p-4 rounded-lg"
              >
                <Gamepad2 className="text-white" size={40} />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-32 left-16 bg-white/20 backdrop-blur-sm p-4 rounded-lg"
              >
                <Cpu className="text-white" size={36} />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-12 right-20 bg-white/20 backdrop-blur-sm p-4 rounded-lg"
              >
                <Layers className="text-white" size={32} />
              </motion.div>

              {/* Code snippets */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/3 left-1/4 text-white/60 font-mono text-sm"
              >
                {'<Game/>'}
              </motion.div>

              <motion.div
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
                className="absolute top-1/2 right-1/4 text-white/60 font-mono text-sm"
              >
                {'def create():'}
              </motion.div>

              <motion.div
                animate={{
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
                className="absolute bottom-1/3 left-1/3 text-white/60 font-mono text-sm"
              >
                {'if (player) {...}'}
              </motion.div>

              {/* Tool names floating */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="absolute top-16 left-1/3 text-white/70 font-semibold text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                Python
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
                className="absolute top-1/4 right-16 text-white/70 font-semibold text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                Godot
              </motion.div>

              <motion.div
                animate={{
                  x: [-10, 10, -10],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-1/4 left-12 text-white/70 font-semibold text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                Figma
              </motion.div>

              <motion.div
                animate={{
                  x: [10, -10, 10],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4
                }}
                className="absolute bottom-16 right-1/4 text-white/70 font-semibold text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                SQL
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.5, 0.95, 0.5],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
                className="absolute top-1/3 right-20 text-white/70 font-semibold text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full"
              >
                HTML/CSS
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.3, 0.85, 0.3],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8
                }}
                className="absolute bottom-1/3 right-12 text-white/70 font-semibold text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                C
              </motion.div>

              {/* Center focus */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-white text-center relative"
                >
                  {/* Orbiting particles */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute -top-12 left-1/2 w-3 h-3 bg-white rounded-full opacity-70"></div>
                    <div className="absolute top-1/2 -right-16 w-2 h-2 bg-white rounded-full opacity-60"></div>
                    <div className="absolute -bottom-12 left-1/2 w-3 h-3 bg-white rounded-full opacity-80"></div>
                    <div className="absolute top-1/2 -left-16 w-2 h-2 bg-white rounded-full opacity-70"></div>
                  </motion.div>

                  {/* Glowing ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 border-4 border-white/30 rounded-full blur-sm"
                    style={{ width: '200px', height: '200px', margin: 'auto' }}
                  ></motion.div>

                  {/* Floating symbols around center */}
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-white/70 font-mono text-xl"
                  >
                    {'{ }'}
                  </motion.div>

                  <motion.div
                    animate={{
                      x: [-5, 5, -5],
                      opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute top-1/2 -right-24 transform -translate-y-1/2 text-white/70 font-mono text-lg"
                  >
                    {'[ ]'}
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [5, -5, 5],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                    className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-white/70 font-mono text-xl"
                  >
                    {'< >'}
                  </motion.div>

                  <motion.div
                    animate={{
                      x: [5, -5, 5],
                      opacity: [0.5, 0.95, 0.5],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                    className="absolute top-1/2 -left-24 transform -translate-y-1/2 text-white/70 font-mono text-lg"
                  >
                    {'( )'}
                  </motion.div>

                  {/* Main icon with glow effect */}
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-white rounded-full blur-xl"
                    ></motion.div>
                    <Code2 size={80} className="relative mx-auto mb-4 opacity-90" />
                  </div>

                  <p className="text-2xl font-bold drop-shadow-lg">Game Dev</p>
                  <p className="text-lg opacity-80 drop-shadow-md">AI & ML</p>

                  {/* Binary rain effect */}
                  <motion.div
                    animate={{
                      y: [0, 30],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-full left-1/4 text-white/40 font-mono text-xs"
                  >
                    01010
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 30],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1
                    }}
                    className="absolute top-full right-1/4 text-white/40 font-mono text-xs"
                  >
                    11001
                  </motion.div>

                  {/* Sparkle effects */}
                  <motion.div
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-8 -right-8 text-white text-2xl"
                  >
                    ✦
                  </motion.div>

                  <motion.div
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, -180, -360],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute -bottom-8 -left-8 text-white text-xl"
                  >
                    ✦
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a passionate first-year BTech student specializing in Artificial Intelligence and Machine Learning. 
              My journey in technology is driven by a deep fascination with game development and design.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With mid to high-level proficiency in multiple programming languages and design tools, I'm constantly 
              exploring the intersection of AI, creative design, and interactive gaming experiences.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200 hover:border-purple-400 transition-colors shadow-md hover:shadow-lg">
                <GraduationCap className="text-purple-600 mb-3" size={32} />
                <h3 className="text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600 text-sm">BTech in AI & ML</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200 hover:border-blue-400 transition-colors shadow-md hover:shadow-lg">
                <Gamepad2 className="text-blue-600 mb-3" size={32} />
                <h3 className="text-gray-900 mb-2">Passion</h3>
                <p className="text-gray-600 text-sm">Game Development</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-green-200 hover:border-green-400 transition-colors shadow-md hover:shadow-lg">
                <Code2 className="text-green-600 mb-3" size={32} />
                <h3 className="text-gray-900 mb-2">Focus</h3>
                <p className="text-gray-600 text-sm">Game Design</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors shadow-md hover:shadow-lg">
                <Terminal className="text-gray-600 mb-3" size={32} />
                <h3 className="text-gray-900 mb-2">Tools</h3>
                <p className="text-gray-600 text-sm">Programming</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors shadow-md hover:shadow-lg">
                <Cpu className="text-gray-600 mb-3" size={32} />
                <h3 className="text-gray-900 mb-2">Hardware</h3>
                <p className="text-gray-600 text-sm">Computing</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors shadow-md hover:shadow-lg">
                <Layers className="text-gray-600 mb-3" size={32} />
                <h3 className="text-gray-900 mb-2">Layers</h3>
                <p className="text-gray-600 text-sm">Design</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}