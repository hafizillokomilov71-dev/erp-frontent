import { Link } from "react-router-dom";
import type { ICourse } from "../../types/courses.type";

interface Props {
  course: ICourse;
}

function CourseHero({ course }: Props) {
  return (
    <div className="bg-white border-b-2 border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600">
            Bosh sahifa
          </Link>
          <span>›</span>
          <Link to="/courses" className="hover:text-blue-600">
            Kurslar
          </Link>
          <span>›</span>
          <span className="text-slate-700 font-medium">{course.title}</span>
        </nav>

        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <img
            src={course.image}
            alt={course.title}
            className="w-full md:w-72 h-48 object-cover rounded-2xl border-2 border-slate-100"
          />

          <div className="flex-1">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
              {course.category}
            </span>

            <h1 className="text-3xl font-bold text-slate-900 mt-2">
              {course.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">⭐</span>
                <span className="font-bold">{course.rating}</span>
                <span className="text-slate-400">({course.reviews} sharh)</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">
                👨‍🎓 {course.students} talaba
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">⏱️ {course.duration}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">🌐 {course.language}</span>
            </div>

            <p className="text-slate-600 mt-4 line-clamp-3">
              {course.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;
