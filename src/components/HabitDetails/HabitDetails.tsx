//preact
import {useContext} from "preact/hooks";
//components
import DayCounter from "./Counter";
import Divider from "../Divider/Divider";
import NavBarDetails from "./NavBarDetails";
import {HabitsContext} from "../../context/HabitsContext";

// import Tasks from "./Tasks/Tasks";

function HabitDetails() {
    const {habitToEdit} = useContext(HabitsContext);
    return (
        <div className={"flex flex-col gap-8"}>
            <NavBarDetails/>
            <Divider/>
            <DayCounter habit={habitToEdit}/>
            {/*<Tasks />*/}
        </div>
    );
}

export default HabitDetails;
