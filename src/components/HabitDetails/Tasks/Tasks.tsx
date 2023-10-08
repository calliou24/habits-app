import { useContext } from "preact/hooks";
import { HabitsContext } from "../../../context/HabitsContext";
import { isEmpty } from "../../../utils/validations";
import Task from "./Task";

function Tasks() {
  const { habitToEdit } = useContext(HabitsContext);
  return (
    <>
      {!isEmpty(habitToEdit?.tasks) && (
        <section class={"bg-white p-5 rounded-xl"}>
          <header>
            <span class={"text-gray-500 text-xl"}>habit</span>
            <h2 class={" text-black text-4xl"}>tasks</h2>
          </header>

          <article>
            <ul class={"mt-4 flex flex-col gap-2 h-40 overflow-y-auto"}>
              {habitToEdit?.tasks?.map((task) => (
                <Task task={task} />
              ))}
            </ul>
          </article>
          {/* <footer/> */}
        </section>
      )}
    </>
  );
}

export default Tasks;
