"use client";
import { Code2, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { useProjects } from '@/app/hooks/useProjects'; 

export function ProjectCarousel() {
  const { projects, currentProject, nextProject, prevProject, goToProject } = useProjects();
  const project = projects[currentProject];

  return (
    <section className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl text-white relative group">
      <div className="grid md:grid-cols-2 min-h-[550px] transition-opacity duration-500 ease-in-out items-stretch">
        <div className="p-8 md:p-12 flex flex-col justify-center relative z-10 order-2 md:order-1">
          <div className={`inline-flex items-center gap-2 ${project.color} font-bold text-sm uppercase tracking-wider mb-4`}>
            {project.icon} {project.category}
          </div>
          
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          
          <p className="text-slate-400 leading-relaxed mb-6 min-h-[80px]">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/5">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors"
            >
              Ver Projeto <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className={`bg-gradient-to-br ${project.bgGradient} p-8 flex items-center justify-center relative order-1 md:order-2`}>
          <div className="w-full max-w-md bg-white/5 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl aspect-video backdrop-blur-sm">
            <div className="absolute inset-0 bg-white/5 blur-3xl animate-pulse"></div>
            <div className="text-center z-10 p-4">
              <Code2 className="text-white/20 w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
              <span className="text-xs text-white/50 font-mono bg-black/40 px-3 py-1.5 rounded border border-white/10">
                {project.file}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={prevProject} className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/50 rounded-full text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextProject} className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/50 rounded-full text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer">
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToProject(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentProject ? "bg-white w-8" : "bg-white/20 w-2 hover:bg-white/40"
            }`}
            aria-label={`Ir para projeto ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}