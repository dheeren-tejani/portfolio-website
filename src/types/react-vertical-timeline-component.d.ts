declare module 'react-vertical-timeline-component' {
  import { ReactNode } from 'react';
  
  export interface VerticalTimelineProps {
    animate?: boolean;
    layout?: '1-column' | '2-columns';
    className?: string;
    children?: ReactNode;
  }

  export interface VerticalTimelineElementProps {
    id?: string;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string | ReactNode;
    dateClassName?: string;
    iconStyle?: React.CSSProperties;
    iconOnClick?: () => void;
    icon?: ReactNode;
    iconClassName?: string;
    position?: 'left' | 'right';
    style?: React.CSSProperties;
    textClassName?: string;
    visible?: boolean;
    children?: ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
