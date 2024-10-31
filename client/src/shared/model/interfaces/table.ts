export interface Pagination {
  pageIndex: number;
  pageSize: number;
}

export interface Sorting<T extends string> {
  orderBy?: T;
  isDescendingOrder?: boolean;
}

export interface TableDto<T> {
  rows: T[];
  totalCount: number;
}
