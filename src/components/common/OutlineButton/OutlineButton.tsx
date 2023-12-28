import { ColorCodeBorderStyles } from "@/constants/ColorCode";
import { SizeStyles } from "@/constants/Size";

type OutlineButtonProps = {
  text: string;
  size: keyof typeof SizeStyles;
  color: keyof typeof ColorCodeBorderStyles
  onClick?: () => void;
}

export const OutlineButton = (props: OutlineButtonProps) => {
  const { text, size, color, onClick } = props;

  return (
    <button className={`
      inline-flex w-full rounded-xl border-2 font-kanit
      ${[SizeStyles[size], ColorCodeBorderStyles[color]].join(" ")}
    `}
      onClick={onClick}>
      {text}

    </button >
  );

};