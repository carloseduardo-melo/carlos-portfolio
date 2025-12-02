"use client";
import { Activity, AlertTriangle, Cpu, Database, Pause, Play, Shield, Zap } from "lucide-react";
import { useSystemMonitor } from "@/app/hooks/useSystem";

export function SystemMonitor() {
  const { 
    queue, 
    processedCount, 
    isRunning, 
    setIsRunning, 
    systemLoad, 
    activeWorkers, 
    triggerSpike 
  } = useSystemMonitor();

  return (
    <section className="py-16 relative z-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
            <Activity size={20} className="animate-pulse" />
            <span>Live System Telemetry</span>
          </div>
          <h3 className="text-3xl font-bold text-slate-900">Gerenciamento de Alta Carga</h3>
          <p className="text-slate-500 max-w-xl">
            Visualização em tempo real de uma <strong>Priority Queue</strong> distribuindo carga entre workers. 
            Demonstração de controle de concorrência e resiliência.
          </p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isRunning ? 'bg-slate-200 text-slate-700' : 'bg-green-600 text-white'}`}
          >
            {isRunning ? <Pause size={16} /> : <Play size={16} />}
            {isRunning ? 'Pausar' : 'Iniciar'}
          </button>
          <button 
            onClick={triggerSpike}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 border border-red-200 rounded-lg font-medium hover:bg-red-200 transition-colors active:scale-95"
          >
            <Zap size={16} />
            Simular Traffic Spike
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Database size={200} />
          </div>

          <div className="flex justify-between items-center mb-6 relative z-10">
            <h4 className="text-white font-mono flex items-center gap-2">
              <Database size={16} className="text-blue-400"/> 
              Incoming Queue (Memory Heap)
            </h4>
            <span className="text-xs font-mono text-slate-500">Capacity: 50 items</span>
          </div>

          <div className="h-64 bg-slate-950/50 rounded-lg border border-slate-800 p-4 flex flex-wrap content-start gap-1 overflow-hidden relative">
            {queue.length === 0 && (
              <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-sm">
                Aguardando requests...
              </div>
            )}
            
            {queue.map((req) => (
              <div 
                key={req.id}
                className={`w-3 h-8 rounded-sm transition-all duration-300 transform animate-in fade-in zoom-in
                  ${req.type === 'CRITICAL' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]' : 
                    req.type === 'NORMAL' ? 'bg-blue-500' : 'bg-slate-600'}
                `}
                title={`ID: ${req.id} | Priority: ${req.type}`}
              />
            ))}
            
            {queue.length > 40 && (
              <div className="absolute bottom-4 right-4 bg-red-500/10 border border-red-500 text-red-400 px-3 py-1 rounded text-xs font-bold animate-pulse flex items-center gap-2">
                <AlertTriangle size={12} /> BACKPRESSURE DETECTED
              </div>
            )}
          </div>

          <div className="mt-4 flex gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div>Critical (High Priority)</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>Normal</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-600"></div>Background (Low)</div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
            <h4 className="text-slate-700 font-bold mb-4 flex items-center gap-2">
              <Cpu size={18} /> Cluster Processing
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {activeWorkers.map((active, i) => (
                <div key={i} className={`p-3 rounded-lg border transition-all duration-300 ${active ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-500">Node-0{i+1}</span>
                    <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500 animate-ping' : 'bg-slate-300'}`}></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {active ? 'PROCESSING' : 'IDLE'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
            <h4 className="text-slate-700 font-bold mb-4 flex items-center gap-2">
              <Shield size={18} /> Health Check
            </h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">System Load</span>
                  <span className={`${systemLoad > 80 ? 'text-red-500 font-bold' : 'text-slate-700'}`}>{systemLoad.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${systemLoad > 80 ? 'bg-red-500' : 'bg-green-500'}`} 
                    style={{ width: `${systemLoad}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <div className="text-xs text-slate-500">Total Processado</div>
                <div className="text-xl font-mono font-bold text-slate-800">{processedCount}</div>
              </div>

               <div className="flex justify-between items-center">
                <div className="text-xs text-slate-500">Avg Latency</div>
                <div className="text-sm font-mono text-slate-800">
                  {systemLoad > 80 ? '124ms' : '24ms'} 
                  <span className={`text-xs ml-1 ${systemLoad > 80 ? 'text-red-500' : 'text-green-500'}`}>
                    {systemLoad > 80 ? '▲' : '▼'}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}