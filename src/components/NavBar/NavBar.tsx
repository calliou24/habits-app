//preactj
import { useContext } from "preact/hooks";
//components
import { HabitsContext } from "../../context/HabitsContext";
//icons
import { AiOutlinePlus } from "react-icons/ai";
import BallWithIcon from "../BallWithIcon/BallWithIcon";

function NavBar() {
  const { habits, updateEvent } = useContext(HabitsContext);

  return (
    <nav class={" mt-8 flex items-center justify-between w-full"}>
      <div class={"flex items-center gap-4"}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt={"profile"}
          class={"w-14 h-14 rounded-full"}
        />
        <div>
          <p class={" text-gray-500"}>morning.</p>
          <p>User Name</p>
        </div>
      </div>
      <BallWithIcon
        onClick={() => updateEvent({ showAddHabit: true })}
        Icon={<AiOutlinePlus size={24} />}
      />
    </nav>
  );
}

export default NavBar;
