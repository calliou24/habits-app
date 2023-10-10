import { useCallback, useContext } from "preact/hooks";
import { isEmpty } from "../../../utils/validations";
import { HabitsContext } from "../../../context/HabitsContext";
import {
  habitInitialValue,
  newHabitInitialValue,
} from "../../../utils/constants";

export default function useHandleHabit() {
  const { updateEvent, newHabit, habits } = useContext(HabitsContext);

  const handleChangeNewHabit = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const property = target?.name;

    if (isEmpty(property)) return;

    const value = target?.value;
    updateEvent({
      newHabit: {
        ...newHabit,
        [property]: value,
      },
    });
  };

  const handleCreateHabit = useCallback(() => {
    //req
    const requiredFields: string[] = ["title", "duration", "frec"];

    let isSomeFieldEmpty = Object.entries(newHabit)?.some(
      ([key, value]) => requiredFields?.includes(key) && isEmpty(value)
    );

    if (isSomeFieldEmpty) return console.error("error empty fields");

    updateEvent({
      habits: [newHabit, ...habits],
      showAddHabit: false,
      newHabit: newHabitInitialValue,
    });
  }, [habits, newHabit]);

  return { handleChangeNewHabit, handleCreateHabit };
}
