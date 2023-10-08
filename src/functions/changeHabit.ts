import { habitType } from "../types/habit";
import { habitInitialValue } from "../utils/constants";
import { isEmpty } from "../utils/validations";
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

  let findHabit: habitType =
    habits?.find((habit) => habit?.id === id) ?? newHabit;

  if (isEmpty(findHabit?.title) || isEmpty(newValues)) return;

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
