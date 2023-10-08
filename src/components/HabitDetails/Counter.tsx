//types
import { habitType } from "../../types/habit";
//functions
import { getTextColor } from "../../utils/textColorHelper";
//Icons
import BallWithIcon from "../BallWithIcon/BallWithIcon";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
//helpers
import { useChangeHabit } from "./hooks/useChangeHabit";

function DayCounter({ habit }: { habit: habitType | null }) {
  const { handleAddDay, handleSubtractDay } = useChangeHabit(habit);

  return (
    <div class={"flex flex-col items-center justify-center h-80"}>
      <div class={"flex items-center justify-center w-full gap-8"}>
        <BallWithIcon
          onClick={handleSubtractDay}
          colorBorder={getTextColor(habit?.color)}
          Icon={<AiOutlineMinus size={"60%"} />}
        />
        <h1 class=" text-8xl">{habit?.streak}</h1>
        <BallWithIcon
          onClick={handleAddDay}
          colorBorder={getTextColor(habit?.color)}
          Icon={<AiOutlinePlus size={"60%"} />}
        />
      </div>
      <footer class={"text-3xl"}>
        <strong>of 30 </strong> <span class=" opacity-70">/ days</span>
      </footer>
    </div>
  );
}

export default DayCounter;
