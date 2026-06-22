export const categories = [
  { label: "Barchasi", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Dizayn", value: "design" },
  { label: "DevOps", value: "devops" },
  { label: "Mobil", value: "mobile" },
  { label: "Karyera", value: "career" },
];

export const popularTags = [
  "JavaScript",
  "React",
  "CSS",
  "Python",
  "Figma",
  "HTML",
  "Flutter",
  "Karyera",
  "TypeScript",
  "Docker",
];

export const blogPosts = [
  {
    id: 1,
    title: "2026-yilda dasturchilik karyerasini qanday boshlash kerak?",
    shortText:
      "Sohaga endi qadam tashlayotganlarga atroflicha qo'llanma. Qaysi yo'nalishni tanlash, qancha vaqt ketadi va birinchi ishga qanday tayyorlanish bo'yicha amaliy tavsiyalar.",
    category: "career",
    author: "Akmal Karimov",
    authorRole: "JavaScript Lead",
    authorAvatar: "https://i.pravatar.cc/160?img=12",
    date: "15-may, 2026",
    readTime: "8 daqiqa",
    views: 1240,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&q=80&auto=format",
    tags: ["Karyera", "JavaScript"],
    fullContent: `
      <h2>Dasturchilik karyerasini boshlash</h2>
      <p>2026-yilda dasturchilik sohasiga kirish juda qiziqarli va imkoniyatlarga boy.</p>
      <h3>Qaysi yo'nalishni tanlash kerak?</h3>
      <ul>
        <li><strong>Frontend</strong> - veb-saytlar va ilovalar interfeysi</li>
        <li><strong>Backend</strong> - server va ma'lumotlar bazasi</li>
        <li><strong>Mobil</strong> - iOS va Android ilovalari</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "React 19 muhim yangiliklari",
    shortText:
      "React 19 bilan kelgan Server Components, Actions va concurrent rendering yaxshilanishlari haqida batafsil.",
    category: "frontend",
    author: "Akmal Karimov",
    authorRole: "JavaScript Lead",
    authorAvatar: "https://i.pravatar.cc/160?img=12",
    date: "8-may, 2026",
    readTime: "5 daqiqa",
    views: 850,
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=250&fit=crop&q=80&auto=format",
    tags: ["React", "JavaScript"],
    fullContent: `
      <h2>React 19 - Katta yangilanish</h2>
      <p>React 19 ko'plab muhim yangilanishlar bilan keldi.</p>
      <h3>Server Components</h3>
      <p>Komponentlarni serverda render qilish mumkin.</p>
    `,
  },
  {
    id: 3,
    title: "UX/UI dizaynda 10 ta keng tarqalgan xato",
    shortText:
      "Yangi dizaynerlar yo'l qo'yadigan 10 ta keng tarqalgan xato va ularni qanday tuzatish kerakligi haqida.",
    category: "design",
    author: "Madina Ergasheva",
    authorRole: "UX/UI Dizayner",
    authorAvatar: "https://i.pravatar.cc/160?img=47",
    date: "12-may, 2026",
    readTime: "6 daqiqa",
    views: 980,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&q=80&auto=format",
    tags: ["Dizayn", "Figma"],
    fullContent: `
      <h2>UX/UI Dizaynda Keng Tarqalgan Xatolar</h2>
      <h3>1. Kontrast yetishmasligi</h3>
      <p>Matn va fon orasidagi kontrast juda muhim.</p>
      <h3>2. Mobil versiyaga e'tibor bermaslik</h3>
      <p>Responsive dizayn majburiy.</p>
    `,
  },
  {
    id: 4,
    title: "JavaScript'da 5 ta keng tarqalgan xato",
    shortText:
      "JavaScript'da yangi boshlovchilar ko'p yo'l qo'yadigan xatolar va ularni tuzatish usullari.",
    category: "frontend",
    author: "Sherzod Rahimov",
    authorRole: "Python / Django Senior",
    authorAvatar: "https://i.pravatar.cc/160?img=33",
    date: "10-may, 2026",
    readTime: "4 daqiqa",
    views: 1200,
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop&q=80&auto=format",
    tags: ["JavaScript"],
    fullContent: `
      <h2>JavaScript'da Keng Tarqalgan Xatolar</h2>
      <h3>1. this ni noto'g'ri ishlatish</h3>
      <p>Arrow function va regular function orasidagi farqni tushunish muhim.</p>
    `,
  },
  {
    id: 5,
    title: "Figma'da ishlashni boshlash bo'yicha qo'llanma",
    shortText:
      "Figma'da birinchi qadamlar, asosiy vositalar va dizayn jarayoni haqida.",
    category: "design",
    author: "Madina Ergasheva",
    authorRole: "UX/UI Dizayner",
    authorAvatar: "https://i.pravatar.cc/160?img=47",
    date: "5-may, 2026",
    readTime: "7 daqiqa",
    views: 980,
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop&q=80&auto=format",
    tags: ["Figma", "Dizayn"],
    fullContent: `
      <h2>Figma'da Ishlashni Boshlash</h2>
      <p>Figma - veb va mobil interfeyslarni loyihalash uchun eng mashhur vosita.</p>
    `,
  },
  {
    id: 6,
    title: "TypeScript'ni nima uchun o'rganish kerak?",
    shortText:
      "TypeScript'ning afzalliklari va nima uchun har bir dasturchi uni o'rganishi kerak.",
    category: "frontend",
    author: "Nodira Yusupova",
    authorRole: "React Developer",
    authorAvatar: "https://i.pravatar.cc/160?img=45",
    date: "3-may, 2026",
    readTime: "5 daqiqa",
    views: 850,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop&q=80&auto=format",
    tags: ["TypeScript", "JavaScript"],
    fullContent: `
      <h2>TypeScript - Nega O'rganish Kerak?</h2>
      <p>TypeScript JavaScript'ga tiplar qo'shadi.</p>
    `,
  },
  {
    id: 7,
    title: "Python'da REST API yaratish 10 daqiqada",
    shortText:
      "FastAPI va Django REST Framework yordamida tezda REST API yaratish.",
    category: "backend",
    author: "Sherzod Rahimov",
    authorRole: "Python / Django Senior",
    authorAvatar: "https://i.pravatar.cc/160?img=33",
    date: "1-may, 2026",
    readTime: "6 daqiqa",
    views: 720,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&q=80&auto=format",
    tags: ["Python", "Backend"],
    fullContent: `
      <h2>Python'da REST API</h2>
      <p>FastAPI va Django REST Framework yordamida tezda REST API yaratish mumkin.</p>
    `,
  },
];
