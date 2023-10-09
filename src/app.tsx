//preact
import { useReducer } from "preact/hooks";
//component
import NavBar from "./components/NavBar/NavBar";
import Divider from "./components/Divider/Divider";
import { HabitsContext } from "./context/HabitsContext";
import TodayHabits from "./components/TodayHabits/TodayHabits";
import HabitDetails from "./components/HabitDetails/HabitDetails";
import CompletedHabits from "./components/CompletedHabits/CompletedHabits";
//validation
import { isEmpty } from "./utils/validations";
//constants
import { reducerInitialState } from "./utils/constants";
//functions
import { getTextColor } from "./utils/textColorHelper";
import ModalHabitDetails from "./components/ModalHabitDetails/ModalHabitDetails";
import useHideBodyScroll from "./hooks/useHideBodyScroll";

const App = () => {
  const [event, updateEvent] = useReducer((prev, next) => {
    return { ...prev, ...(next ?? {}) };
  }, reducerInitialState);

  const { habits, habitToEdit, showAddHabit, newHabit } = event;
  useHideBodyScroll(showAddHabit);

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
            habitToEdit,
            updateEvent,
            newHabit,
          }}
        >
          {showAddHabit && <ModalHabitDetails />}
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
