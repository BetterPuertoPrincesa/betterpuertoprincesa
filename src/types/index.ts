export type LanguageType =
  | 'en' // English
  | 'fil'; // Filipino (standardized Tagalog)

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  // Shows a small "important" badge next to the label.
  highlight?: boolean;
  // Draws a thin rule above this item in a dropdown, to split it into parts.
  dividerBefore?: boolean;
}
