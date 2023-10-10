import { JSX } from "preact/jsx-runtime";

function BottomLineInput(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} class={"border-b-2 border-black outline-none text-2xl"} />
  );
}

export default BottomLineInput;
