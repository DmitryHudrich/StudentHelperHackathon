import type { Pagination, Sorting } from "./table";

export interface BaseModel<TYPE extends object> {
  readonly state: TYPE;
  readonly initialState: TYPE;

  set: <KEY extends keyof TYPE>(fieldName: KEY, value: TYPE[KEY]) => void;

  setFabric: <KEY extends keyof TYPE>(fieldName: KEY) => (value: TYPE[KEY]) => void;

  mergeWith: (payload: Partial<TYPE>) => void;

  clear: () => void;

  snapshot: () => TYPE;
}

export type FilterModel<TYPE extends object> = BaseModel<TYPE>;

export interface PaginationModel extends BaseModel<Pagination> {
  setPageIndex: (pageIndex: number) => void;

  setPageSize: (pageSize: number) => void;

  nextPage: () => void;

  prevPage: () => void;

  resetPage: () => void;
}

export interface SortingModel<S extends string> extends BaseModel<Sorting<S>> {
  enabled: boolean;

  setParams: (orderBy?: S, isDescendingOrder?: boolean) => void;

  turnOff: () => void;

  turnOn: (orderBy: S, isDescendingOrder: boolean) => void;
}
