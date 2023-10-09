//hooks
import { useContext } from "preact/hooks";
import useManageCompleted from "./hooks/useManageComplete";
//types
import { taskType } from "../../../types/habit";
//contexts
import { HabitsContext } from "../../../context/HabitsContext";
import CheckBox from "../../CheckBox/CheckBox";
//icons
//functions

function Task({
  task,
  isUpdateOrCreate = false,
}: {
  task: taskType;
  isUpdateOrCreate?: boolean;
}) {
  const { habitToEdit, newHabit } = useContext(HabitsContext);

  const { handleChangeCheckCompleted } = useManageCompleted();

  return (
    <div
      onClick={() => {
        if (!isUpdateOrCreate)
          handleChangeCheckCompleted(!task?.completed, task?.taskId);
      }}
      class={`${
        isUpdateOrCreate ? "opacity-60" : ""
      } text-black flex gap-3 items-center h-8`}
    >
      <CheckBox
        value={task?.completed ?? false}
        color={isUpdateOrCreate ? newHabit?.color : habitToEdit?.color ?? ""}
      />
      <p class={"text-2xl"}>{task?.title}</p>
    </div>
  );
}

export default Task;
