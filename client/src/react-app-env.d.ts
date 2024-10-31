/// <reference types="react-scripts" />

type Constructor<T> = { new (): T };

type Guid = number;
type ISO = string;
type Link = string;

type RequiredKeys<T> = {
  [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? never : K;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? K : never;
}[keyof T];
