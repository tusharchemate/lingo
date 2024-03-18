import { lessons, units } from "@/db/schema";
import UnitBanner from "./unitBanner";

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
    </>
  );
};

export default Unit;
