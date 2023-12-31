import { ColorCodeBorderStyles } from 'src/constants/ColorCode';

type TipsProps = {
  text: string;
  color: keyof typeof ColorCodeBorderStyles;
};

export const Tips = (props: TipsProps) => {
  const { text, color } = props;
  return (
    <span
      className={
        'inline-flex w-auto items-center justify-center rounded-full border py-1 px-4 font-kanit text-xs ' +
        ColorCodeBorderStyles[color]
      }
    >
      {text}
    </span>
  );
};
