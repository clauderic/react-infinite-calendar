// Type definitions for react-infinite-calendar 2.3
// Project: https://github.com/clauderic/react-infinite-calendar
// Definitions by: Christian Chown <https://github.com/christianchown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
declare module 'react-infinite-calendar' {
  import * as React from 'react';

  export interface SelectParams {
    start: Date;
    end: Date;
    eventType: number;
  }

  export interface CalendarProps {
    Component?: React.Component;
    selected?: Date | boolean | {start: Date, end: Date};
    width?: number | 'auto';
    height?: number | 'auto';
    min?: Date;
    max?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabledDays?: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>;
    disabledDates?: Date[];
    display?: 'days' | 'years';
    displayOptions?: {
      hideYearsOnSelect?: boolean;
      layout?: 'portrait' | 'landscape';
      overscanMonthCount?: number;
      shouldHeaderAnimate?: boolean;
      showHeader?: boolean;
      showMonthsForYears?: boolean;
      showOverlay?: boolean;
      showTodayHelper?: boolean;
      showWeekdays?: boolean;
      todayHelperRowOffset?: number;
      showLabelsBetweenMonths?: boolean;
    };
    locale?: {
      blank?: string;
      headerFormat?: string;
      todayLabel?: {
        long: string;
      };
      weekdays?: string[];
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    };
    theme?: {
      accentColor?: string;
      floatingNav?: {
        background?: string;
        chevron?: string;
        color?: string;
      };
      headerColor?: string;
      selectionColor?: string;
      textColor?: {
        active?: string;
        default?: string;
      };
      todayColor?: string;
      weekdayColor?: string;
    };
    className?: string;
    onSelect?: (selectInfo: SelectParams) => void;
    onScroll?: (scrollTop: number) => void;
    onScrollEnd?: (scrollTop: number) => void;
    rowHeight?: number;
    autoFocus?: boolean;
    tabIndex?: number;
  }
  interface DefaultCalendar extends React.ChildContextProvider<CalendarProps> {}
  export class DefaultCalendar extends React.Component<CalendarProps> {}
  interface WithRangeCalendar extends React.ChildContextProvider<CalendarProps> {}
  export class  WithRangeCalendar extends React.Component<CalendarProps> {}
  export function withRange(component: DefaultCalendar): WithRangeCalendar;
  export default DefaultCalendar;
  export {default as Calendar};
}
