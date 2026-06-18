// types/blog.type.ts
export interface IBlog {
  id: string;
  title: string;
  description: string;
  content?: string;
  image?: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  views: number;
  likes?: number;
  isPopular?: boolean;
}

export interface IBlogResponse {
  success: boolean;
  data: IBlog[];
  total?: number;
  page?: number;
  limit?: number;
}
