import { lessons, units } from "@/db/schema";
import UnitBanner from "./unitBanner";
import { LessonButton } from "./lesson-button";

interface UnitsProps {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined
    | null;
  activeLessonPercentage: number;
}

const Unit = ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: UnitsProps) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons?.map((lesson) => {
          const isCurrent = lesson.id == activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              locked={isLocked}
              id={lesson.id}
              index={lesson.id}
              totalCount={lessons.length - 1}
              current={true || isCurrent}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};

export default Unit;
