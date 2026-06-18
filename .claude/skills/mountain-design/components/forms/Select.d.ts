import * as React from 'react';

/** Styled native select for portal filter dropdowns. */
export interface SelectOption { value: string; label: string; }
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  options?: (SelectOption | string)[];
  size?: 'sm' | 'md';
}

export function Select(props: SelectProps): JSX.Element;
