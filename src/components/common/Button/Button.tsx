type ButtonProps = {
  text: string;
};

export const Button = (props: ButtonProps) => {
  const { text } = props;
  return <button className="inline-flex w-full rounded-xl border py-1 px-4">{text}</button>;
};
