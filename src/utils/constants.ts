// export const colorPallete: string[] = [];

import { habitReducerType, habitType } from "../types/habit";
import { generateUniqueId } from "./generateUniqueId";

export const dayDiffMilliseconds = 24 * 60 * 60 * 1000;

export const habitInitialValue: habitType = {
  id: 1,
  title: "",
  streak: 0,
  color: "",
};

export const habitsTemp: habitType[] = [
  {
    id: generateUniqueId(),
    title: "Bajar de peso",
    streak: 27,
    color: "#000000",
    additions: [new Date("10/6/2023").getTime()],
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
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    streak: 0,
    color: "#DDEDCC",
    additions: [new Date("10/6/2023")?.getTime()],

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
      {
        taskId: generateUniqueId(),
        title: "cenar lijero",
        completed: false,
      },
    ],
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    streak: 0,
    color: "#DDEDCC",
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    streak: 0,
    color: "#DDEDCC",
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    streak: 0,
    color: "#DDEDCC",
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    streak: 0,
    color: "#FBEBCC",
  },
];

export const reducerInitialState: habitReducerType = {
  habits: habitsTemp,
  habitToEdit: habitInitialValue,
};
