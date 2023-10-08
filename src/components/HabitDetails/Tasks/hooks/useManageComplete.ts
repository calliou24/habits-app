import { useContext } from "preact/hooks";
import { habitType } from "../../../../types/habit";
import { handleChangeHabitProperty } from "../../../../functions/changeHabit";
import { HabitsContext } from "../../../../context/HabitsContext";

export default function useManageCompleted() {
  const { habitToEdit, habits, updateEvent } = useContext(HabitsContext);

  const handleChangeCheckCompleted = (newStatus: boolean, taskId: number) => {
    const newTasks = habitToEdit?.tasks?.map((taskItem) =>
      taskId === taskItem?.taskId
        ? { ...taskItem, completed: newStatus }
        : taskItem
    );
    const newHabit = handleChangeHabitProperty({
      id: habitToEdit?.id ?? 0,
      newValues: [
        {
          property: "tasks",
          value: newTasks,
        },
      ],
      habits,
    });

    if (newHabit === undefined) return;

    const habitsList: habitType[] = habits?.map((habitItem) =>
      habitItem?.id === habitToEdit?.id ? newHabit : habitItem
    );

    updateEvent({ habits: habitsList, habitToEdit: newHabit });
  };

  return {
    //  completed, setCompleted,
    handleChangeCheckCompleted,
  };
}
