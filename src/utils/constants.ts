// export const colorPallete: string[] = [];

import {habitReducerType, habitType} from "../types/habit";
import {generateUniqueId} from "./generateUniqueId";

export const habitRequiredFields: string[] = ["title", "frec", "duration"];
export const dayDiffMilliseconds: number = 24 * 60 * 60 * 1000;

export const newHabitInitialValue: habitType = {
    id: 1,
    title: "",
    streak: 0,
    color: "#000000",
    tasks: [],
};

export const habitInitialValue: habitType = {
    id: 1,
    title: "",
    streak: 0,
    color: "",
    tasks: [
        {
            taskId: generateUniqueId(),
            title: "buen desayuno",
            completed: true,
        },
        {
            taskId: generateUniqueId(),
            title: "comer bien",
            completed: false,
        },
    ],
};

export const habitsTemp: habitType[] = [
    {
        id: generateUniqueId(),
        title: "Desayunar",
        streak: 27,
        color: "#000000",
        additions: [new Date("10//2023").getTime()],

    },
    {
        id: generateUniqueId(),
        title: "Tomar agua",
        streak: 0,
        color: "#DDEDEC",
        additions: [new Date("10/6/2023")?.getTime()],
    },
    {
        id: generateUniqueId(),
        title: "Caminar",
        streak: 0,
        color: "#FBEBCC",
    },
    {
        id: generateUniqueId(),
        title: "Pasear perros",
        streak: 0,
        color: "#ECECEC",
    },

];

export const reducerInitialState: habitReducerType = {
    habits: habitsTemp,
    habitToEdit: habitInitialValue,
    showAddHabit: false,
    newHabit: newHabitInitialValue,
};
