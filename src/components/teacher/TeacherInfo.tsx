import { useState } from "react";
import type { ITeacherDetail } from "../../types/teachers.type";

interface Props {
  teacher: ITeacherDetail;
}

function TeacherInfo({ teacher }: Props) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { label: "Haqida", value: "about" },
    { label: `Kurslari (${teacher.courses.length})`, value: "courses" },
    { label: `Sharhlar (${teacher.reviewsList.length})`, value: "reviews" },
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
        {activeTab === "about" && (
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              O'qituvchi haqida
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              {teacher.description}
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">
              Ko'nikmalar
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {teacher.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">
              Ish tajribasi
            </h3>
            <div className="space-y-4 mt-3">
              {teacher.workExperience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-blue-600 font-medium">
                    {exp.period}
                  </p>
                  <p className="font-bold text-slate-900">{exp.position}</p>
                  <p className="text-sm text-slate-500">{exp.company}</p>
                  <p className="text-sm text-slate-600 mt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">
              Sertifikatlar
            </h3>
            <div className="space-y-2 mt-3">
              {teacher.certificates.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-slate-600">{cert.name}</span>
                  <span className="text-sm text-slate-400">
                    ({cert.issuer}, {cert.year})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "courses" && (
          <div>
            <h2 className="text-xl font-bold text-slate-900">Kurslar</h2>
            <div className="space-y-4 mt-4">
              {teacher.courses.map((course) => (
                <div
                  key={course.id}
                  className="border-2 border-slate-100 rounded-xl p-4 hover:border-blue-200 transition"
                >
                  <h3 className="font-bold text-slate-900">{course.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="text-yellow-500">⭐ {course.rating}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">
                      {course.students} talaba
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-blue-600 font-bold">
                      {course.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 className="text-xl font-bold text-slate-900">Sharhlar</h2>
            {teacher.reviewsList.length === 0 ? (
              <p className="text-slate-500 mt-4">Hozircha sharhlar yo'q</p>
            ) : (
              <div className="space-y-4 mt-4">
                {teacher.reviewsList.map((review) => (
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
                        <p className="font-bold text-slate-900">
                          {review.name}
                        </p>
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherInfo;
