import { blogPosts, popularTags } from "../../data/blog.data";
import type { IPost } from "../../types/blog.type";

function BlogSidebar() {
  const popularPosts: IPost[] = [...blogPosts]
    .sort((a: IPost, b: IPost) => b.views - a.views)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="bg-white border-gray-300 rounded-2xl border p-6">
        <h3 className="font-bold text-lg mb-4">⭐ Mashhur Maqolalar</h3>
        <div className="space-y-4">
          {popularPosts.map((post: IPost) => (
            <div key={post.id}>
              <h4 className="text-sm font-medium text-slate-800 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {post.views} o'qildi
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border-gray-300 rounded-2xl border p-6">
        <h3 className="font-bold text-lg mb-4">🏷️ Mashhur Teglar</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 rounded-full text-xs hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;

