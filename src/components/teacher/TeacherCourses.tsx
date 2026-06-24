interface Course {
  id: number;
  title: string;
  students: number;
  rating: number;
  price: string;
}

interface Props {
  courses: Course[];
}

function TeacherCourses({ courses }: Props) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-6">
      <h2 className="text-xl font-bold text-slate-900">
        Kurslari ({courses.length})
      </h2>
      <div className="space-y-4 mt-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border-2 border-slate-100 rounded-xl p-4 hover:border-blue-200 transition"
          >
            <h3 className="font-bold text-slate-900">{course.title}</h3>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="text-yellow-500">⭐ {course.rating}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">{course.students} talaba</span>
              <span className="text-slate-400">•</span>
              <span className="text-blue-600 font-bold">{course.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherCourses;
