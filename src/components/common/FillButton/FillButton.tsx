import { ColorCodeBGStyles } from "@/constants/ColorCode";
import { SizeStyles } from "@/constants/Size";

type FillButtonProps = {
  text: string;
  size: keyof typeof SizeStyles;
  color: keyof typeof ColorCodeBGStyles
  onClick?: () => void;
}

export const FillButton = (props: FillButtonProps) => {
  const { text, size, color, onClick } = props;

  return (
    <button className={`
      inline-flex w-full rounded-xl border-2  font-kanit text-white
      ${[SizeStyles[size], ColorCodeBGStyles[color]].join(" ")}
    `}
      onClick={onClick}
    >
      {text}

    </button >
  );
};