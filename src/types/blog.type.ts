export interface IPost {
  id: number;
  title: string;
  shortText: string;
  category: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  views: number;
  image: string;
  tags: string[];
  fullContent: string;
}

export interface ICategory {
  label: string;
  value: string;
}

export interface IBlog {
  id: string;
  title: string;
  description: string;
  image: string;
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
  likes: number;
  isPopular?: boolean;
}