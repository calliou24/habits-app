import { useContext } from "preact/compat";
import { AiOutlineClose } from "react-icons/ai";
import BallWithIcon from "../BallWithIcon/BallWithIcon";
import { HabitsContext } from "../../context/HabitsContext";
import { isEmpty } from "../../utils/validations";
import Input from "../Inputs/Input";
import ConfigureTasks from "./ConfigureTasks/ConfigureTasks";

function ModalHabitDetails() {
  const { updateEvent, habitToEdit } = useContext(HabitsContext);
  return (
    <>
      <div className={"absolute w-screen h-screen top-0 left-0 z-[150]"} />
      <section
        class={`
            absolute 
            text-black
            bg-white 
            shadow-2xl 
            p-4
             top-0
            rounded-lg
            self-center justify-self-center 
            z-[200]
         
      `}
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <header
          class={`
            flex items-center justify-between
            w-full
        `}
          style={{
            height: "10%",
          }}
        >
          <div>
            <span class={"text-gray-500 text-xl"}>new</span>
            <h2 class={" text-4xl"}>habit</h2>
          </div>
          <AiOutlineClose
            onClick={() => updateEvent({ showAddHabit: false })}
            size="1.8em"
          />
        </header>
        <section
          style={{
            height: "80%",
          }}
        >
          <form
            class={"pt-8 flex flex-col gap-4"}
            onSubmit={(e) => e.preventDefault()}
          >
            <label class={"text-xl"}>Name</label>
            <Input />
            <div class={"flex content-between gap-4"}>
              <div style={{ width: "50%" }}>
                <label class={"text-xl whitespace-nowrap"}>Frecuency</label>
                <Input placeholder={"1 day"} />
              </div>
              <div style={{ width: "50%" }}>
                <label class={"text-xl whitespace-nowrap"}>Duration</label>
                <Input placeholder={"30 days"} />
              </div>
            </div>
            <ConfigureTasks />
          </form>
        </section>
        <footer
          class={"grid place-items-center"}
          style={{
            height: "10%",
          }}
        >
          <button
            class={
              "text-white text-center bg-black p-2 rounded-md text-xl w-40"
            }
          >
            {!isEmpty(habitToEdit?.title) ? "update" : "create"}
          </button>
        </footer>
      </section>
    </>
  );
}

export default ModalHabitDetails;
