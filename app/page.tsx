import GlowCursor from "@/components/GlowCursor";
import Image from "next/image";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaReact, FaVuejs, FaBootstrap, FaGithub, FaDocker, FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiNuxt, SiNextdotjs, SiDart, SiPython, SiIntellijidea, SiMysql, SiPostman, SiXampp, SiFlutter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-500 text-2xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-400 text-2xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-2xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "Dart", icon: <SiDart className="text-sky-400 text-2xl" /> },
  { name: "Python", icon: <SiPython className="text-green-400 text-2xl" /> }, 
];

const techStack = {
  frontend: [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Vue", icon: <FaVuejs className="text-green-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  backend: [
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Nitro", icon: <SiNuxt className="text-green-400" /> }, // reuse Nuxt icon
  ],
  fullstack: [
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Nuxt.js", icon: <SiNuxt className="text-green-400" /> },
  ],
};
const tools = [
  { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-400" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "XAMPP", icon: <SiXampp className="text-orange-500" /> },
];

function SectionGlow({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[120px] opacity-40 ${className}`}
    />
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-black text-white scroll-smooth">
      <GlowCursor />

      <div className="relative z-10 overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 mt-4 flex justify-between items-center
                        bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
          <h1 className="font-semibold tracking-wide">My Portfolio</h1>
          <div className="space-x-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="inline-block px-6 py-3 rounded-full bg-white 
            text-black hover:scale-105 transition">
                Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative isolate min-h-screen flex items-center justify-center text-center px-6 pt-24">
        <SectionGlow className="left-[-90px] top-1/3 bg-blue-500" />
        <SectionGlow className="right-[-90px] top-1/2 bg-purple-500" />
        <div className="space-y-6 flex flex-col items-center">

          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight">
            Building clean <br /> digital experiences
          </h1>

          <p className="text-gray-400 max-w-xl text-lg">
            I am Tan Yin Rui, a software engineering student focused on Java and modern web development.
          </p>

          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-full bg-white text-black 
                      hover:scale-105 transition"
          >
            View Work
          </a>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative isolate bg-white/5 border border-white/10 backdrop-blur-xl m-auto max-w-3xl my-32
        rounded-2xl p-4 text-center transition
        hover:scale-105 hover:border-white/20 
        hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        <SectionGlow className="left-1/10 top-1 -translate-x-1/2 -translate-y-1/2 bg-cyan-500" />
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-4">About</h2>

          <p className="text-gray-400 leading-relaxed">
            I am an IT student currently semester 6 and studying at UUM (Utara University Malaysia), 
             major is software engineering. Seeking a software engineering related internship (6 months) 
             that start from 26/9/2026, to gain practical development experience.
          </p>
        </div>
      </section>

      {/* LANGUAGES */}
      <section id="languages" className="relative isolate py-20 md:py-32 px-6">
        <SectionGlow className="right-[-80px] top-16 bg-indigo-500" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Languages</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
                            rounded-2xl p-5 text-center hover:scale-105 transition">
              <p className="text-lg font-medium">Chinese</p>
              <p className="text-xs text-gray-500 mt-1">Native</p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
                            rounded-2xl p-5 text-center hover:scale-105 transition">
              <p className="text-lg font-medium">English</p>
              <p className="text-xs text-gray-500 mt-1">Advanced</p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
                            rounded-2xl p-5 text-center hover:scale-105 transition">
              <p className="text-lg font-medium">Malay</p>
              <p className="text-xs text-gray-500 mt-1">Intermediate</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative isolate py-20 md:py-32 px-6">
        <SectionGlow className="left-[-80px] bottom-10 bg-emerald-500" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10">Education</h2>

          <div className="space-y-6">

            {/* STPM */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
              <h3 className="text-lg font-semibold">
                Sijil Tinggi Persekolahan Malaysia (STPM)
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Arts Stream · 2023
              </p>
              <p className="text-white mt-2">
                CGPA: 4.00
              </p>
            </div>

            {/* Degree */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
              <h3 className="text-lg font-semibold">
                Bachelor of Science (Hons) in Information Technology
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                2023 – Present
              </p>
              <p className="text-white mt-2">
                CGPA (Sem 1–5): 3.80
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative isolate py-20 md:py-32 px-6">
        <SectionGlow className="right-[-80px] top-20 bg-blue-500" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white/5 border border-white/10 backdrop-blur-xl
                        rounded-2xl p-5 text-center flex flex-col items-center gap-2
                        hover:scale-105 transition"
            >
              {skill.icon}
              <p className="text-sm text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="skills" className="relative isolate py-20 md:py-32 px-6">
        <SectionGlow className="left-[-80px] top-24 bg-violet-500" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10">Tech Stack</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Frontend */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Frontend</h3>
              {techStack.frontend.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 text-gray-300 
                            hover:translate-x-1 transition"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Backend */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-300">Backend</h3>
              {techStack.backend.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 text-gray-300 
                            hover:translate-x-1 transition"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Fullstack */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Fullstack</h3>
              {techStack.fullstack.map((item) => (
              <div
                  key={item.name}
                  className="flex items-center gap-3 text-gray-300 
                            hover:translate-x-1 transition"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section id="tools" className="relative isolate py-20 md:py-32 px-6">
        <SectionGlow className="right-[-80px] bottom-16 bg-sky-500" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Tools</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white/5 border border-white/10 backdrop-blur-xl
                          rounded-2xl p-5 flex flex-col items-center gap-2
                          hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                          transition"
              >
                <span className="text-2xl">{tool.icon}</span>
                <p className="text-sm text-gray-300">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative isolate py-20 md:py-32 px-6 max-w-5xl mx-auto">
        <SectionGlow className="left-[-80px] top-20 bg-purple-500" />
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold">Financial System with AI Chatbot</h3>
            <p className="text-gray-400 mt-2">
              A financial management system integrated with an AI chatbot for customer support.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold">My Portfolio</h3>
            <p className="text-gray-400 mt-2">
              A personal portfolio website to showcase my skills and projects. Built with Next.js and Tailwind CSS, 
              it features a modern design and responsive layout to provide an optimal viewing experience across devices.
            </p>
          </div>    

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold">Golanguage</h3>
            <p className="text-gray-400 mt-2">
              This is a language learning web application designed to 
              help users learn and practice new languages (Chinese, Malay) 
              in an interactive. It&apos;s a full-stack project built with HTML,
               CSS, JavaScript and Spring Boot backend. For this project, Spring Boot backend serves as the REST API that handles all business logic, database operations, and user management for this language learning platform.
            </p>

            <a
              href="https://github.com/yrui0617/Golanguage_Localhost.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-full m-auto mt-4
                        bg-white text-black hover:scale-105 transition"
            >
              <FaGithub />
              GitHub
            </a>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative isolate py-20 md:py-32 px-6 max-w-4xl mx-auto flex flex-col items-center">
        <SectionGlow className="right-[-80px] top-20 bg-cyan-500" />
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-6 ">

          <h2 className="text-2xl font-semibold">Contact Me</h2>

          <div className="space-y-3 text-sm text-gray-300">

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <span>+6011-5507 5896</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-400" />
              <span>richard020617@gmail.com</span>
            </div>

          </div>
          
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/yrui0617"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                        bg-white text-black hover:scale-105 transition"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://www.facebook.com/share/1HHMD9NugN/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                        bg-white text-black hover:scale-105 transition"
            >
              <FaFacebook />
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/yin-rui-tan-792275326?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                        bg-white text-black hover:scale-105 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
