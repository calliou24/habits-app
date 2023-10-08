import { isEmpty } from "../utils/validations";
import { getLastAddition } from "./getLastAdition";

export const isHabitCompletedForToday = ({
  additions,
}: {
  additions: number[] | null;
}): boolean => {
  if (isEmpty(additions)) return false;

  const lastAdditionDate = new Date(
    getLastAddition({
      habitAdditions: additions ?? [],
    })
  );
  lastAdditionDate?.setHours(0, 0, 0, 0);

  const todayDate = new Date();
  todayDate?.setHours(0, 0, 0, 0);

  return lastAdditionDate?.getTime() === todayDate?.getTime();
};
