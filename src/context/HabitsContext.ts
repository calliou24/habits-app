//preact
import { createContext } from "preact";

//types
import { contextType } from "../types/habit";

export const HabitsContext = createContext<contextType>({
  habits: [],
  setHabits: () => {},
  habitToEdit: {
    id: 1,
    title: "",
    completed: false,
    streak: 0,
    color: "#000000",
  },
  setHabitToEdit: () => {},
});
