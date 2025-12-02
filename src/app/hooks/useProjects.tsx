import { useState, useEffect } from 'react';
import { 
  Activity, 
  Server, 
  Database, 
} from 'lucide-react';

import { Project } from '@/app/types/Project';


export function useProjects() {
  const [currentProject, setCurrentProject] = useState(0);


  const projects: Project[] = [
    {
      title: "Vacina Ceará Analytics",
      category: "Data Science Project",
      icon: <Activity size={16} />,
      color: "text-purple-400",
      bgGradient: "from-purple-900 to-slate-900",
      description: "Pipeline de dados completo que analisa a correlação entre eficiência vacinal e PIB municipal no Ceará. Ingestão de dados massivos e visualizações interativas para suporte à decisão.",
      stack: ["Python", "Pandas", "Plotly", "ETL"],
      file: "COLAB_PJ_VACINAS.ipynb",
      link: "https://github.com/carloseduardo-melo/vacina-ceara-analysis/tree/main"
    },
    {
      title: "Cluster de Alta Disponibilidade",
      category: "SRE & DevOps Architecture",
      icon: <Server size={16} />,
      color: "text-emerald-400",
      bgGradient: "from-emerald-900 to-slate-900",
      description: "Infraestrutura resiliente para sistemas de tempo real. Configuração de Nginx com Lua para mitigação de DDoS e orquestração de containers Docker para garantir 99.9% de uptime.",
      stack: ["AWS", "Docker", "Nginx/Lua", "Linux"],
      file: "docker-compose.yml",
      link: "#"
    },
    {
      title: "API de Gestão Escolar (ERP)",
      category: "Backend Engineering",
      icon: <Database size={16} />,
      color: "text-blue-400",
      bgGradient: "from-blue-900 to-slate-900",
      description: "Sistema backend escalável para EdTech. Arquitetura de microsserviços com NestJS, otimização de queries SQL para grandes volumes e integração com APIs externas.",
      stack: ["Node.js", "NestJS", "PostgreSQL", "Redis"],
      file: "schema.prisma",
      link: "#"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  const goToProject = (index: number) => setCurrentProject(index);

  return {
    projects,
    currentProject,
    nextProject,
    prevProject,
    goToProject
  };
}