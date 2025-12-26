export interface ApiConfig {
  baseURL: string;
  timeout?: number;
}

export interface RequestConfig {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}
