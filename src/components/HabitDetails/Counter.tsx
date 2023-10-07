//preact
import { useContext } from "preact/hooks";
//types
import { habitType } from "../../types/habit";
//functions
import { getTextColor } from "../../utils/textColorHelper";
//Icons
import BallWithIcon from "../BallWithIcon/BallWithIcon";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
//components
import { HabitsContext } from "../../context/HabitsContext";
//helpers
import { handleChangeHabitProperty, isValidToAddDay } from "./helper/helper";
import size from "../../utils/validations";

function DayCounter({ habit }: { habit: habitType | null }) {
  const { setHabitToEdit, habits, setHabits } = useContext(HabitsContext);

  const handleChangeHabit = (newValues: { property: string; value: any }[]) => {
    const newHabit: habitType | undefined = handleChangeHabitProperty({
      id: habit?.id,
      newValues,
      habits: habits,
    });

    console.log(newHabit);
    if (newHabit !== undefined) {
      setHabitToEdit(newHabit);
      const habitsList: habitType[] = habits?.map((habitItem) =>
        habitItem?.id === habit?.id ? newHabit : habitItem
      );
      setHabits(habitsList);
    }
  };

  const handleAddDay = () => {
    const aditions: number[] = habit?.aditions ?? [];
    const aditionsSize = size(aditions);
    const lastAdditionIndex: number = aditionsSize > 1 ? aditionsSize - 1 : 0;
    if (
      isValidToAddDay({
        lastAdition: aditions?.[lastAdditionIndex],
      })
    ) {
      if (aditionsSize === 2) aditions[1] = new Date().getTime();
      if (aditionsSize === 1 || aditionsSize === 0)
        aditions?.push(new Date().getTime());

      handleChangeHabit([
        { property: "streak", value: (habit?.streak ?? 0) + 1 },
        {
          property: "aditions",
          value: aditions,
        },
      ]);
    }
  };

  const handleSubtractDay = () => {
    if (habit?.streak !== 0) {
      let aditions: number[] = habit?.aditions ?? [];
      const aditionsSize = size(aditions);
      const lastAdditionIndex: number = aditionsSize > 1 ? aditionsSize - 1 : 0;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const lastAdition = new Date(aditions?.[lastAdditionIndex]);
      lastAdition.setHours(0, 0, 0, 0);

      aditions.pop();
      if (today?.getTime() === lastAdition.getTime())
        handleChangeHabit([
          {
            property: "streak",
            value: (habit?.streak ?? 0) - 1,
          },
          {
            property: "aditions",
            value: aditions,
          },
        ]);
    }
  };
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
