import { assoc, pipe } from "ramda";

import type { Pagination, Sorting } from "shared/model/interfaces";

export const encodeSorting = ({ orderBy, isDescendingOrder, ...params }: Pagination & Sorting<string>) =>
  pipe(assoc("sort", orderBy), assoc("by", isDescendingOrder ? "desc" : "asc"))(params);

export const encodePagination = ({ pageSize, pageIndex, ...params }: Pagination & Sorting<string>) =>
  pipe(assoc("page", pageIndex), assoc("count", pageSize))(params);
