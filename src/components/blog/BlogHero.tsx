import { Link } from "react-router-dom";

function BlogHero() {
  return (
    <div className="bg-gradient-to-b border-gray-300 from-blue-50 to-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-700">
          Bosh sahifa
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mt-2">
          📝 Blog va Maqolalar
        </h1>
        <p className="text-slate-500 mt-2">
          Dasturlash, dizayn va texnologiyalar haqida eng so'nggi maqolalar
        </p>
      </div>
    </div>
  );
}

export default BlogHero;
