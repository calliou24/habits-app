//preact
import { useContext, useMemo } from "preact/hooks";
//components
import { HabitsContext } from "../../context/HabitsContext";
//icons
import { MdOutlineWaterDrop } from "react-icons/md";
import { getTextColor } from "../../utils/textColorHelper";
//styles
import styles from "./today-habits.module.css";
//validations
import { isEmpty } from "../../utils/validations";
import { isHabitCompletedForToday } from "../../functions/isHabitCompleteForToday";

export default function TodayHabits() {
  const { habits, updateEvent } = useContext(HabitsContext);

  const todayHabits = useMemo(() => {
    return habits?.filter((habit) => {
      return !isHabitCompletedForToday({
        additions: habit?.additions ?? [],
      });
    });
  }, [habits]);
  return (
    <section>
      <h1
        class={`whitespace-nowrap relative  ${styles?.["title-habits"]}`}
        style={{ fontSize: "4.5em" }}
      >
        your habits
      </h1>

      <article class={"mt-6"}>
        <ul
          class={"grid gap-2 overflow-auto max-h"}
          style={{
            maxHeight: "22em",
          }}
        >
          {!isEmpty(todayHabits) ? (
            todayHabits?.map((habit) => {
              return (
                <li
                  onClick={() => {
                    updateEvent({ habitToEdit: habit });
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
                      <span class={"opacity-70"}>
                        {!isEmpty(habit?.duration) && `/${habit?.duration}`}
                        <span class={"ml-2"} />
                        days
                      </span>
                    </p>
                  ) : (
                    <p></p>
                  )}
                </li>
              );
            })
          ) : (
            <p class={"text-gray-500 text-center text-xl"}>
              theres no habits for today!
            </p>
          )}
        </ul>
      </article>
    </section>
  );
}
