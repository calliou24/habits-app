// export const colorPallete: string[] = [];

import { habitType } from "../types/habit";
import { generateUniqueId } from "./generateUniqueId";

export const dayDiffMilliseconds = 24 * 60 * 60 * 1000;

export const habitInitialValue: habitType = {
  id: 1,
  title: "",
  completed: false,
  streak: 0,
  color: "",
};

export const habitsTemp: habitType[] = [
  {
    id: generateUniqueId(),
    title: "Drink water",
    completed: false,
    streak: 30,
    color: "#000000",
    aditions: [new Date("10/6/2023").getTime()],
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    completed: false,
    streak: 0,
    color: "#DDEDCC",
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    completed: true,
    streak: 0,
    color: "#DDEDCC",
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    completed: true,
    streak: 0,
    color: "#DDEDCC",
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    completed: true,
    streak: 0,
    color: "#DDEDCC",
  },
  {
    id: generateUniqueId(),
    title: "Drink water",
    completed: false,
    streak: 0,
    color: "#FBEBCC",
  },
];
