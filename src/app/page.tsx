import { 
  Github, Linkedin, Mail, Server, Database, Shield, 
  TrendingUp, GraduationCap, Award, Code2, Activity 
} from 'lucide-react';
import { ProjectCarousel } from '@/app/components/ProjectCarousel';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <section className="relative bg-slate-900 text-white overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-purple-600 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Disponível para novos desafios
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Carlos Melo<span className="text-blue-500">.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-slate-300 max-w-3xl">
              Transformando complexidade em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">performance</span>.
            </h2>
            
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Senior Backend Engineer & SRE com viés em Data Science. 
              Especialista em construir sistemas resilientes, escalar infraestrutura crítica e extrair inteligência de dados.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="https://www.linkedin.com/in/carloseduardo-melo" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
                <Linkedin size={20} /> Conectar no LinkedIn
              </a>
              <a href="https://github.com/carloseduardo-melo/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all border border-slate-700">
                <Github size={20} /> Ver GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-32 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500">
            <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Uptime Garantido</div>
            <div className="text-4xl font-bold text-slate-900 flex items-baseline gap-1">
              99.9<span className="text-xl text-slate-500">%</span>
            </div>
            <p className="text-slate-600 text-sm mt-2">Em sistemas distribuídos de tempo real (Genium OT).</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-green-500">
            <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Otimização</div>
            <div className="text-4xl font-bold text-slate-900 flex items-baseline gap-1">
              30<span className="text-xl text-slate-500">%</span>
            </div>
            <p className="text-slate-600 text-sm mt-2">Redução de tempo operacional via automação (SIS 88).</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-purple-500">
            <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Escalabilidade</div>
            <div className="text-4xl font-bold text-slate-900 flex items-baseline gap-1">
              10k<span className="text-xl text-slate-500">+</span>
            </div>
            <p className="text-slate-600 text-sm mt-2">Registros mensais processados com consistência.</p>
          </div>
        </div>

        <ProjectCarousel /> 
        <section>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Domínios de Especialização</h3>
            <p className="text-slate-500">Stack tecnológica focada em robustez e escalabilidade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-700 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg"><Server size={24} /></div>
                <h4 className="font-bold text-lg">Backend Engineering</h4>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>Node.js & NestJS</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>Python (FastAPI)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>Arquitetura de Microsserviços</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>PostgreSQL & SQL Tuning</li>
              </ul>
            </div>


            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-700 mb-2">
                <div className="p-2 bg-emerald-100 rounded-lg"><Shield size={24} /></div>
                <h4 className="font-bold text-lg">SRE & Infra</h4>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>AWS (EC2, ECS)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>Docker & Containerization</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>Linux Hardening & Security</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>Nginx & Lua (DDoS Mitigation)</li>
              </ul>
            </div>


            <div className="space-y-4">
              <div className="flex items-center gap-3 text-purple-700 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg"><TrendingUp size={24} /></div>
                <h4 className="font-bold text-lg">Data Science</h4>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Pandas & Numpy</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Dashboards Analíticos</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Modelagem Estatística</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>ETL Pipelines</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">Jornada Profissional</h3>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
              <div className="md:w-1/4">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Jan 2023 - Presente</span>
                <h4 className="text-lg font-bold text-slate-800 mt-1">Lead Software Engineer</h4>
                <div className="text-blue-600 font-medium">SIS 88 (EdTech)</div>
              </div>
              <div className="md:w-3/4 space-y-3">
                <p className="text-slate-600 leading-relaxed">
                  Liderança técnica em arquitetura de sistemas escaláveis. Desenvolvi o backend utilizando <strong>Node.js e NestJS</strong> com arquitetura de microsserviços. Implementei integrações via API que reduziram em 30% o tempo de processos administrativos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">NestJS</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">SQL Tuning</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
              <div className="md:w-1/4">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Mai 2020 - Presente</span>
                <h4 className="text-lg font-bold text-slate-800 mt-1">Senior Backend & SRE</h4>
                <div className="text-blue-600 font-medium">Genium OT</div>
              </div>
              <div className="md:w-3/4 space-y-3">
                <p className="text-slate-600 leading-relaxed">
                  Engenheiro responsável pela infraestrutura e segurança de sistemas distribuídos de tempo real. Gerenciamento avançado de servidores Linux e Windows, assegurando <strong>uptime de 99.9%</strong>. Implementação de regras de Firewall e Cloudflare para mitigação de DDoS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Linux</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">Lua/C++</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">DDoS Protection</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="education" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Formação Acadêmica</h3>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-3 space-y-12 pb-2">
              
              <div className="relative pl-8 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h4 className="text-lg font-bold text-slate-900">Tecnólogo em Ciência de Dados</h4>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                    2025 - 2026 (Em curso)
                  </span>
                </div>
                <div className="text-slate-700 font-medium">Universidade Federal do Cariri (UFCA)</div>
                <p className="text-slate-500 text-sm mt-2">
                  Grade curricular com forte ênfase em Machine Learning, Deep Learning, Estatística Aplicada e Administração de Banco de Dados.
                </p>
              </div>

              <div className="relative pl-8 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-purple-500 rounded-full group-hover:bg-purple-500 transition-colors"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h4 className="text-lg font-bold text-slate-900">Formação Skill+ (Data Science)</h4>
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100">
                    Dez 2024 - Jul 2025
                  </span>
                </div>
                <div className="text-slate-700 font-medium">Ada Tech</div>
                <p className="text-slate-500 text-sm mt-2">
                  Especialização intensiva em Machine Learning, Python para dados e estatística aplicada.
                </p>
              </div>

              <div className="relative pl-8 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-slate-300 rounded-full group-hover:bg-slate-400 transition-colors"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h4 className="text-lg font-bold text-slate-700">Bacharelado em Ciência da Computação</h4>
                  <span className="text-xs font-medium text-slate-400">2017 - 2019</span>
                </div>
                <div className="text-slate-500 text-sm">Universidade Federal do Ceará (UFC)</div>
                <p className="text-slate-400 text-xs mt-1">Fundamentos de algoritmos e estrutura de dados.</p>
              </div>

              <div className="relative pl-8 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-slate-300 rounded-full group-hover:bg-slate-400 transition-colors"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h4 className="text-lg font-bold text-slate-700">Técnico em Informática</h4>
                  <span className="text-xs font-medium text-slate-400">2014 - 2017</span>
                </div>
                <div className="text-slate-500 text-sm">EEEP Antônio Rodrigues de Oliveira</div>
                <p className="text-slate-400 text-xs mt-1">
                  Programação, Redes de Computadores e Banco de Dados.
                </p>
              </div>

            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 text-red-700 rounded-lg">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Certificações</h3>
            </div>

            <div className="grid gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-200 transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">Back-End</h5>
                    <p className="text-sm text-slate-500 mt-1">Santander Tech+</p>
                  </div>
                  <div className="p-1.5 bg-slate-50 rounded text-slate-400">
                    <Code2 size={16} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-200 transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">Data Science</h5>
                    <p className="text-sm text-slate-500 mt-1">Santander Tech+</p>
                  </div>
                  <div className="p-1.5 bg-slate-50 rounded text-slate-400">
                    <TrendingUp size={16} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-200 transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">Banco de Dados</h5>
                    <p className="text-sm text-slate-500 mt-1">Santander Tech+</p>
                  </div>
                  <div className="p-1.5 bg-slate-50 rounded text-slate-400">
                    <Database size={16} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-200 transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">Desmistificando Dados</h5>
                    <p className="text-sm text-slate-500 mt-1">Santander Tech+</p>
                  </div>
                  <div className="p-1.5 bg-slate-50 rounded text-slate-400">
                    <Activity size={16} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        <footer className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <span className="font-bold text-slate-900">Carlos Melo</span>
            <span className="text-slate-500 text-sm">Senior Backend Engineer & SRE</span>
          </div>
          
          <div className="flex gap-6">
            <a href="mailto:cadu.c.melo99@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/carloseduardo-melo" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/carloseduardo-melo/" target="_blank" className="text-slate-500 hover:text-slate-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}