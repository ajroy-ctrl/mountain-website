import * as React from 'react';

/** Rounded surface container for marketing and portal layouts. */
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'flat' | 'navy' | 'tint';
  /** Inner padding px. @default 24 */
  padding?: number;
  /** Lift + shadow on hover. @default false */
  hoverable?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
