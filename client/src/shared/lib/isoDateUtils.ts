import { isString } from "@worksolutions/utils";

export const ISODatePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;

export const isIsoDate = (value: unknown): value is ISO => isString(value) && ISODatePattern.test(value);
