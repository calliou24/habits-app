export type habitReducerType = {
  habits: habitType[];
  habitToEdit: habitType;
  showAddHabit: boolean;
};

export type taskType = {
  taskId: number;
  title: string;
  completed?: boolean;
};

export type habitType = {
  id: number;
  title: string;
  streak?: number;
  color?: string;
  additions?: number[] | null;
  tasks?: taskType[];
};

export type storeType = {
  habits: habitType[];
};

export type contextType = {
  habits: habitType[];
  habitToEdit: habitType | null;
  updateEvent: (state: any) => void;
};
