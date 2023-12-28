export const ColorCodeBorderStyles = {
  blue: 'text-blue-400 border-blue-400',
  red: 'text-red-400 border-red-400',
  green: 'text-green-400 border-green-400',
} as const satisfies Record<string, string>;

export const ColorCodeBGStyles = {
  blue: ' bg-blue-400 border-blue-400',
  red: 'bg-red-400 border-red-400',
  green: 'bg-green-400 border-green-400',
} as const satisfies Record<string, string>;
