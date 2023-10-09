import { useContext } from "preact/compat";
import { AiOutlineClose } from "react-icons/ai";
import BallWithIcon from "../BallWithIcon/BallWithIcon";
import { HabitsContext } from "../../context/HabitsContext";
import { isEmpty } from "../../utils/validations";

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
          <BallWithIcon
            onClick={() => updateEvent({ showAddHabit: false })}
            Icon={<AiOutlineClose size="60%" />}
          />
        </header>
        <section
          style={{
            height: "80%",
          }}
        >
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            class="rounded-sm w-full py-3 px-4 text-gray-900 focus:outline-none bg-gray-100"
            placeholder="name of the habit"
            required
          />
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
