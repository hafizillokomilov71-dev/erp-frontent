import type { IPost } from "../../types/blog.type";

interface Props {
  post: IPost;
  onReadMore: () => void;
}

function BlogCard({ post, onReadMore }: Props) {
  return (
    <div className="bg-white border-gray-300 rounded-2xl border p-4 hover:shadow-lg transition h-full flex flex-col">      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-xl"
      />

      <div className="flex-1 flex flex-col mt-4">        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium inline-block w-fit">
          {post.category}
        </span>
        <h2 className="text-lg font-bold text-slate-900 mt-2 hover:text-blue-600 cursor-pointer line-clamp-2">
          {post.title}
        </h2>
        <p className="text-slate-500 text-sm mt-2 line-clamp-2 flex-1">
          {post.shortText}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300">
          <div className="flex items-center gap-2">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{post.author}</p>
              <p className="text-xs text-slate-400">{post.date}</p>
            </div>
          </div>

          <button
            onClick={onReadMore}
            className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition whitespace-nowrap"
          >
            O'qish
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
