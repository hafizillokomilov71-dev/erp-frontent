import { useState } from "react";
import type { ICourse } from "../../types/courses.type";

interface Props {
  course: ICourse;
}

function CourseInfo({ course }: Props) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { label: "Tavsif", value: "description" },
    { label: "Dastur", value: "program" },
    { label: "O'qituvchi", value: "teacher" },
    { label: `Sharhlar (${course.reviews})`, value: "reviews" },
  ];

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-6">
      <div className="flex flex-wrap gap-2 border-b-2 border-slate-100 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab.value
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "description" && (
          <div>
            <h2 className="text-xl font-bold text-slate-900">Kurs haqida</h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              {course.description}
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">
              Nimalarni o'rganasiz?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
              {course.whatYouLearn.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <span className="text-blue-500">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">
              Kim uchun?
            </h3>
            <div className="space-y-2 mt-3">
              {course.forWhom.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <span className="text-blue-500">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "program" && (
          <div>
            <h2 className="text-xl font-bold text-slate-900">Kurs dasturi</h2>
            <div className="mt-4 space-y-4">
              <div className="border-2 border-slate-100 rounded-xl p-4">
                <h4 className="font-bold text-slate-900">
                  1-modul: JavaScript asoslari
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  O'zgaruvchilar, ma'lumot turlari, operatorlar, shartlar va
                  sikllar
                </p>
              </div>
              <div className="border-2 border-slate-100 rounded-xl p-4">
                <h4 className="font-bold text-slate-900">
                  2-modul: DOM bilan ishlash
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  DOM elementlari, eventlar, sahifa dinamikasi
                </p>
              </div>
              <div className="border-2 border-slate-100 rounded-xl p-4">
                <h4 className="font-bold text-slate-900">
                  3-modul: Asinxron JavaScript
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Callback, Promise, Async/Await, Fetch API
                </p>
              </div>
              <div className="border-2 border-slate-100 rounded-xl p-4">
                <h4 className="font-bold text-slate-900">
                  4-modul: OOP va ES6+
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Class, modullar, destructuring, spread/rest operatorlar
                </p>
              </div>
              <div className="border-2 border-slate-100 rounded-xl p-4">
                <h4 className="font-bold text-slate-900">
                  5-modul: Real loyihalar
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  5 ta real biznes loyihasi: Todo app, E-commerce, Blog va
                  boshqalar
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "teacher" && (
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              O'qituvchi haqida
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <img
                src={course.teacher.avatar}
                alt={course.teacher.name}
                className="w-20 h-20 rounded-full border-2 border-blue-100"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {course.teacher.name}
                </h3>
                <p className="text-blue-600">{course.teacher.role}</p>
                <p className="text-sm text-slate-500">{course.teacher.bio}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center border-2 border-slate-100 rounded-xl p-3">
                <p className="text-2xl font-bold text-blue-600">
                  {course.teacher.experience}
                </p>
                <p className="text-xs text-slate-500">Tajriba</p>
              </div>
              <div className="text-center border-2 border-slate-100 rounded-xl p-3">
                <p className="text-2xl font-bold text-blue-600">
                  {course.teacher.students}
                </p>
                <p className="text-xs text-slate-500">Talaba</p>
              </div>
              <div className="text-center border-2 border-slate-100 rounded-xl p-3">
                <p className="text-2xl font-bold text-blue-600">
                  {course.teacher.courses}
                </p>
                <p className="text-xs text-slate-500">Kurs</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 className="text-xl font-bold text-slate-900">Sharhlar</h2>
            <div className="mt-4 space-y-4">
              {course.reviewsList.map((review) => (
                <div
                  key={review.id}
                  className="border-2 border-slate-100 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{review.name}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500">
                          {"⭐".repeat(review.rating)}
                        </span>
                        <span className="text-xs text-slate-400">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-2">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseInfo;
