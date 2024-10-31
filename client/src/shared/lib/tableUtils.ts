import type { TablePaginationConfig, TableProps } from "antd";
import { equals, isNil } from "ramda";

import type { PaginationParams } from "shared/model/additionalRequestParams";
import type { UniqueEntity } from "shared/model/interfaces";

import type { TableModule } from "../model/tableModule";

export function convertDataToTableDataSource<D extends UniqueEntity>(data: D[]): (D & { key: number })[] {
  return data.map((raw) => ({ ...raw, key: raw.id }));
}

export function createPaginationOnChangeHandlerFromPaginationParams(
  pagination: PaginationParams,
): TablePaginationConfig["onChange"] {
  return (page: number, pageSize: number) => {
    pagination.setPageIndex(page);
    pagination.setPageSize(pageSize);
  };
}

export function createTableOnChangeHandlerFromTableModule<
  T extends object,
  F extends object = Record<string, unknown>,
  S extends string = never,
>(tableModule: TableModule<T, F, S>): TableProps<T>["onChange"] {
  return (pagination, filters, sorter) => {
    if (pagination.current) tableModule.pagination.setPageIndex(pagination.current);
    if (pagination.pageSize) tableModule.pagination.setPageSize(pagination.pageSize);

    for (const key in filters) {
      if (equals(tableModule.filter.state[key as keyof F], filters[key] as F[keyof F])) continue;
      if (isNil(filters[key]) && isNil(tableModule.filter.state[key as keyof F])) continue;
      tableModule.filter.set(key as keyof F, filters[key] as F[keyof F]);
    }

    if (!Array.isArray(sorter)) {
      if (sorter.field && sorter.order) {
        tableModule.sorting.setParams(sorter.field as never, sorter.order === "descend");
      } else {
        tableModule.sorting.clear();
      }
    }
  };
}
