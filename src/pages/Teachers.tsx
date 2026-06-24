import {
  TeachersHero,
  TeachersToolbar,
  TeacherCard,
} from "../components/teachers";
import { Pagination } from "../components/courses";
import { teachersList } from "../data/teachers.data";

import { fetchTeachers } from "../hooks/api/teachers";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Teachers = () => {
  useEffect(() => {
    const getTeachers = async () => {
      const teachers = await fetchTeachers();
      console.log(teachers);
    };

    getTeachers();
  }, []);

  return (
    <div className="bg-white">
      <TeachersHero />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <TeachersToolbar />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teachersList.map((teacher) => (
            <Link to={`/teacher/${teacher.id}`} key={teacher.name}>
              <TeacherCard teacher={teacher} />
            </Link>
          ))}
        </div>

        <Pagination totalPages={3} />
      </section>
    </div>
  );
};

export default Teachers;
