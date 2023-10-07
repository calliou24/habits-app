import { isEmpty } from "./validations";

export function getTextColor(backgroundColor: string | null | undefined) {
  if (!isEmpty(backgroundColor) && typeof backgroundColor === "string") {
    const r = parseInt(backgroundColor.slice(1, 3), 16);
    const g = parseInt(backgroundColor.slice(3, 5), 16);
    const b = parseInt(backgroundColor.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    if (brightness > 128) {
      return "#000000";
    } else {
      return "#FFFFFF";
    }
  }
}
