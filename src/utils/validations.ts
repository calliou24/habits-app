export const isEmpty = (toValidate: any) => {
  let isValueEmpty = false;

  if (toValidate === null || toValidate === undefined) isValueEmpty = true;
  else if (typeof toValidate === "string" && toValidate?.trim() === "")
    isValueEmpty = true;
  else if (Array.isArray(toValidate) && toValidate?.length === 0)
    isValueEmpty = true;
  else if (
    typeof toValidate === "object" &&
    Object.keys(toValidate)?.length === 0
  )
    isValueEmpty = true;

  return isValueEmpty;
};

export default function size(toValidate: any) {
  if (typeof toValidate === "number") return 0;
  if (
    typeof toValidate === "object" &&
    JSON.stringify(toValidate)?.trim()?.charAt(0) === "{"
  )
    return Object.keys(toValidate)?.length;

  return toValidate?.length;
}
