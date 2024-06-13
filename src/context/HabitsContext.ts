//preact
import {createContext} from "preact";

//types
import {contextType} from "../types/habit";
import {habitInitialValue, newHabitInitialValue} from "../utils/constants";

export const HabitsContext = createContext<contextType>({
    habits: [],
    habitToEdit: habitInitialValue,
    updateEvent: (state: any) => state,
    newHabit: newHabitInitialValue,
});
