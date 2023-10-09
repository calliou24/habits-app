import { InputProps } from "../../types/generalTypes";

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      class="rounded-sm w-full py-3 px-4 text-gray-900 focus:outline-none bg-gray-100"
    />
  );
}
