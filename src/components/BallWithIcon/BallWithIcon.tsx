import {ComponentChildren} from "preact";

function BallWithIcon({
                          Icon,
                          // colorBorder,
                          onClick = () => {
                          },
                          disabled,
                      }: {
    Icon: ComponentChildren;
    // colorBorder?: string;
    onClick?: () => void;
    disabled?: boolean;
}) {
    return (
        <div
            class={
                " cursor-pointer rounded-full w-14 h-14 flex items-center justify-center"
            }
            style={{
                // borderColor: colorBorder,
            }}
            onClick={() => {
                if (!disabled) onClick();
            }}
        >
            {Icon}
        </div>
    );
}

export default BallWithIcon;
