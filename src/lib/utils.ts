import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isExternal = (href: string) => /^https?:\/\//.test(href);

// Label for the search shortcut handled in Navbar (Cmd+K on Apple devices, Ctrl+K elsewhere).
export const searchShortcutLabel =
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)
    ? '⌘K'
    : 'Ctrl+K';
