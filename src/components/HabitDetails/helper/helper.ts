//types
import { habitType } from "../../../types/habit";
//constants
import {
  dayDiffMilliseconds,
  habitInitialValue,
} from "../../../utils/constants";
//habits
import { isEmpty } from "../../../utils/validations";

type changePropertyType = {
  id: number | undefined;
  habits: habitType[];
  newValues: { property: string; value: any }[];
};
export const handleChangeHabitProperty = ({
  id,
  newValues = [],
  habits = [],
}: changePropertyType) => {
  let newHabit: habitType = habitInitialValue;
  if (isEmpty(id) || typeof id !== "number") return;

  let findHabit: habitType | undefined = habits?.find(
    (habit) => habit?.id === id
  );
  if (isEmpty(findHabit) || isEmpty(newValues)) return;

  for (const { property, value } of newValues) {
    newHabit = {
      ...findHabit,
      id,
      [property]: value,
    };
    findHabit = newHabit;
  }

  return newHabit;
};

export const isValidToAddDay = ({
  lastAdition,
}: {
  lastAdition: number | undefined | null;
}) => {
  if (isEmpty(lastAdition)) return true;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const aditionDate = new Date(lastAdition ?? 0);
  aditionDate.setHours(0, 0, 0, 0);

  return today?.getTime() - aditionDate?.getTime() === dayDiffMilliseconds;
};
