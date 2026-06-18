import * as React from 'react';

/** Circular 1–10 rating ring; color follows value (red ≤4, amber 5–7, green 8+). */
export interface RatingBadgeProps {
  value?: number | string;
  /** Diameter px. @default 32 */
  size?: number;
  style?: React.CSSProperties;
}

export function RatingBadge(props: RatingBadgeProps): JSX.Element;
