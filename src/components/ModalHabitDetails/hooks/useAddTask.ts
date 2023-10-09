import { useCallback, useContext, useState } from "preact/hooks";
import { generateUniqueId } from "../../../utils/generateUniqueId";
import { taskType } from "../../../types/habit";
import { HabitsContext } from "../../../context/HabitsContext";

export default function useAddTask() {
  const { updateEvent, newHabit } = useContext(HabitsContext);
  const [taskName, setTaskName] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);

  const handleAddTask = useCallback(() => {
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
  }, [taskName, newHabit]);

  const handleDeleteTask = (id: number) => {
    const newTasks = (newHabit?.tasks ?? [])?.filter(
      (task) => task?.taskId !== id
    );

    updateEvent({
      newHabit: {
        ...newHabit,
        tasks: newTasks,
      },
    });
  };

  return {
    showAddTask,
    setShowAddTask,
    handleAddTask,
    handleDeleteTask,
    taskName,
    setTaskName,
  };
}
