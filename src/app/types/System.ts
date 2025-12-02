export type RequestType = 'CRITICAL' | 'NORMAL' | 'LOW';

export interface Request {
  id: number;
  type: RequestType;
  timestamp: number;
}