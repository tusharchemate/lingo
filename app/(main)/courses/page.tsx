import { getCourses } from "@/db/queries";
import React from "react";
import List from "./list";

const Courses = async () => {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-[912px px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-600">Languages Courses</h1>

      <List courses={courses} activeCourseId={1} />
    </div>
  );
};

export default Courses;
