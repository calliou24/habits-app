//hooks
import useHideBodyScroll from "./hooks/useHideBodyScroll";
//preact
import { Suspense, lazy } from "preact/compat";
import { useReducer } from "preact/hooks";
//validation
import { isEmpty } from "./utils/validations";
//constants
import { reducerInitialState } from "./utils/constants";
//functions
import { getTextColor } from "./utils/textColorHelper";

//context
import { HabitsContext } from "./context/HabitsContext";
//component
const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const Divider = lazy(() => import("./components/Divider/Divider"));
const TodayHabits = lazy(() => import("./components/TodayHabits/TodayHabits"));
const HabitDetails = lazy(
  () => import("./components/HabitDetails/HabitDetails")
);
const CompletedHabits = lazy(
  () => import("./components/CompletedHabits/CompletedHabits")
);
const ModalHabitDetails = lazy(
  () => import("./components/ModalHabitDetails/ModalHabitDetails")
);

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
          {showAddHabit && (
            <Suspense fallback={<></>}>
              <ModalHabitDetails />
            </Suspense>
          )}
          {!isEmpty(habitToEdit?.title) ? (
            <Suspense fallback={<></>}>
              <HabitDetails />
            </Suspense>
          ) : (
            <>
              <div
                class={"sticky grid gap-8"}
                style={{
                  top: 0,
                  zIndex: 50,
                }}
              >
                <Suspense fallback={<></>}>
                  <NavBar />
                </Suspense>

                <Suspense fallback={<></>}>
                  <Divider />
                </Suspense>

                <Suspense fallback={<></>}>
                  <TodayHabits />
                </Suspense>
              </div>

              <Suspense fallback={<></>}>
                <CompletedHabits />
              </Suspense>
            </>
          )}
        </HabitsContext.Provider>
      </div>
    </main>
  );
};

export default App;
