// pages/Blog.tsx
import { useState,  } from "react";
import useBlog, { usePopularBlogs, useBlogTags } from "../hooks/api/useBlog";
import type { IBlog } from "../types/blog.types";

const Blog = () => {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const {
    data: blogs,
    isLoading,
    isError,
    refetch,
  } = useBlog(category, searchQuery);
  const { data: popularBlogs } = usePopularBlogs();
  const { data: tags } = useBlogTags();

  // Filter blogs by tag
  const filteredBlogs = selectedTag
    ? blogs.filter((blog: IBlog) => blog.tags.includes(selectedTag))
    : blogs;

  // Featured blog - birinchi blog
  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const remainingBlogs = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content - Left Side */}
          <div className="w-full lg:w-2/3">
            {/* Hero Blog Post */}
            {featuredBlog && (
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative">
                  <img
                    src={featuredBlog.image || "/images/blog/default.jpg"}
                    alt={featuredBlog.title}
                    className="h-80 w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/blog/default.jpg";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      {featuredBlog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {featuredBlog.title}
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">
                    {featuredBlog.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-slate-200"></div>
                      <span className="font-medium text-slate-900">
                        {featuredBlog.author.name}
                      </span>
                    </div>
                    <span>•</span>
                    <span>{featuredBlog.date}</span>
                    <span>•</span>
                    <span>{featuredBlog.readTime}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featuredBlog.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-200"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                    O'qish
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            )}

            {/* Blog Grid */}
            {remainingBlogs.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {remainingBlogs.map((blog: IBlog) => (
                  <article
                    key={blog.id}
                    className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
                  >
                    <img
                      src={blog.image || "/images/blog/default.jpg"}
                      alt={blog.title}
                      className="h-48 w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/images/blog/default.jpg";
                      }}
                    />
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-blue-700">
                          {blog.category}
                        </span>
                        <span>{blog.date}</span>
                      </div>

                      <h3 className="mt-2 font-bold text-slate-900 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                        {blog.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                        <div className="h-6 w-6 rounded-full bg-slate-200"></div>
                        <span>{blog.author.name}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>

                      <button className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700">
                        O'qish →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="mt-8 flex justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
              </div>
            )}

            {/* Error State */}
            {isError && (
              <div className="mt-8 rounded-xl border border-red-100 bg-red-50 p-8 text-center">
                <p className="text-sm font-medium text-red-700">
                  Ma'lumotlarni yuklashda xatolik yuz berdi
                </p>
                <button
                  onClick={() => refetch()}
                  className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Qayta urinish
                </button>
              </div>
            )}

            {/* No Results */}
            {!isLoading && !isError && filteredBlogs.length === 0 && (
              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-12 text-center">
                <p className="text-slate-500">Hech qanday blog topilmadi</p>
              </div>
            )}
          </div>

          {/* Sidebar - Right Side */}
          <div className="w-full space-y-6 lg:w-1/3">
            {/* Search */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">Qidirish</h3>
              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  placeholder="Maqolalarni qidirish..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Qidirish
                </button>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">MASHHUR MAQOLLAR</h3>
              <div className="mt-4 space-y-3">
                {popularBlogs.slice(0, 4).map((blog: IBlog) => (
                  <div key={blog.id} className="group cursor-pointer">
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                      {blog.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {blog.views} o'qildi
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">KATEGORIYALAR</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Barchasi",
                  "UX",
                  "React",
                  "Dizayn",
                  "DevOps",
                  "Frontend",
                  "JavaScript",
                  "TypeScript",
                  "Python",
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setCategory(cat === "Barchasi" ? "all" : cat)
                    }
                    className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                      category === (cat === "Barchasi" ? "all" : cat)
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">MASHHUR TEGLAR</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags
                  .slice(0, 12)
                  .map((tag: { name: string; count: number }) => (
                    <button
                      key={tag.name}
                      onClick={() => setSelectedTag(tag.name)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                        selectedTag === tag.name
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {tag.name}
                    </button>
                  ))}
              </div>
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag("")}
                  className="mt-3 text-xs text-blue-600 hover:underline"
                >
                  Tegni olib tashlash
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
