import { BsCheck } from "react-icons/bs";
import { getTextColor } from "../../utils/textColorHelper";

function CheckBox({ value, color }: { value: boolean; color?: string }) {
  return (
    <div
      class={
        "border-2 border-black h-5 w-5 rounded flex items-center justify-center"
      }
      style={{
        background: value ? color : "",
      }}
    >
      {value && <BsCheck size="100%" fill={getTextColor(color)} />}
    </div>
  );
}

export default CheckBox;
