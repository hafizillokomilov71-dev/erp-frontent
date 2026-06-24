import { Link } from "react-router-dom";
import type { ITeacherDetail } from "../../types/teachers.type";

interface Props {
  teacher: ITeacherDetail;
}

function TeacherHero({ teacher }: Props) {
  return (
    <div className="bg-white border-b-2 border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600">
            Bosh sahifa
          </Link>
          <span>›</span>
          <Link to="/teachers" className="hover:text-blue-600">
            O'qituvchilar
          </Link>
          <span>›</span>
          <span className="text-slate-700 font-medium">{teacher.name}</span>
        </nav>

        <div className="mt-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img
            src={teacher.img}
            alt={teacher.name}
            className="w-32 h-32 rounded-full border-4 border-blue-100 object-cover"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-900">
              {teacher.name}
            </h1>
            <p className="text-lg text-blue-600">{teacher.role}</p>
            <p className="text-slate-600 mt-2">{teacher.bio}</p>

            <div className="grid grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {teacher.totalCourses}
                </p>
                <p className="text-xs text-slate-500">Kurs</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {teacher.totalStudents}+
                </p>
                <p className="text-xs text-slate-500">Talaba</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {teacher.rating}
                </p>
                <p className="text-xs text-slate-500">Reyting</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {teacher.experience}
                </p>
                <p className="text-xs text-slate-500">Tajriba</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
                Darsga yozilish
              </button>
              <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition">
                Savol berish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherHero;
