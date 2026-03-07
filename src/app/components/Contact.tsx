import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      // Using Formspree - sends to saikrishna.8d.kmbvm@gmail.com
      const response = await fetch('https://formspree.io/f/xanyqajy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl border border-purple-200 shadow-lg"
          >
            <div className="text-center mb-12">
              <p className="text-gray-700 text-lg mb-6">
                I'm always excited to collaborate on game development projects or discuss new opportunities!
              </p>
              <p className="text-gray-600">
                Whether you want to work together or just say hi, feel free to reach out.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : formStatus === 'error' ? 'Error - Try Again' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="text-green-600 text-center">Thank you! Your message has been sent successfully.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center">Oops! Something went wrong. Please try again or email me directly at saikrishna.8d.kmbvm@gmail.com</p>
              )}
            </motion.form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-12 text-gray-500"
          >
            <p>© 2026 Saikkrishna P All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
