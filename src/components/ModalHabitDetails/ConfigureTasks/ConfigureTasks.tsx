//hooks
import { useContext } from "preact/hooks";
import useAddTask from "../hooks/useAddTask";
//context
import { HabitsContext } from "../../../context/HabitsContext";
//validations
import size, { isEmpty } from "../../../utils/validations";
//components
import CheckBox from "../../CheckBox/CheckBox";
import Task from "../../HabitDetails/Tasks/Task";
import BottomLineInput from "../../Inputs/BottomLineInput";
//icons
import { AiOutlineCheck, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

function ConfigureTasks() {
  const { newHabit } = useContext(HabitsContext);

  const {
    showAddTask,
    setShowAddTask,
    taskName,
    setTaskName,
    handleAddTask,
    handleDeleteTask,
  } = useAddTask();



  return (
    <div class={"flex flex-col gap-2 mt-6"}>
      <div class={"flex items-center justify-between w-full"}>
        <p class={"text-4xl "}>add tasks</p>
        {!showAddTask ? (
          <AiOutlinePlus class={"cursor-pointer"} onClick={() => setShowAddTask(true)} size="1.6em" />
        ) : (
          <div class={"flex gap-4"}>
            <div class={" text-white bg-green-500 p-2 rounded-md"}>
              <AiOutlineCheck
                onClick={() => {
                  handleAddTask();
                }}
              />
            </div>
            <div class={" text-white bg-red-500 p-2 rounded-md"}>
              <AiOutlineClose onClick={() => setShowAddTask(false)} />
            </div>
          </div>
        )}
      </div>
      <ul class={" overflow-y-auto flex flex-col gap-3"}>
        {showAddTask && (
          <li class={`opacity-60 text-black flex gap-3 items-center h-8`}>
            <CheckBox value={true} color={newHabit?.color ?? ""} />
            <BottomLineInput
              value={taskName}
              type="text"
              onChange={(e) => {
                const value = (e?.target as HTMLInputElement)?.value;
                setTaskName(value);
              }}
              style={{
                width: "75%",
              }}
            />
          </li>
        )}
        {!isEmpty(newHabit?.tasks) &&
          size(newHabit?.tasks) > 0 &&
          newHabit?.tasks?.map((task) => {
            return (
              <li
                class={"flex justify-between items-center"}
                style={{
                  width: "99%",
                }}
              >
                <Task isUpdateOrCreate={true} task={task} />
                <BiTrashAlt
                  onClick={() => {
                    handleDeleteTask(task?.taskId);
                  }}
                  fill="red"
                  size="1.3em"
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ConfigureTasks;
