import { JSX } from "preact/jsx-runtime";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      class="rounded-sm w-full py-3 px-4 text-gray-900 focus:outline-none bg-gray-100"
    />
  );
}
