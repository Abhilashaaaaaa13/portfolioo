import React, { useState } from 'react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${formData.name}\n\n${formData.message}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      title: 'Deep Research Agent',
      subtitle: 'AI Scientist',
      description: 'Autonomous AI research assistant that fetches papers from ArXiv and OpenAlex, ranks them using embeddings, performs trend analysis, and generates research roadmaps using LangGraph workflows.',
      highlights: ['Multi-source paper retrieval', 'Embedding-based ranking', 'PDF understanding', 'Trend analysis', 'Research gap detection'],
      tech: ['LangGraph', 'Gemini 1.5', 'Streamlit', 'SentenceTransformers', 'PyMuPDF', 'Vector Embeddings'],
      github: '#',
      demo: '#',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'DOCU AI',
      subtitle: 'Document Intelligence',
      description: 'Context-aware document intelligence system that answers questions from uploaded docs, automatically searches the web for missing information, and builds a persistent knowledge base.',
      highlights: ['Hybrid retrieval + reranking', 'OCR support', 'Web-augmented knowledge base', 'Intelligent query routing', 'Knowledge graph generation'],
      tech: ['RAG', 'ChromaDB', 'LangChain', 'Groq', 'BM25', 'CrossEncoder', 'Streamlit'],
      github: '#',
      demo: '#',
      color: 'from-purple-600 to-pink-500'
    },
    {
      title: 'JobPilotAI',
      subtitle: 'Outreach Automation',
      description: 'AI-powered cold outreach platform that scrapes startups, researches companies, generates personalized emails, sends follow-ups automatically, and tracks replies.',
      highlights: ['Startup scraping', 'AI personalization', 'Gmail automation', 'Follow-up scheduler', 'Reply detection', 'Complete workflow'],
      tech: ['LangGraph', 'Groq LLMs', 'Streamlit', 'Playwright', 'Gmail SMTP/IMAP', 'APScheduler'],
      github: '#',
      demo: '#',
      color: 'from-green-600 to-emerald-500'
    }
  ];

  const skills = {
    'AI/ML': ['Machine Learning', 'Deep Learning', 'Generative AI', 'NLP', 'PyTorch'],
    'Generative AI': ['LLMs', 'RAG', 'LangGraph', 'Vector Databases', 'Embeddings'],
    'Backend & Tools': ['Python', 'Streamlit', 'APIs', 'Automation', 'LangChain'],
    'Product & Research': ['AI Product Management', 'Research Automation', 'Workflow Design', 'System Architecture']
  };

  const interests = [
    'Autonomous AI Agents',
    'RAG Systems',
    'AI Research Tools',
    'Workflow Automation',
    'Multi-Agent Systems',
    'AI + Product Thinking'
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Engineer
            </div>
            <div className="hidden md:flex gap-8">
              {['hero', 'about', 'skills', 'projects', 'interests', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-sm font-medium hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['hero', 'about', 'skills', 'projects', 'interests', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize text-sm hover:bg-slate-800 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold">
              AE
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">AI/ML Engineer</h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems, autonomous agents, and real-world AI products that solve complex problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              View Projects
            </button>
            <a href="https://github.com/Abhilashaaaaaa13" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-slate-600 hover:border-blue-400 hover:text-blue-400 rounded-lg font-medium transition-colors">
              🔗 GitHub
            </a>
            <a href="https://linkedin.com/in/abhilashaa" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-slate-600 hover:border-blue-400 hover:text-blue-400 rounded-lg font-medium transition-colors">
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a builder obsessed with creating AI systems that go beyond simple chatbots. My focus is on autonomous agents, RAG systems, research automation, and production-grade AI workflows that actually solve real problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Curiosity-driven by nature, I blend machine learning, deep learning, generative AI, and product thinking to design intelligent systems with both technical depth and practical impact.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">{category}</h3>
                <ul className="space-y-2">
                  {items.map(skill => (
                    <li key={skill} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>{skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-cyan-400 text-sm font-medium mb-4">{project.subtitle}</p>
                      <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-slate-400 mb-3 uppercase">Key Highlights</p>
                        <div className="grid grid-cols-2 gap-2">
                          {project.highlights.map((h, i) => (
                            <div key={i} className="text-sm text-slate-300">⚡ {h}</div>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-slate-400 mb-3 uppercase">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium text-sm transition-colors">
                          🔗 Repository
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-sm transition-colors">
                          🚀 Live Demo
                        </a>
                      </div>
                    </div>
                    <div className="lg:w-48 flex-shrink-0">
                      <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.color} opacity-20 flex items-center justify-center text-3xl`}>
                        💻
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="interests" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What I Like Building</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {interests.map((interest, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-blue-600 hover:bg-slate-800 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🧠</span>
                  <p className="font-medium">{interest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-center text-slate-400 mb-12">Have a project in mind? Let's talk.</p>
          <form onSubmit={handleFormSubmit} className="space-y-4 mb-12">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} required className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors" />
            <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleFormChange} required className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors" />
            <textarea name="message" placeholder="Your message..." rows="5" value={formData.message} onChange={handleFormChange} required className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none" ></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              Send Message
            </button>
          </form>
          <div className="border-t border-slate-800 pt-12">
            <p className="text-center text-slate-400 mb-6">Or connect with me directly:</p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors text-2xl">
                🔗
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors text-2xl">
                💼
              </a>
              <a href="mailto:your.email@example.com" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors text-2xl">
                ✉️
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2024 AI/ML Engineer. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}