import { useState } from "react";
import { allCourses } from "../data/courses.data";
import type { ICourse } from "../types/courses.type";
import CourseHero from "../components/course/CourseHero";
import CourseInfo from "../components/course/CourseInfo";
import CourseTeacher from "../components/course/CourseTeacher";
import CourseReviews from "../components/course/CourseReviews";
import SimilarCourses from "../components/course/SimilarCourses";

function CourseDetail() {
  const [currentCourse, setCurrentCourse] = useState<ICourse>(allCourses[0]);

  function handleCourseChange(courseId: number) {
    const newCourse = allCourses.find((c) => c.id === courseId);
    if (newCourse) {
      setCurrentCourse(newCourse);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <CourseHero course={currentCourse} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <CourseInfo course={currentCourse} />
            <CourseTeacher teacher={currentCourse.teacher} />
            <CourseReviews
              reviews={currentCourse.reviewsList}
              total={currentCourse.reviews}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">
              <div className="bg-white rounded-2xl border-2 border-blue-100 p-6 shadow-lg">
                <p className="text-3xl font-bold text-blue-600">
                  {currentCourse.price}
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  {currentCourse.students} talaba • {currentCourse.duration}
                </p>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                  Kursga yozilish
                </button>
                <button className="w-full mt-2 border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition">
                  Dars jadvali
                </button>
              </div>

              <div className="bg-white rounded-2xl border-2 border-slate-100 p-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span>⭐</span>
                  <span>
                    {currentCourse.rating} ({currentCourse.reviews} sharh)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <span>👨‍🎓</span>
                  <span>{currentCourse.students} talaba</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <span>⏱️</span>
                  <span>{currentCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <span>🌐</span>
                  <span>{currentCourse.language}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SimilarCourses
          courses={currentCourse.similarCourses}
          onCourseClick={handleCourseChange}
        />
      </div>
    </div>
  );
}

export default CourseDetail;
