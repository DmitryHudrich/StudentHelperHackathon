import { isNotNil } from "@worksolutions/utils";
import type { History } from "history";
import qs from "query-string";
import { isNil } from "ramda";

import type { BaseModel } from "./interfaces";

export class ModelSyncWithUrl<TYPE extends object> implements BaseModel<TYPE> {
  public readonly initialState: TYPE = this._model.initialState;

  constructor(
    private readonly _urlSearchParamNames: (keyof TYPE)[],
    private readonly _browserHistory: History,
    private readonly _model: BaseModel<TYPE>,
  ) {
    this._syncModelStateAndUrlSearchParams();
  }

  public get state(): TYPE {
    return this._model.state;
  }

  public set<KEY extends keyof TYPE>(fieldName: KEY, value: TYPE[KEY]): void {
    const url = new URL(document.location.href);

    this._model.set(fieldName, value);

    this._setUrlSearchParam(url, { fieldName, value });
    this._browserHistory.replace({ search: url.search });
  }

  public snapshot(): TYPE {
    return this._model.snapshot();
  }

  public setFabric<KEY extends keyof TYPE>(fieldName: KEY): (value: TYPE[KEY]) => void {
    return (value: TYPE[KEY]) => this.set(fieldName, value);
  }

  public mergeWith(payload: Partial<TYPE>): void {
    this._model.mergeWith(payload);
  }

  public clear(): void {
    this._model.clear();
  }

  // TODO add params decoding
  private _syncModelStateAndUrlSearchParams<KEY extends keyof TYPE>(): void {
    const url = new URL(document.location.href);

    const searchParams = qs.parse(url.search, { parseBooleans: true }) as Record<KEY, TYPE[KEY]>;

    for (const key in searchParams) {
      if (!this._urlSearchParamNames.includes(key)) continue;
      this._model.set<KEY>(key, searchParams[key]);
    }

    this._urlSearchParamNames.forEach((fieldName) => {
      this._setUrlSearchParam(url, { fieldName, value: this._model.state[fieldName] });
    });

    this._browserHistory.replace({ pathname: url.pathname, search: url.search });
  }

  private _setUrlSearchParam<KEY extends keyof TYPE>(url: URL, param: { fieldName: KEY; value: TYPE[KEY] }): void {
    const paramName = String(param.fieldName);
    const paramValue = String(param.value);

    if (isNotNil(param.value) && url.searchParams.has(paramName)) url.searchParams.set(paramName, paramValue);
    if (isNotNil(param.value) && !url.searchParams.has(paramName)) url.searchParams.append(paramName, paramValue);
    if (isNil(param.value)) url.searchParams.delete(paramName);
  }
}
