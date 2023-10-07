import { ComponentChildren } from "preact";

function BallWithIcon({
  Icon,
  colorBorder,
  onClick,
}: {
  Icon: ComponentChildren;
  colorBorder?: string;
  onClick?: () => void;
}) {
  return (
    <div
      class={
        " cursor-pointer rounded-full w-14 h-14 flex items-center justify-center border-solid border border-black"
      }
      style={{
        borderColor: colorBorder,
      }}
      onClick={onClick}
    >
      {Icon}
    </div>
  );
}

export default BallWithIcon;
