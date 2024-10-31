/* eslint-disable @typescript-eslint/no-explicit-any */
export type Request<
  T extends {
    urlParams?: Record<string, any>;
    body?: unknown;
    additionalQueryParams?: Record<string, any>;
  },
> = {
  [K in keyof T]: T[K];
};

export type Endpoint<T = void, R = void> = (request: T) => Promise<R>;
