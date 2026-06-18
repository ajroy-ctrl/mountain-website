import * as React from 'react';

/** Labelled text input — portal search, filter, and form fields. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  size?: 'sm' | 'md';
}

export function Input(props: InputProps): JSX.Element;
