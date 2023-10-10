export type habitReducerType = {
  habits: habitType[];
  habitToEdit: habitType;
  showAddHabit: boolean;
  newHabit: newHabitType;
};

export type taskType = {
  taskId: number;
  title: string;
  completed?: boolean;
};

export interface habitType {
  id: number;
  title: string;
  streak?: number;
  color?: string;
  additions?: number[] | null;
  tasks?: taskType[];
  frec?: number;
  duration?: number;
}

export interface newHabitType extends habitType {
  isUpdate?: boolean;
}

export type storeType = {
  habits: habitType[];
};

export type contextType = {
  habits: habitType[];
  habitToEdit: habitType | null;
  updateEvent: (state: any) => void;
  newHabit: newHabitType;
};
