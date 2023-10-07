//preact
import { useContext } from "preact/hooks";
//components
import { HabitsContext } from "../../context/HabitsContext";
//icons
import { MdOutlineWaterDrop } from "react-icons/md";
import { getTextColor } from "../../utils/textColorHelper";
//styles
import styles from "./today-habits.module.css";
//validations
import { isEmpty } from "../../utils/validations";

export default function TodayHabits() {
  const { habits, setHabitToEdit } = useContext(HabitsContext);

  return (
    <section>
      <h1
        class={`whitespace-nowrap relative ${styles?.["title-habits"]}`}
        style={{ fontSize: "4.5em" }}
      >
        your habits
      </h1>

      <article class={"mt-6"}>
        <ul
          class={"grid gap-2 overflow-auto"}
          style={{
            height: "22em",
          }}
        >
          {!isEmpty(habits) &&
            habits
              ?.filter((habit) => !habit?.completed)
              ?.map((habit) => {
                return (
                  <li
                    onClick={() => {
                      setHabitToEdit(habit);
                    }}
                    class={"p-4 rounded-xl h-40 flex flex-col cursor-pointer"}
                    style={{
                      backgroundColor: habit?.color,
                      color: getTextColor(habit.color),
                    }}
                  >
                    <div class={"flex items-center gap-1 h-12"}>
                      <MdOutlineWaterDrop size={30} />
                      <span class={"text-3xl"}>{habit?.title}</span>
                    </div>
                    {(habit?.streak ?? 0) < 30 ? (
                      <p
                        class={
                          "flex justify-end h-28 items-end text-end text-4xl"
                        }
                      >
                        {habit?.streak}
                        <span class={"opacity-70"}> /30 days</span>
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </li>
                );
              })}
        </ul>
      </article>
    </section>
  );
}
