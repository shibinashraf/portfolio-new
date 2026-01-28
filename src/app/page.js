"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence 
} from "framer-motion";
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiExternalLink, 
  FiDatabase, 
  FiCode, 
  FiCpu, 
  FiDownload 
} from "react-icons/fi";
import { SiSnowflake, SiPython, SiPalantir, SiDbt, SiReact, SiNextdotjs, SiMicrosoftazure } from "react-icons/si";

// --- Components ---

const TechBadge = ({ icon: Icon, name, color }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors">
    <Icon className={`text-lg ${color}`} />
    <span className="text-sm font-medium text-gray-300">{name}</span>
  </div>
);

const ProjectCard = ({ title, desc, tags, link, type }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 text-xs font-bold rounded-full ${type === 'Data Eng' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-purple-500/20 text-purple-300'}`}>
          {type}
        </span>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiExternalLink />
          </a>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{desc}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs text-gray-500 font-mono">#{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const TimelineItem = ({ role, company, date, bullets }) => (
  <div className="relative pl-8 pb-12 border-l border-white/10 last:pb-0">
    <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
      <h3 className="text-lg font-bold text-white">{role}</h3>
      <span className="text-sm text-gray-500 font-mono">{date}</span>
    </div>
    <div className="text-cyan-400 text-sm font-medium mb-4">{company}</div>
    <ul className="space-y-2">
      {bullets.map((item, i) => (
        <li key={i} className="text-gray-400 text-sm leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-gray-600">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
      {/* Scroll Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50" />

      {/* Intro Animation Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="text-cyan-500 font-mono text-xl"
            >
              INITIALIZING_SYSTEM...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Decorative Background Elements */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

        {/* --- NAVBAR --- */}
        <nav className="flex justify-between items-center py-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-2xl tracking-tighter"
          >
            SHIBIN<span className="text-cyan-500">.TA</span>
          </motion.div>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Data Engineering Roles
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Data Engineer.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                System Architect.
              </span>
            </h1>

            <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
              I specialize in the Modern Data Stack. Currently transforming raw data into actionable insights at 
              <strong className="text-white"> EY GDS</strong> using Snowflake, dbt, and Palantir Foundry.
              Bridging the gap between legacy systems and modern cloud architecture.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                Let's Talk
              </a>
              <a href="/SHIBIN_RESUME.pdf" download className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-full flex items-center gap-2 transition-all">
                <FiDownload /> Download Resume
              </a>
            </div>

            {/* Marquee Skills */}
            <div className="pt-12 flex flex-wrap gap-4 opacity-80">
              <TechBadge icon={SiSnowflake} name="Snowflake" color="text-blue-300" />
              <TechBadge icon={SiPalantir} name="Palantir Foundry" color="text-gray-200" />
              <TechBadge icon={SiDbt} name="dbt" color="text-orange-400" />
              <TechBadge icon={SiPython} name="Python" color="text-yellow-300" />
              <TechBadge icon={SiMicrosoftazure} name="Azure" color="text-blue-500" />
            </div>
          </motion.div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="py-20 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              <p className="text-gray-400 text-sm">
                From freelance web development to enterprise-scale data engineering. 
                My journey is defined by moving from "Support" to "Core Development" through automation.
              </p>
            </div>
            <div className="md:col-span-2">
              <TimelineItem 
                role="Associate Analyst (Data Engineer)"
                company="Ernst & Young (EY GDS)"
                date="Jan 2024 - Present"
                bullets={[
                  "Engineered the migration of critical integrations from SQL Server to Snowflake, reducing data latency.",
                  "Developed interactive Palantir Foundry Workshop applications to visualize Snowflake metadata and lineage.",
                  "Automated job scheduling and data workflows using Python and Stonebranch, reducing manual effort by 40%.",
                  "Optimized Snowflake costs by auditing database usage and decommissioning unused assets."
                ]}
              />
              <TimelineItem 
                role="Freelance Full Stack Developer"
                company="Self-Employed"
                date="2022 - 2023"
                bullets={[
                  "Built high-performance web applications using Next.js and React.",
                  "Deployed deployed responsive portfolios and tools like 'Udyo' and 'PDFx'.",
                  "Integrated complex APIs and managed database states."
                ]}
              />
            </div>
          </div>
        </section>

        {/* --- PROJECTS & CASE STUDIES --- */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* DATA PROJECTS (Prioritized) */}
            <ProjectCard 
              type="Data Eng"
              title="Legacy Migration Pipeline"
              desc="A high-throughput pipeline moving 500GB+ of data from on-prem SQL Server to Snowflake Cloud Data Warehouse."
              tags={["Snowflake", "SQL", "Python", "Performance Tuning"]}
            />
            
            <ProjectCard 
              type="Data Eng"
              title="Palantir Workshop App"
              desc="An interactive dashboard built in Foundry to visualize data lineage and quality metrics for client stakeholders."
              tags={["Palantir Foundry", "Ontology", "Typescript", "CSS"]}
            />

            <ProjectCard 
              type="Data Eng"
              title="Automated Cost Auditor"
              desc="Python scripts that analyze compute usage logs to identify and alert on inefficient queries."
              tags={["Python", "Automation", "Stonebranch"]}
            />

            {/* WEB PROJECTS (Secondary) */}
            <ProjectCard 
              type="Full Stack"
              title="Udyo! Jobs Portal"
              desc="A comprehensive job search platform connecting seekers with opportunities."
              tags={["Next.js", "React", "Node.js"]}
              link="https://udyo.online"
            />

            <ProjectCard 
              type="Full Stack"
              title="PEAS Companion"
              desc="A mental health and stress management application focusing on user wellness."
              tags={["React", "Firebase", "UI/UX"]}
              link="https://post-gta.vercel.app/"
            />

            <ProjectCard 
              type="AI / ML"
              title="Drug Rec. System"
              desc="Machine learning model to suggest medications based on symptoms."
              tags={["Python", "Scikit-Learn", "HuggingFace"]}
              link="https://huggingface.co/spaces/shibinashraf36/drugrecommendationsystem"
            />
          </div>
        </section>

        {/* --- CERTIFICATIONS --- */}
        <section className="py-20 border-t border-white/5">
           <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
           <div className="flex flex-wrap justify-center gap-6">
              {[
                "Azure AI Fundamentals (AI-900)",
                "Azure Fundamentals (AZ-900)",
                "GitHub Copilot Badge",
                "Google Cloud Ready Facilitator",
                "EY Digital Badge: Oil & Gas"
              ].map((cert, i) => (
                <div key={i} className="px-6 py-3 bg-white/5 rounded-lg border border-white/10 text-sm hover:border-cyan-500/50 transition-colors cursor-default">
                  {cert}
                </div>
              ))}
           </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-32 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              I am currently open to new opportunities in Data Engineering. 
              With a 30-day notice period, I can join your team immediately.
            </p>
            
            <div className="flex justify-center gap-6 text-2xl">
              <a href="https://linkedin.com/in/shibin-ashraf" className="p-4 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-all">
                <FiLinkedin />
              </a>
              <a href="https://github.com/shibinashraf" className="p-4 bg-white/5 rounded-full hover:bg-purple-500 hover:text-white transition-all">
                <FiGithub />
              </a>
              <a href="mailto:shibinashraf36@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-green-500 hover:text-white transition-all">
                <FiMail />
              </a>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="absolute bottom-4 w-full text-center text-xs text-gray-600 font-mono">
            DESIGNED & DEVELOPED BY SHIBIN TA © {new Date().getFullYear()}
          </footer>
        </section>

      </div>
    </div>
  );
}
