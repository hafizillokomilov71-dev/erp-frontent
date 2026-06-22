import { useEffect } from "react";
import type { IPost } from "../../types/blog.type";

interface Props {
  post: IPost;
  onClose: () => void;
}

function BlogFullArticle({ post, onClose }: Props) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent): void {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100"
        >
          ✕
        </button>

        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          {post.category}
        </span>

        <h1 className="text-3xl font-bold text-slate-900 mt-4">{post.title}</h1>

        <div className="flex items-center gap-4 border-y py-4 my-4">
          <img
            src={post.authorAvatar}
            alt={post.author}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm text-slate-500">
              {post.authorRole} • {post.date}
            </p>
          </div>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-2xl mb-6"
        />

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />

        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogFullArticle;
