import React from 'react';
import { Github, Linkedin, Mail, Phone, Server, Cloud, Database, Terminal, GitBranch, Container, Shield, Cpu, Code, Infinity } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-950/5"></div>
        {/* Floating DevOps Icons Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="floating-icons">
            <Server className="icon" style={{ '--delay': '0s' } as React.CSSProperties} />
            <Cloud className="icon" style={{ '--delay': '2s' } as React.CSSProperties} />
            <Database className="icon" style={{ '--delay': '4s' } as React.CSSProperties} />
            <Terminal className="icon" style={{ '--delay': '6s' } as React.CSSProperties} />
            <GitBranch className="icon" style={{ '--delay': '8s' } as React.CSSProperties} />
            <Container className="icon" style={{ '--delay': '10s' } as React.CSSProperties} />
            <Shield className="icon" style={{ '--delay': '12s' } as React.CSSProperties} />
            <Cpu className="icon" style={{ '--delay': '14s' } as React.CSSProperties} />
            <Code className="icon" style={{ '--delay': '16s' } as React.CSSProperties} />
          </div>
        </div>
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-950 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-black p-4 rounded-full border-2 border-purple-800">
                  <Infinity className="w-16 h-16 text-purple-400 animate-spin-slow" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-purple-950 text-transparent bg-clip-text animate-glow">
              Aditya Patil
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-500 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Cloud DevOps Engineer
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-400 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Architecting Scalable Infrastructure | Automating Cloud Solutions | DevOps Excellence
            </p>
            <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <a href="#contact" className="bg-purple-900 hover:bg-purple-950 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Contact Me
              </a>
              <a href="#experience" className="border border-purple-900 hover:bg-purple-950/20 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                View Experience
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text animate-glow">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-purple-950/10 hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 animate-slideIn" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-400">Cloud Services</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-purple-400 mb-2">AWS</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>• EC2, S3, ELB, ASG</li>
                    <li>• VPC, IAM, EKS, ECS</li>
                    <li>• CloudWatch, CloudTrail</li>
                    <li>• Lambda, Serverless</li>
                    <li>• Athena, WAF, Route53</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-400 mb-2">Azure</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>• VM, VNet, Functions</li>
                    <li>• AKS, ACR</li>
                    <li>• Azure DevOps</li>
                    <li>• Storage Services</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-purple-950/10 hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 animate-slideIn" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-400">DevOps & Automation</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>• Docker, Kubernetes</li>
                <li>• Helm, ArgoCD</li>
                <li>• Jenkins, AWS CI/CD</li>
                <li>• Terraform, Ansible</li>
                <li>• Linux, Shell Scripting</li>
                <li>• Git, GitHub, Bitbucket</li>
                <li>• CodeCommit</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-purple-950/10 hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 animate-slideIn" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-400">Software Development</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>• Python, Django</li>
                <li>• Django REST Framework</li>
                <li>• MySQL</li>
                <li>• HTML, CSS</li>
                <li>• Bootstrap</li>
                <li>• JavaScript</li>
                <li>• React.js</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-purple-950/10 hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 animate-slideIn" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-400">Core Competencies</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>• Infrastructure as Code</li>
                <li>• CI/CD Pipeline Automation</li>
                <li>• Cloud Architecture Design</li>
                <li>• Container Orchestration</li>
                <li>• Security & Compliance</li>
                <li>• API Development</li>
                <li>• Full Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text animate-glow">
            Professional Experience
          </h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="p-8 rounded-lg bg-purple-950/10 hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 animate-fadeIn">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-semibold text-purple-400">DevOps Engineer</h3>
                </div>
                <span className="text-purple-400">Feb 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Architecting and maintaining cloud infrastructure using AWS and Azure services</li>
                <li>Implementing CI/CD pipelines using Jenkins and Azure DevOps</li>
                <li>Managing Kubernetes clusters and implementing GitOps with ArgoCD</li>
                <li>Automating infrastructure deployment using Terraform and Ansible</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-purple-950/10 hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 animate-fadeIn">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-semibold text-purple-400">Cloud Engineer</h3>
                </div>
                <span className="text-purple-400">June 2020 - Feb 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Managed AWS and Azure cloud infrastructure</li>
                <li>Implemented containerization strategies using Docker</li>
                <li>Developed Infrastructure as Code using Terraform</li>
                <li>Maintained monitoring and logging solutions</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-purple-950/10 hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 animate-fadeIn">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-semibold text-purple-400">Software Developer</h3>
                </div>
                <span className="text-purple-400">Jan 2020 - June 2020</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Developed full-stack applications using Python, Django, and React.js</li>
                <li>Built RESTful APIs using Django REST Framework</li>
                <li>Implemented responsive UI designs with Bootstrap and CSS</li>
                <li>Managed MySQL databases and optimized queries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text animate-glow">
            Let's Connect
          </h2>
          <div className="max-w-2xl mx-auto bg-purple-950/10 p-8 rounded-lg hover:bg-purple-950/20 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center gap-4 animate-slideIn" style={{ animationDelay: '0.2s' }}>
                <Mail className="w-6 h-6 text-purple-400" />
                <a href="mailto:adityapatil420@outlook.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  adityapatil420@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-4 animate-slideIn" style={{ animationDelay: '0.4s' }}>
                <Phone className="w-6 h-6 text-purple-400" />
                <a href="tel:+917387041420" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +91 7387041420
                </a>
              </div>
              <div className="flex gap-6 justify-center mt-8 animate-slideIn" style={{ animationDelay: '0.6s' }}>
                <a href="https://github.com/itzaadiiiii" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/aadiityapatil420/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-purple-950/30">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Aditya Patil | Cloud DevOps Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;