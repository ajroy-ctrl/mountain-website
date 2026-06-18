import * as React from 'react';

/** Initials or image avatar; periwinkle fill by default (portal "MR" mark). */
export interface AvatarProps {
  name?: string;
  src?: string;
  /** Diameter px. @default 40 */
  size?: number;
  /** Rounded-square instead of circle. @default false */
  square?: boolean;
  /** Background fill when no image. @default periwinkle */
  color?: string;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
