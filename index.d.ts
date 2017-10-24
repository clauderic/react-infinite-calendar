import * as React from "react";

export interface CalendarProps {

    /**
     * Value of the date that appears to be selected. Set to false if you don't wish to have a date initially selected.
     *
     * @default new Date()
     */
    selected?: Date | Date[] | false | CalendarDateRanger;

    /**
     * Width of the calendar, in pixels
     *
     * @default 400
     */
    width?: number;

    /**
     * Height of the calendar, in pixels
     *
     * @default 600
     */
    height?: number;

    /**
     * The minimum date that is selectable.
     *
     * @default new Date(1980, 0, 1)
     */
    minDate?: Date;

    /**
     * The maximum date that is selectable.
     *
     * @default new Date(2050, 11, 31)
     */
    maxDate?: Date;

    /**
     * Array of days of the week that should be disabled.
     *
     * @default []
     */
    disabledDays?: DayOfWeek[]

    /**
     * Array of dates that should be disabled.
     *
     * @default[]
     */
    disabledDates?: Date[];

    /**
     * Whether to display the years or days view.
     *
     * @default "days"
     */
    display?: "years" | "days";

    displayOptions?: CalendarDisplayOptions;

    locale?: CalendarLocale;

    theme?: CalendarTheme;

    /**
     * Optional CSS class name to append to the root InfiniteCalendar element.
     */
    className?: string;

    /**
     * Height of each row in the calendar (each week is considered a row)
     *
     * @default 56
     */
    rowHeight?: number;

    /**
     * Whether the Calendar root should be auto-focused when it mounts.
     *
     * This is useful when keyboardSupport is enabled (the calendar must be focused to listen for keyboard events)
     *
     * @default true
     */
    autoFocus?: boolean;

    /**
     * Tab-index of the calendar
     *
     * @default 1
     */
    tabIndex?: number;

    /**
     * @default withDateSelection(Calendar)
     */
    Component?: Calendar;


    /**
     * Callback invoked after beforeSelect() returns true, but before the state of the calendar updates
     */
    onSelect?(value: Date | Date[] | CalendarDateRanger): void;

    /**
     * Callback invoked when the scroll offset changes
     */
    onScroll?(scrollTop: number): void;

    /**
     * Callback invoked 150ms after the last onScroll event is triggered.
     */
    onScrollEnd?(scrollTop: number): void;
}

/**
 * Calendar with default settings
 */
export default Calendar;

export class Calendar extends React.PureComponent<CalendarProps, {}> {
}

export function withDateSelection(component: Calendar): Calendar;

export function withKeyboardSupport(component: Calendar): Calendar;

export function withMultipleDates(component: Calendar): Calendar;

export function defaultMultipleDateInterpolatio(component: Calendar): Calendar;

export function withRange(component: Calendar): Calendar;

export enum EVENT_TYPE {
    START = 1,
    HOVER = 2,
    END = 3,
}

export enum DayOfWeek {MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY}

export interface CalendarDisplayOptions {

    /**
     * Layout of the calendar.
     *
     * @default portrait
     */
    layout?: "portrait" | "landscape";

    /**
     * Show/hide the header
     *
     * @default true
     */
    showHeader?: boolean;

    /**
     * Enable/Disable the header animation
     *
     * @default true
     */
    shouldHeaderAnimate?: boolean;

    /**
     * Show/hide the month overlay when scrolling
     *
     * @default true
     */
    showOverlay?: boolean;

    /**
     * Show/hide the floating back to Today helper
     *
     * @default true
     */
    showTodayHelper?: boolean;

    /**
     * Show/hide the weekdays in the header
     *
     * @default true
     */
    showWeekdays?: boolean;

    /**
     * Whether to automatically hide the years view on select.
     *
     * @default true
     */
    hideYearsOnSelect?: boolean;

    /**
     * Number of months to render above/below the visible months.
     *
     * Tweaking this can help reduce flickering during scrolling on certain browers/devices.
     *
     * @default 4
     */
    overscanMonthCount?: number;

    /**
     * This controls the number of rows to scroll past before the Today helper appears
     *
     * @default 4
     */
    todayHelperRowOffset?: number;
}

export interface CalendarLocale {

    /**
     * @example Select a date...
     */
    blank?: string;

    /**
     * @example ddd, MMM Do
     */
    headerFormat?: string;

    todayLabel?: {

        /**
         * @example Today
         */
        long?: string;
    },

    /**
     * @example ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     */
    weekdays?: string[];

    weekStartsOn?: DayOfWeek;
}

export interface CalendarTheme {
    accentColor?: string;
    floatingNav?: {
        background?: string;
        color?: string;
        chevron?: string;
    };
    headerColor?: string;
    selectionColor?: string;
    textColor?: {
        active?: string;
        default?: string;
    },
    todayColor?: string;
    weekdayColor?: string;
}

export interface CalendarDateRanger {
    from: Date;
    to: Date;
}
