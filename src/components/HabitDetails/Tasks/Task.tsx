//hooks
import { useContext } from "preact/hooks";
import useManageCompleted from "./hooks/useManageComplete";
//types
import { taskType } from "../../../types/habit";
//contexts
import { HabitsContext } from "../../../context/HabitsContext";
//icons
import { BsCheck } from "react-icons/bs";
//functions
import { getTextColor } from "../../../utils/textColorHelper";

function Task({ task }: { task: taskType }) {
  const { habitToEdit } = useContext(HabitsContext);

  const { handleChangeCheckCompleted } = useManageCompleted();

  return (
    <li
      onClick={() => {
        handleChangeCheckCompleted(!task?.completed, task?.taskId);
      }}
      class={"text-black flex gap-3 items-center h-8"}
    >
      <div
        class={
          "border-2 border-black h-5 w-5 rounded flex items-center justify-center"
        }
        style={{
          background: task?.completed ? habitToEdit?.color : "",
        }}
      >
        {task?.completed && (
          <BsCheck size="100%" fill={getTextColor(habitToEdit?.color)} />
        )}
      </div>
      <p class={"text-2xl"}>{task?.title}</p>
    </li>
  );
}

export default Task;
