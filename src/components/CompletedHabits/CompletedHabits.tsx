//preact
import { useContext, useMemo } from "preact/hooks";
//icons
import { HiArrowUpRight } from "react-icons/hi2";
import { HabitsContext } from "../../context/HabitsContext";
import BallWithIcon from "../BallWithIcon/BallWithIcon";
import { isHabitCompletedForToday } from "../../functions/isHabitCompleteForToday";
import { isEmpty } from "../../utils/validations";

export default function CompletedHabits() {
  const { habits, updateEvent } = useContext(HabitsContext);

  const completedHabits = useMemo(() => {
    return habits?.filter((habit) => {
      return isHabitCompletedForToday({
        additions: habit?.additions ?? [],
      });
    });
  }, [habits]);

  return (
    <section
      class={"bg-white p-5 rounded-xl"}
      style={{
        zIndex: 100,
      }}
    >
      <article class="flex items-center justify-between">
        <div>
          <span class={"text-gray-500 text-xl"}>habits</span>
          <h2 class={" text-4xl"}>completed</h2>
        </div>

        <BallWithIcon Icon={<HiArrowUpRight size={24} />} />
      </article>
      <article class={"mt-6"}>
        <ul class={"grid gap-2"}>
          {!isEmpty(completedHabits) ? (
            completedHabits.map((habit) => {
              return (
                <li
                  onClick={() => updateEvent({ habitToEdit: habit })}
                  class={
                    " rounded-xl w-full border cursor-pointer border-black px-5 py-2"
                  }
                >
                  <div class={"flex gap-3 items-center"}>
                    {/* <div
                      class={"h-12 w-12 rounded-3xl shadow-sm"}
                      style={{
                        background: habit?.color,
                      }}
                    /> */}
                    <p class={"text-xl"}>{habit.title}</p>
                  </div>
                </li>
              );
            })
          ) : (
            <p class={"text-gray-500 text-center text-xl"}>
              you haven't completed any habit yet
            </p>
          )}
        </ul>
      </article>
    </section>
  );
}
