import type { ISimilarCourse } from "../../types/courses.type";

interface Props {
  courses: ISimilarCourse[];
  onCourseClick: (courseId: number) => void;
}

function SimilarCourses({ courses, onCourseClick }: Props) {
  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        O'xshash kurslar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition cursor-pointer"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs font-medium">
                {course.category}
              </span>
              <h3 className="font-bold text-slate-900 mt-2 line-clamp-1">
                {course.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-yellow-500">⭐</span>
                <span>{course.rating}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{course.students} talaba</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold text-blue-600">
                  {course.price}
                </span>
                <button
                  onClick={() => onCourseClick(course.id)}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                >
                  Batafsil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarCourses;
