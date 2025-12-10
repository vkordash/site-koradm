
export interface SearchRecord {
  fragment: string;
  createdAt: string;
  type: string;
}

export interface SearchResponse {
  items: SearchRecord[];
  total: number;
  limit: number;
  offset: number;
}