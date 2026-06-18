import * as React from 'react';

/**
 * Screening-status pill (PASS / FAIL / PENDING / SENT) from the Recruiter Portal.
 * @startingPoint section="Core" subtitle="Status pills & rating badges" viewport="700x160"
 */
export interface StatusPillProps {
  status?: 'pass' | 'fail' | 'warn' | 'sent';
  /** Override the auto label. */
  children?: React.ReactNode;
  /** Leading status dot. @default true */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function StatusPill(props: StatusPillProps): JSX.Element;
