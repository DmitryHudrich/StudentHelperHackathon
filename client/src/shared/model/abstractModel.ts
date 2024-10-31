import { action, computed, makeObservable, observable, toJS } from "mobx";
import { clone, equals } from "ramda";

import type { BaseModel } from "./interfaces";

export class Model<TYPE extends object> implements BaseModel<TYPE> {
  public readonly initialState: TYPE;

  @observable
  private _state: TYPE;

  constructor(initialValues: TYPE) {
    makeObservable(this);
    this._state = clone(initialValues);
    this.initialState = clone(initialValues);
  }

  @computed
  public get state(): TYPE {
    return this._state;
  }

  @action.bound
  public set<KEY extends keyof TYPE>(fieldName: KEY, value: TYPE[KEY]): void {
    if (value === this._state[fieldName]) return;
    this._state[fieldName] = value;
  }

  public setFabric<KEY extends keyof TYPE>(fieldName: KEY): (value: TYPE[KEY]) => void {
    return (value: TYPE[KEY]) => this.set(fieldName, value);
  }

  @action.bound
  public mergeWith(payload: Partial<TYPE>): void {
    this._state = Object.assign(this.snapshot(), payload);
  }

  @action.bound
  public clear(): void {
    if (equals(this._state, this.initialState)) return;
    this._state = clone(this.initialState);
  }

  public snapshot(): TYPE {
    return toJS(this._state);
  }
}
