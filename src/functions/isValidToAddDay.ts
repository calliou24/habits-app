import { dayDiffMilliseconds } from "../utils/constants";
import { isEmpty } from "../utils/validations";

export const isValidToAddDay = ({
  lastaddition,
}: {
  lastaddition: number | undefined | null;
}) => {
  if (isEmpty(lastaddition)) return true;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const additionDate = new Date(lastaddition ?? 0);
  additionDate.setHours(0, 0, 0, 0);

  return today?.getTime() - additionDate?.getTime() === dayDiffMilliseconds;
};
