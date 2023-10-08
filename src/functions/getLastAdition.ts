import size, { isEmpty } from "../utils/validations";

export const getLastAddition = ({
  habitAdditions = [],
}: {
  habitAdditions: number[];
}): number => {
  if (isEmpty(habitAdditions)) return 0;

  const additions: number[] = habitAdditions ?? [];
  const additionsSize = size(additions);
  const lastAdditionIndex: number = additionsSize > 1 ? additionsSize - 1 : 0;

  return additions[lastAdditionIndex];
};
