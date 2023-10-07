//preact
import { useState } from "preact/hooks";
//component
import NavBar from "./components/NavBar/NavBar";
import Divider from "./components/Divider/Divider";
import { HabitsContext } from "./context/HabitsContext";
import TodayHabits from "./components/TodayHabits/TodayHabits";
import HabitDetails from "./components/HabitDetails/HabitDetails";
import CompletedHabits from "./components/CompletedHabits/CompletedHabits";
//types
import { habitType } from "./types/habit";
//validation
import { isEmpty } from "./utils/validations";
//constants
import { habitInitialValue, habitsTemp } from "./utils/constants";
//functions
import { getTextColor } from "./utils/textColorHelper";

const App = () => {
  const [habits, setHabits] = useState<habitType[]>(habitsTemp);
  const [habitToEdit, setHabitToEdit] = useState<habitType | null>(
    habitInitialValue
  );

  return (
    <main
      id={"main"}
      style={{
        background: habitToEdit?.color,
        color: !isEmpty(habitToEdit?.color)
          ? getTextColor(habitToEdit?.color)
          : "#000000",
      }}
    >
      <div id={"app"}>
        <HabitsContext.Provider
          value={{
            habits,
            setHabits,
            habitToEdit,
            setHabitToEdit,
          }}
        >
          {!isEmpty(habitToEdit?.title) ? (
            <HabitDetails />
          ) : (
            <>
              <div
                class={"sticky grid gap-8"}
                style={{
                  top: 0,
                  zIndex: 50,
                }}
              >
                <NavBar />
                <Divider />
                <TodayHabits />
              </div>
              <CompletedHabits />
            </>
          )}
        </HabitsContext.Provider>
      </div>
    </main>
  );
};

export default App;
