import * as React from 'react';

/** Headline metric block (marketing hero proof stats). */
export interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  /** Render light for dark backgrounds. @default false */
  onDark?: boolean;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
