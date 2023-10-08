//preact
import { createContext } from "preact";

//types
import { contextType } from "../types/habit";

export const HabitsContext = createContext<contextType>({
  habits: [],
  habitToEdit: {
    id: 1,
    title: "",
    streak: 0,
    color: "#000000",
  },
  updateEvent: (state: any) => {},
});
