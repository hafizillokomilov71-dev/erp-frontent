import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { teacherDetails, teachersList } from "../data/teachers.data";
import type { ITeacherDetail } from "../types/teachers.type";
import TeacherHero from "../components/teacher/Teacherhero";
import TeacherInfo from "../components/teacher/TeacherInfo";
import TeacherCourses from "../components/teacher/TeacherCourses";
import TeacherReviews from "../components/teacher/TeacherReviews";
import TeacherSchedule from "../components/teacher/TeacherSchedule";
import TeacherCard from "../components/teacher/TeacherCard";

function TeacherDetail() {
  const { id } = useParams<{ id: string }>();
  const [currentTeacher, setCurrentTeacher] = useState<
    ITeacherDetail | undefined
  >(teacherDetails.find((t) => t.id === Number(id)));

  const otherTeachers = teachersList.filter(
    (t) => t.name !== currentTeacher?.name,
  );

  if (!currentTeacher) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">O'qituvchi topilmadi</p>
      </div>
    );
  }

  function handleTeacherClick(name: string) {
    const teacher = teacherDetails.find((t) => t.name === name);
    if (teacher) {
      setCurrentTeacher(teacher);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <TeacherHero teacher={currentTeacher} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <TeacherInfo teacher={currentTeacher} />
            <TeacherCourses courses={currentTeacher.courses} />
            <TeacherReviews reviews={currentTeacher.reviewsList} />
          </div>

          <div className="lg:col-span-1">
            <TeacherSchedule schedule={currentTeacher.schedule} />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Boshqa o'qituvchilar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTeachers.slice(0, 3).map((teacher) => (
              <div
                key={teacher.name}
                onClick={() => handleTeacherClick(teacher.name)}
                className="cursor-pointer"
              >
                <TeacherCard teacher={teacher} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
