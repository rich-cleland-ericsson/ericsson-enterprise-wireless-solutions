import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calcPosition(position: string) {
  const pos = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  return pos[position as keyof typeof pos] || 'text-left';
}

export function calcStyle(style: string) {
  const setStyle = {
    h1: 'text-3xl font-semi',
    h2: 'text-2xl font-semibold',
    h3: 'text-xl font-semibold',
    h4: 'text-md font-semibold',
    h5: 'text-sm font-semibold',
    h6: 'text-sm font-bold',
  };
  return setStyle[style as keyof typeof setStyle] || 'text-4xl font-semibold';
}
