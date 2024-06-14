//context
import {useContext} from "preact/compat";
import {HabitsContext} from "../../context/HabitsContext";
//icons
// import { AiOutlineClose } from "react-icons/ai";
//components
import Input from "../Inputs/Input";
// import ConfigureTasks from "./ConfigureTasks/ConfigureTasks";
//hooks
import useHandleHabit from "./hooks/useHandleHabit";
import {useScrollToWhenMount} from "../../hooks/useScrollToWhenMount";

function ModalHabitDetails() {
    const {updateEvent, newHabit} = useContext(HabitsContext);
    const isUpdate: boolean | undefined = newHabit?.isUpdate;

    const {handleChangeNewHabit, handleCreateHabit, handleUpdateHabit} =
        useHandleHabit();

    useScrollToWhenMount();
    return (
        <>
            <section
                className={`
            absolute 
            text-black
            bg-white 
            p-4
            top-0
            left-0
            self-center justify-self-center 
            z-[200]
            flex
            flex-col
            items-center 
            justify-center
         
      `}
                style={{
                    height: "100vh",
                    width: "100vw",
                }}
            >
                <section className={"w-full h-full"} style={{maxWidth: "600px"}}>
                    <header
                        className={`
            flex items-center justify-between
            w-full
            `}
                        style={{
                            height: "10%",
                        }}
                    >
                        <div>
                            <span className={"text-gray-500 text-xl"}>new</span>
                            <h2 className={" text-4xl"}>habit</h2>
                        </div>
                        <div onClick={() => updateEvent({showAddHabit: false})}>
                            {/* <AiOutlineClose size="1.8em" /> */}
                            <button>close</button>
                        </div>
                    </header>
                    <form
                        className={"grid gap-4"}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className={"text-xl"}>name</label>
                            <Input
                                name={"title"}
                                onChange={handleChangeNewHabit}
                                placeholder={"drink water..."}
                                value={newHabit?.title}
                            />
                        </div>

                    </form>
                    {/*<ConfigureTasks />*/}

                    <footer className={"grid place-items-center mt-6 "}>
                        <button
                            onClick={() => {
                                return isUpdate
                                    ? handleUpdateHabit(newHabit?.id)
                                    : handleCreateHabit();
                            }}
                            className={
                                "text-white text-center bg-black p-2 rounded-md text-xl w-40"
                            }
                        >
                            {isUpdate ? "update" : "create"}
                        </button>
                    </footer>
                </section>
            </section>
        </>
    );
}

export default ModalHabitDetails;
