import { useCallback, useContext, useState } from "preact/hooks";
import { generateUniqueId } from "../../../utils/generateUniqueId";
import { taskType } from "../../../types/habit";
import { HabitsContext } from "../../../context/HabitsContext";
import { isEmpty } from "../../../utils/validations";

export default function useAddTask() {
  const { updateEvent, newHabit } = useContext(HabitsContext);
  const [taskName, setTaskName] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);

  const handleAddTask = useCallback(() => {
    if (isEmpty(taskName)) return setShowAddTask(false);
    const newTask: taskType = {
      title: taskName,
      taskId: generateUniqueId(),
      completed: false,
    };

    updateEvent({
      newHabit: {
        ...newHabit,
        tasks: [newTask, ...(newHabit?.tasks ?? [])],
      },
    });
    setShowAddTask(false);
    setTaskName("");
  }, [taskName, newHabit]);

  const handleDeleteTask = useCallback(
    (id: number) => {
      const newTasks = (newHabit?.tasks ?? [])?.filter(
        (task) => task?.taskId !== id
      );

      updateEvent({
        newHabit: {
          ...newHabit,
          tasks: newTasks,
        },
      });
    },
    [newHabit?.tasks]
  );

  return {
    showAddTask,
    setShowAddTask,
    handleAddTask,
    handleDeleteTask,
    taskName,
    setTaskName,
  };
}
