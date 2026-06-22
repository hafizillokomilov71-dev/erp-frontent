interface Teacher {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  experience: string;
  students: number;
  courses: number;
}

interface Props {
  teacher: Teacher;
}

function CourseTeacher({ teacher }: Props) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-6">
      <h2 className="text-xl font-bold text-slate-900">O'qituvchi</h2>
      <div className="mt-4 flex items-center gap-4">
        <img
          src={teacher.avatar}
          alt={teacher.name}
          className="w-16 h-16 rounded-full border-2 border-blue-100"
        />
        <div>
          <h3 className="text-lg font-bold text-slate-900">{teacher.name}</h3>
          <p className="text-blue-600">{teacher.role}</p>
          <p className="text-sm text-slate-500">{teacher.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center border-2 border-slate-100 rounded-xl p-3">
          <p className="text-2xl font-bold text-blue-600">
            {teacher.experience}
          </p>
          <p className="text-xs text-slate-500">Tajriba</p>
        </div>
        <div className="text-center border-2 border-slate-100 rounded-xl p-3">
          <p className="text-2xl font-bold text-blue-600">{teacher.students}</p>
          <p className="text-xs text-slate-500">Talaba</p>
        </div>
        <div className="text-center border-2 border-slate-100 rounded-xl p-3">
          <p className="text-2xl font-bold text-blue-600">{teacher.courses}</p>
          <p className="text-xs text-slate-500">Kurs</p>
        </div>
      </div>
    </div>
  );
}

export default CourseTeacher;
