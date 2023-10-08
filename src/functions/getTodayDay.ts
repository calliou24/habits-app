export const getTodayDateNumber = (): number => {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  return todayDate?.getTime();
};
