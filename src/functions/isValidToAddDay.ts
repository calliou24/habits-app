//constants
import { dayDiffMilliseconds } from "../utils/constants";
//validations
import { isEmpty } from "../utils/validations";

export const isValidToAddDay = ({
  lastaddition,
  frecuency,
}: {
  lastaddition: number | undefined | null;
  frecuency?: number;
}) => {
  if (isEmpty(frecuency) || frecuency === 0) return true;
  if (isEmpty(lastaddition)) return true;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const additionDate = new Date(lastaddition ?? 0);
  additionDate.setHours(0, 0, 0, 0);

  return (
    (today?.getTime() - additionDate?.getTime()) / dayDiffMilliseconds ===
    frecuency
  );
};
