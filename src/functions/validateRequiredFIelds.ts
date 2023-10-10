import { isEmpty } from "../utils/validations";

export const isSomeFieldEmpty = ({
  fields,
  toValidate,
}: {
  fields: string[];
  toValidate: any;
}): boolean => {
  if (typeof toValidate !== "object" || isEmpty(toValidate)) return false;
  const requiredFields: string[] = fields;

  return Object.entries(toValidate)?.some(
    ([key, value]) => requiredFields?.includes(key) && isEmpty(value)
  );
};
