// config/endpoints.ts
const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    me: "/auth/me",
  },
  course: {
    list: "/courses",
    details: (courseId: string) => `/courses/${courseId}`,
    create: "/courses",
    update: (courseId: string) => `/courses/${courseId}`,
    delete: (courseId: string) => `/courses/${courseId}`,
  },
  blog: {
    list: "/blogs",
    details: (blogId: string) => `/blogs/${blogId}`,
    popular: "/blogs/popular",
    categories: "/blogs/categories",
    tags: "/blogs/tags",
    search: "/blogs/search",
  },
};
export default ENDPOINTS;
