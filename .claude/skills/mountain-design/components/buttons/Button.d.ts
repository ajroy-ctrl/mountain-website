import * as React from 'react';

/**
 * Primary button for Mountain Group — royal-blue actions on light and dark surfaces.
 *
 * @startingPoint section="Core" subtitle="Buttons in every variant & size" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline-dark';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded (marketing CTAs / badges). @default false */
  pill?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
