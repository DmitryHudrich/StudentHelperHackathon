import { DateTime, Duration, Zone } from "luxon";
import { pick } from "ramda";

export type {
  DateObjectUnits,
  DateTime,
  DateTimeUnit,
  DayNumbers,
  Duration,
  DurationLike,
  DurationLikeObject,
  DurationObjectUnits,
  DurationUnits,
  HourNumbers,
  LocaleOptions,
  MonthNumbers,
  QuarterNumbers,
  SecondNumbers,
  Zone,
} from "luxon";

export type DateTimeObject = DateTime;

export type DateTimeZone = Zone | string;

declare module "luxon" {
  interface TSSettings {
    throwOnInvalid: true;
  }
}

const KNOWN_FORMATTING_KEYS = [
  "DATE_SHORT",
  "DATE_MED",
  "DATE_MED_WITH_WEEKDAY",
  "DATE_FULL",
  "DATE_HUGE",
  "TIME_SIMPLE",
  "TIME_WITH_SECONDS",
  "TIME_WITH_SHORT_OFFSET",
  "TIME_WITH_LONG_OFFSET",
  "TIME_24_SIMPLE",
  "TIME_24_WITH_SECONDS",
  "TIME_24_WITH_SHORT_OFFSET",
  "TIME_24_WITH_LONG_OFFSET",
  "DATETIME_SHORT",
  "DATETIME_MED",
  "DATETIME_FULL",
  "DATETIME_HUGE",
  "DATETIME_SHORT_WITH_SECONDS",
  "DATETIME_MED_WITH_SECONDS",
  "DATETIME_FULL_WITH_SECONDS",
  "DATETIME_HUGE_WITH_SECONDS",
] as const;

export const DateTimeFormat = pick(KNOWN_FORMATTING_KEYS, DateTime);

/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/typedef */
export class SystemClock {
  public static UTCZone: DateTimeZone = "utc";
  public static LocalZone: DateTimeZone = "local";

  public static DateTime = DateTime;

  public static Duration = Duration;

  public static now(): DateTimeObject {
    return DateTime.now();
  }

  public static nowISO(): ISO {
    return SystemClock.now().setZone(SystemClock.UTCZone).toISO();
  }
}
