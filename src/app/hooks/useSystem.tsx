import { useState, useEffect, useRef } from 'react';
import { Request, RequestType } from '@/app/types/System';

export function useSystemMonitor() {
  const [queue, setQueue] = useState<Request[]>([]);
  const [processedCount, setProcessedCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [systemLoad, setSystemLoad] = useState(0);
  const [activeWorkers, setActiveWorkers] = useState([false, false, false, false]);

  const requestIdRef = useRef(0);
  const processingRef = useRef<NodeJS.Timeout | null>(null);
  const ingestionRef = useRef<NodeJS.Timeout | null>(null);

  const addToQueue = (forceSpike = false) => {
    const batchSize = forceSpike ? 15 : Math.floor(Math.random() * 3) + 1;

    const newRequests: Request[] = Array.from({ length: batchSize }).map(() => {
      requestIdRef.current += 1;
      const rand = Math.random();
      const type: RequestType = rand > 0.9 ? 'CRITICAL' : rand > 0.3 ? 'NORMAL' : 'LOW';
      return { id: requestIdRef.current, type, timestamp: Date.now() };
    });

    setQueue(prev => {
      const updated = [...prev, ...newRequests].sort((a, b) => {
        const priorityScore = { 'CRITICAL': 3, 'NORMAL': 2, 'LOW': 1 };
        return priorityScore[b.type] - priorityScore[a.type];
      });
      return updated.slice(0, 50);
    });
  };

  const processBatch = () => {
    setQueue(prev => {
      if (prev.length === 0) {
        setActiveWorkers([false, false, false, false]);
        return prev;
      }

      const processedAmount = Math.min(prev.length, 4);
      const newWorkers = [false, false, false, false];
      for(let i = 0; i < processedAmount; i++) newWorkers[i] = true;
      setActiveWorkers(newWorkers);
      setProcessedCount(c => c + processedAmount);
      return prev.slice(processedAmount);
    });
  };

  const triggerSpike = () => {
    addToQueue(true);
    setSystemLoad(100);
  };

  useEffect(() => {
    if (!isRunning) return;

    ingestionRef.current = setInterval(() => {
      addToQueue();
      setSystemLoad(prev => {
        const target = Math.min(100, (queue.length / 20) * 100);
        return prev + (target - prev) * 0.1;
      });
    }, 800);

    processingRef.current = setInterval(processBatch, 1000);

    return () => {
      if (ingestionRef.current) clearInterval(ingestionRef.current);
      if (processingRef.current) clearInterval(processingRef.current);
    };
  }, [isRunning, queue.length]);

  return {
    queue,
    processedCount,
    isRunning,
    setIsRunning,
    systemLoad,
    activeWorkers,
    triggerSpike
  };
}