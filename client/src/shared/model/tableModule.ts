import { action, computed, makeObservable, observable } from "mobx";

import type { FilterParams, PaginationParams, SortingParams } from "./additionalRequestParams";
import type { Pagination, Sorting, TableDto } from "./interfaces";

export abstract class TableModule<
  T extends object,
  F extends object = Record<string, never>,
  S extends string = never,
> {
  public abstract readonly filter: FilterParams<F>;
  public abstract readonly sorting: SortingParams<S>;
  public abstract readonly pagination: PaginationParams;

  @observable
  private _state: TableDto<T> = { rows: [], totalCount: 0 };

  constructor() {
    makeObservable(this);
  }

  @computed
  public get rows() {
    return this._state.rows;
  }

  @computed
  public get totalCount() {
    return this._state.totalCount;
  }

  public get queryParams(): Pagination & F & Sorting<S> {
    return {
      ...this.pagination.snapshot(),
      ...this.filterAndSortingParams,
    };
  }

  public get filterAndSortingParams(): F & Sorting<S> {
    return {
      ...this.filter.snapshot(),
      ...this.sorting.snapshot(),
    };
  }

  @computed
  private get _isEndReached(): boolean {
    return this._state.totalCount <= this._state.rows.length;
  }

  public clearState(): void {
    this._setState({ rows: [], totalCount: 0 });
  }

  public async load(): Promise<void> {
    const table = await this._getData(this.queryParams);
    this._setState(table);
  }

  public loadAndOverwrite = async (): Promise<void> => {
    this.pagination.resetPage();
    await this.load();
  };

  public async loadNextPage(): Promise<void> {
    if (this._isEndReached) return;

    this.pagination.nextPage();

    const table = await this._getData(this.queryParams);
    this._mergeData(table);
  }

  protected abstract _getData(additionalQueryParams: Pagination & F & Sorting<S>): Promise<TableDto<T>>;

  @action
  protected _setState(state: TableDto<T>) {
    this._state = state;
  }

  @action
  protected _mergeData({ rows, totalCount }: TableDto<T>) {
    this._state = { rows: [...this._state.rows, ...rows], totalCount };
  }
}
