import { useState } from "react";
import { blogPosts, categories } from "../data/blog.data";
import type { IPost } from "../types/blog.type";
import BlogHero from "../components/blog/BlogHero";
import BlogCard from "../components/blog/BlogCard";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogFullArticle from "../components/blog/BlogFullArticle";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  const filteredPosts: IPost[] = blogPosts.filter((post: IPost) => {
    if (selectedCategory === "all") return true;
    return post.category === selectedCategory;
  });

  function handleReadMore(post: IPost): void {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  }

  function handleClose(): void {
    setSelectedPost(null);
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <BlogHero />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat.value
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post: IPost) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onReadMore={() => handleReadMore(post)}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </section>

      {selectedPost && (
        <BlogFullArticle post={selectedPost} onClose={handleClose} />
      )}
    </div>
  );
}

export default Blog;
