//preact
import { useContext } from "preact/hooks";
//icons
import { HiArrowUpRight } from "react-icons/hi2";
import { HabitsContext } from "../../context/HabitsContext";
import BallWithIcon from "../BallWithIcon/BallWithIcon";

export default function CompletedHabits() {
  const { habits } = useContext(HabitsContext);
  return (
    <section
      class={"mt-5 bg-white p-5 rounded-xl"}
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
          {habits
            ?.filter((habit) => habit?.completed)
            .map((habit) => {
              return (
                <li class={" rounded-2xl w-full border border-black p-5"}>
                  <div class={"flex gap-3 items-center"}>
                    <div
                      class={"h-12 w-12 rounded-2xl shadow-sm"}
                      style={{
                        background: habit?.color,
                      }}
                    />
                    <p class={"text-xl"}>{habit.title}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </article>
    </section>
  );
}
