import { Size } from '@/constants/Size';

type ButtonProps = {
  text: string;
  size: keyof typeof Size;
};

export const Button = (props: ButtonProps) => {
  const { text } = props;
  return <button className="inline-flex w-full rounded-xl border border-green-800 px-4 py-3 text-2xl">{text}</button>;
};
