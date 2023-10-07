export type habitType = {
  id: number;
  title?: string;
  completed?: boolean;
  streak?: number;
  color?: string;
  aditions?: number[] | null;
};

export type storeType = {
  habits: habitType[];
};

export type contextType = {
  habits: habitType[];
  setHabits: (habits: habitType[]) => void;
  habitToEdit: habitType | null;
  setHabitToEdit: (habit: habitType | null) => void;
};
