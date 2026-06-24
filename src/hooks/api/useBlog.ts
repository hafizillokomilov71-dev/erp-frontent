// hooks/api/useBlog.ts
import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";
import ENDPOINTS from "../../config/endpoints";
import type { IBlog } from "../../types/blog.type";

const mockBlogs: IBlog[] = [
  {
    id: "1",
    title: "2026-yilda dasturchilik karyerasini qanday boshlash kerak?",
    description:
      "Sohaga endi qadam tashlayotganlarga atroflicha qo'llanma. Qaysi yo'nalishni tanlash, qancha vaqt ketadi va birinchi ishga qanday tayyorlanish bo'yicha amaliy tavsiyalar.",
    image: "/images/blog/career-guide.jpg",
    author: {
      name: "Akmal Karimov",
      avatar: "/images/authors/akmal.jpg",
      role: "Senior Developer",
    },
    date: "15-may, 2026",
    readTime: "8 daqiqalik o'qish",
    category: "UX",
    tags: ["JavaScript", "React", "CSS", "Python"],
    views: 1250,
    likes: 89,
    isPopular: true,
  },
  {
    id: "2",
    title: "React 19 muhim yangiliklari",
    description:
      "React 19 muhim yangiliklari: Server Components, Actions va concurrent rendering yaxshilanishlari.",
    image: "/images/blog/react-19.jpg",
    author: {
      name: "Akmal Karimov",
      avatar: "/images/authors/akmal.jpg",
    },
    date: "8-may, 2026",
    readTime: "5 daqiqalik o'qish",
    category: "React",
    tags: ["React", "Frontend", "JavaScript"],
    views: 980,
    likes: 67,
    isPopular: true,
  },
  {
    id: "3",
    title: "UX/UI dizaynda 10 ta keng tarqalgan xato",
    description:
      "Yangi dizaynerlar yo'l qo'yadigan asosiy xatolar va ularni qanday tuzatish kerakligi haqida.",
    image: "/images/blog/ux-mistakes.jpg",
    author: {
      name: "Madina Ergashova",
      avatar: "/images/authors/madina.jpg",
      role: "UX Designer",
    },
    date: "10-may, 2026",
    readTime: "6 daqiqalik o'qish",
    category: "Dizayn",
    tags: ["Figma", "UX", "Design"],
    views: 750,
    likes: 45,
  },
  {
    id: "4",
    title: "Docker bilan ishlashning 5 ta yaxshi amaliyoti",
    description:
      "Container'lar bilan ishlashda tez-tez qilinadigan xatolardan qanday saqlanish.",
    image: "/images/blog/docker-best-practices.jpg",
    author: {
      name: "Akmal Karimov",
      avatar: "/images/authors/akmal.jpg",
    },
    date: "28-aprel, 2026",
    readTime: "7 daqiqalik o'qish",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Git"],
    views: 620,
    likes: 38,
  },
  {
    id: "5",
    title: "CSS Grid yoki Flexbox — qaysi birini ishlatish?",
    description: "Ikki ommabop layout usulini taqqoslash va amaliy misollar.",
    image: "/images/blog/css-grid-flexbox.jpg",
    author: {
      name: "Madina Ergashova",
      avatar: "/images/authors/madina.jpg",
    },
    date: "5-may, 2026",
    readTime: "4 daqiqalik o'qish",
    category: "Frontend",
    tags: ["CSS", "HTML", "Frontend"],
    views: 540,
    likes: 32,
  },
  {
    id: "6",
    title: "JavaScript'da 5 ta keng tarqalgan xato",
    description:
      "JavaScript dasturchilari tez-tez yo'l qo'yadigan xatolar va ularni qanday oldini olish.",
    image: "/images/blog/js-mistakes.jpg",
    author: {
      name: "Akmal Karimov",
      avatar: "/images/authors/akmal.jpg",
    },
    date: "1-may, 2026",
    readTime: "6 daqiqalik o'qish",
    category: "JavaScript",
    tags: ["JavaScript", "TypeScript", "Git"],
    views: 1200,
    likes: 95,
    isPopular: true,
  },
  {
    id: "7",
    title: "Figma'da ishlashni boshlash bo'yicha qo'llanma",
    description: "Figma'da dizayn yaratishni boshlash uchun to'liq qo'llanma.",
    image: "/images/blog/figma-guide.jpg",
    author: {
      name: "Madina Ergashova",
      avatar: "/images/authors/madina.jpg",
    },
    date: "25-aprel, 2026",
    readTime: "5 daqiqalik o'qish",
    category: "Dizayn",
    tags: ["Figma", "UX", "Design"],
    views: 980,
    likes: 72,
    isPopular: true,
  },
  {
    id: "8",
    title: "TypeScript'ni nima uchun o'rganish kerak?",
    description:
      "TypeScript'ning afzalliklari va uni o'rganish uchun sabablar.",
    image: "/images/blog/typescript.jpg",
    author: {
      name: "Akmal Karimov",
      avatar: "/images/authors/akmal.jpg",
    },
    date: "20-aprel, 2026",
    readTime: "4 daqiqalik o'qish",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Frontend"],
    views: 850,
    likes: 63,
    isPopular: true,
  },
  {
    id: "9",
    title: "Python'da REST API yaratish 10 daqiqada",
    description:
      "Python va FastAPI yordamida REST API yaratish bo'yicha qo'llanma.",
    image: "/images/blog/python-rest-api.jpg",
    author: {
      name: "Akmal Karimov",
      avatar: "/images/authors/akmal.jpg",
    },
    date: "15-aprel, 2026",
    readTime: "10 daqiqalik o'qish",
    category: "Python",
    tags: ["Python", "API", "Backend"],
    views: 720,
    likes: 48,
  },
];

const useBlog = (category?: string, searchQuery?: string) => {
  return useQuery({
    queryKey: ["blogs", category, searchQuery],
    queryFn: async () => {
      console.log("🚀 Blog queryFn ishga tushdi");

      try {
        let url = ENDPOINTS.blog.list;
        const params = new URLSearchParams();
        if (category && category !== "all") params.append("category", category);
        if (searchQuery) params.append("search", searchQuery);

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        console.log("📤 Backendga so'rov:", url);
        const response = await axios.get(url);
        console.log(response.data);
        
        console.log("✅ Backenddan javob keldi:", response.data);

        let blogs = response.data?.data || response.data || [];

        if (!Array.isArray(blogs)) {
          console.warn("⚠️ Ma'lumotlar array emas, [] qaytarilmoqda");
          return [];
        }

        return blogs;
      } catch (error) {
        console.warn(
          "⚠️ Backenddan ma'lumot kelmadi, mock ishlatilmoqda",
          error,
        );
        let filteredBlogs = mockBlogs;

        if (category && category !== "all") {
          filteredBlogs = filteredBlogs.filter(
            (blog) => blog.category.toLowerCase() === category.toLowerCase(),
          );
        }

        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          filteredBlogs = filteredBlogs.filter(
            (blog) =>
              blog.title.toLowerCase().includes(query) ||
              blog.description.toLowerCase().includes(query) ||
              blog.tags.some((tag) => tag.toLowerCase().includes(query)),
          );
        }

        console.log("📦 Mock blogs:", filteredBlogs.length);
        return filteredBlogs;
      }
    },
    initialData: [],
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};

export const usePopularBlogs = () => {
  return useQuery({
    queryKey: ["blogs", "popular"],
    queryFn: async () => {
      try {
        const response = await axios.get(ENDPOINTS.blog.popular);
        return response.data?.data || [];
      } catch {
        return mockBlogs.filter((blog) => blog.isPopular);
      }
    },
    initialData: [],
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlogTags = () => {
  return useQuery({
    queryKey: ["blog-tags"],
    queryFn: async () => {
      try {
        const response = await axios.get(ENDPOINTS.blog.tags);
        return response.data?.data || [];
      } catch {
        const tags = [
          "JavaScript",
          "React",
          "CSS",
          "Python",
          "Figma",
          "HTML",
          "Flutter",
          "Karyera",
          "ML",
          "Git",
          "TypeScript",
          "Docker",
        ];
        return tags.map((tag) => ({
          name: tag,
          count: Math.floor(Math.random() * 100) + 10,
        }));
      }
    },
    initialData: [],
    staleTime: 5 * 60 * 1000,
  });
};

export default useBlog;
