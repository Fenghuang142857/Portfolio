import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        const response = await fetch('https://api.github.com/users/Fenghuang142857/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubRepos();
  }, []);

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'yellow',
      TypeScript: 'blue',
      Python: 'green',
      Java: 'orange',
      HTML: 'red',
      CSS: 'purple',
      C: 'gray',
      'C++': 'pink',
      Go: 'cyan',
      Rust: 'orange',
    };
    return colors[language || ''] || 'purple';
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            My <span className="text-purple-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Fetched directly from my GitHub</p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                      {repo.name}
                    </h3>
                    <Github className="text-gray-600 group-hover:text-purple-600 transition-colors" size={20} />
                  </div>
                  <p className="text-gray-600 mb-4 text-sm min-h-[3rem]">
                    {repo.description || 'No description available'}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    {repo.language && (
                      <span className={`flex items-center gap-1`}>
                        <span className={`w-3 h-3 rounded-full bg-${getLanguageColor(repo.language)}-500`}></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} />
                      {repo.forks_count}
                    </span>
                  </div>

                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs border border-purple-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p>No repositories found. Check back later!</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Fenghuang142857"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
