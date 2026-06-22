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
