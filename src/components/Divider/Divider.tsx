import { useContext } from "preact/compat";
import { HabitsContext } from "../../context/HabitsContext";
import { getTextColor } from "../../utils/textColorHelper";

export default function Divider() {
  const { habitToEdit } = useContext(HabitsContext);
  return (
    <div
      class={`border border-b-0 'border-black' w-full h-0`}
      style={{
        borderColor: getTextColor(habitToEdit?.color),
      }}
    />
  );
}
