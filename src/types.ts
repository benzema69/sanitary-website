
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ImageItem {
  src: string;
  alt: string;
}

export type LegalPage = 'mentions' | 'privacy' | 'cookies' | null;