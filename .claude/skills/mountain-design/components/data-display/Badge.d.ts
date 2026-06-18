import * as React from 'react';

/** Uppercase pill label — eyebrow tags, category chips. */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'blue' | 'navy' | 'grey' | 'lavender' | 'blue-on-dark';
  variant?: 'soft' | 'solid' | 'outline';
  /** Leading dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
