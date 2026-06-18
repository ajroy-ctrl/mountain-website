import * as React from 'react';

/** Square icon-only button for toolbars and table rows. */
export interface IconButtonProps {
  children: React.ReactNode;
  variant?: 'secondary' | 'ghost' | 'primary' | 'danger';
  size?: 'sm' | 'md';
  /** Accessible label (also the tooltip). */
  label?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
