import { InputProps } from "../../types/generalTypes";

function BottomLineInput(props: InputProps) {
  return (
    <input {...props} class={"border-b-2 border-black outline-none text-2xl"} />
  );
}

export default BottomLineInput;
