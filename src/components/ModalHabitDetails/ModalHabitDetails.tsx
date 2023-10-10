//context
import { useContext } from "preact/compat";
import { HabitsContext } from "../../context/HabitsContext";
//icons
import { AiOutlineClose } from "react-icons/ai";
//components
import Input from "../Inputs/Input";
import ConfigureTasks from "./ConfigureTasks/ConfigureTasks";
//hooks
import useHandleHabit from "./hooks/useHandleHabit";
import { useScrollToWhenMount } from "../../hooks/useScrollToWhenMount";

function ModalHabitDetails() {
  const { updateEvent, newHabit } = useContext(HabitsContext);
  const isUpdate: boolean | undefined = newHabit?.isUpdate;

  const { handleChangeNewHabit, handleCreateHabit, handleUpdateHabit } =
    useHandleHabit();

  useScrollToWhenMount();
  return (
    <>
      <div className={"absolute w-screen h-screen top-0 left-0 z-[150]"} />
      <section
        class={`
            absolute 
            text-black
            bg-white 
            p-4
            top-0
            left-0
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
            <label class={"text-xl"}>name</label>
            <Input
              name={"title"}
              onChange={handleChangeNewHabit}
              placeholder={"drink water..."}
              value={newHabit?.title}
            />
            <div class={"flex content-between gap-4"}>
              <div style={{ width: "50%" }}>
                <label class={"text-xl whitespace-nowrap"}>frecuency</label>
                <Input
                  name={"frec"}
                  type={"number"}
                  onChange={handleChangeNewHabit}
                  value={newHabit?.frec}
                  placeholder={"1 day"}
                />
              </div>
              <div style={{ width: "50%" }}>
                <label class={"text-xl whitespace-nowrap"}>duration</label>
                <Input
                  name="duration"
                  type={"number"}
                  onChange={handleChangeNewHabit}
                  value={newHabit?.duration}
                  placeholder={"30 days"}
                />
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
            onClick={() => {
              return isUpdate
                ? handleUpdateHabit(newHabit?.id)
                : handleCreateHabit();
            }}
            class={
              "text-white text-center bg-black p-2 rounded-md text-xl w-40"
            }
          >
            {isUpdate ? "update" : "create"}
          </button>
        </footer>
      </section>
    </>
  );
}

export default ModalHabitDetails;
