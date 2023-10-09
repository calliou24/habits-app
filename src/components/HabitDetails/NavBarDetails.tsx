//preact
import { useContext } from "preact/hooks";
//icons
import { CiSettings } from "react-icons/ci";
import { HiMiniArrowLeft } from "react-icons/hi2";
//components
import { HabitsContext } from "../../context/HabitsContext";
import BallWithIcon from "../BallWithIcon/BallWithIcon";
//functions
import { getTextColor } from "../../utils/textColorHelper";

//constants

import { habitInitialValue } from "../../utils/constants";

function NavBarDetails() {
  const { habitToEdit, updateEvent } = useContext(HabitsContext);
  return (
    <nav class={" mt-8 flex items-center justify-between w-full"}>
      <BallWithIcon
        onClick={() => {
          updateEvent({ habitToEdit: habitInitialValue });
        }}
        colorBorder={getTextColor(habitToEdit?.color)}
        Icon={<HiMiniArrowLeft size={"60%"} />}
      />
      <div class={"flex items-center gap-1"}>
        <p class={" text-xl lowercase"}>{habitToEdit?.title}</p>
      </div>
      <BallWithIcon
        onClick={() => {
          updateEvent({ showAddHabit: true });
        }}
        colorBorder={getTextColor(habitToEdit?.color)}
        Icon={<CiSettings size={"60%"} />}
      />
    </nav>
  );
}

export default NavBarDetails;
