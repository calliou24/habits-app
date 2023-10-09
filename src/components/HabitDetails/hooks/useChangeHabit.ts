//hooks
import { useCallback, useContext } from "preact/hooks";
//types
import { habitType } from "../../../types/habit";
//functions
import { handleChangeHabitProperty } from "../../../functions/changeHabit";
//context
import { HabitsContext } from "../../../context/HabitsContext";
//validations
import size from "../../../utils/validations";
//functions
import { getTodayDateNumber } from "../../../functions/getTodayDay";
import { isValidToAddDay } from "../../../functions/isValidToAddDay";

export const useChangeHabit = (habit: habitType | null) => {
  const { habits, updateEvent } = useContext(HabitsContext);

  const handleChangeHabit = useCallback(
    (newValues: { property: string; value: any }[]) => {
      const newHabit: habitType | undefined = handleChangeHabitProperty({
        id: habit?.id,
        newValues,
        habits: habits,
      });

      if (newHabit === undefined) return;

      const habitsList: habitType[] = habits?.map((habitItem) =>
        habitItem?.id === habit?.id ? newHabit : habitItem
      );
      updateEvent({ habitToEdit: newHabit, habits: habitsList });
    },
    [habits, habit?.id]
  );

  const handleAddDay = useCallback(() => {
    const additions: number[] = habit?.additions ?? [];
    const additionsSize = size(additions);
    const lastAdditionIndex: number = additionsSize > 1 ? additionsSize - 1 : 0;

    if (
      !isValidToAddDay({
        lastaddition: additions?.[lastAdditionIndex],
      })
    )
      return;

    if (additionsSize === 2) additions[1] = getTodayDateNumber();
    if (additionsSize === 1 || additionsSize === 0)
      additions?.push(getTodayDateNumber());

    handleChangeHabit([
      { property: "streak", value: (habit?.streak ?? 0) + 1 },
      {
        property: "additions",
        value: additions,
      },
    ]);
  }, [habit?.additions, habit?.streak]);

  const handleSubtractDay = useCallback(() => {
    if (habit?.streak === 0) return;

    let additions: number[] = habit?.additions ?? [];
    const additionsSize = size(additions);
    const lastAdditionIndex: number = additionsSize > 1 ? additionsSize - 1 : 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastaddition = new Date(additions?.[lastAdditionIndex]);
    lastaddition.setHours(0, 0, 0, 0);

    additions.pop();
    if (today?.getTime() === lastaddition.getTime())
      handleChangeHabit([
        {
          property: "streak",
          value: (habit?.streak ?? 0) - 1,
        },
        {
          property: "additions",
          value: additions,
        },
      ]);
  }, [habit?.additions, habit?.streak]);

  return {
    handleAddDay,
    handleSubtractDay,
  };
};
