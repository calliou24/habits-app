//types
import {habitType} from "../../types/habit";
//functions
//Icons

//helpers
import {useChangeHabit} from "./hooks/useChangeHabit";

function DayCounter({habit}: { habit: habitType | null }) {
    const {} = useChangeHabit(habit);

    return (
        <div class={"flex flex-col items-center justify-center h-80"}>
            <div class={"grid place-items-center gap-4 w-full"}>
                <h1 class=" text-9xl">{habit?.streak}</h1>
                <p class=" opacity-80 text-3xl">days</p>
            </div>

        </div>
    );
}

export default DayCounter;
