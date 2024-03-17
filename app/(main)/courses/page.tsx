import { getCourses, getUserProgress } from "@/db/queries";
import React from "react";
import List from "./list";

const Courses = async () => {
  const coursesData = await getCourses();
  const userProgressData = await getUserProgress();

const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
]);


  return (
    <div className="h-full max-w-[912px px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-600">Languages Courses</h1>

      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default Courses;
