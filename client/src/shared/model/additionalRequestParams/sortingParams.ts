import { computed } from "mobx";

import { Model } from "../abstractModel";
import type { Sorting, SortingModel } from "../interfaces";

export class SortingParams<S extends string> extends Model<Sorting<S>> implements SortingModel<S> {
  constructor(
    config: Sorting<S> = {
      orderBy: undefined,
      isDescendingOrder: undefined,
    },
  ) {
    super(config);
  }

  @computed
  public get enabled(): boolean {
    return Boolean(this.state.isDescendingOrder && this.state.orderBy);
  }

  public setParams(orderBy = this.state.orderBy, isDescendingOrder = this.state.isDescendingOrder): void {
    this.set("orderBy", orderBy);
    this.set("isDescendingOrder", isDescendingOrder);
  }

  public turnOff(): void {
    this.set("isDescendingOrder", undefined);
    this.set("orderBy", undefined);
  }

  public turnOn(orderBy: S, isDescendingOrder: boolean): void {
    this.setParams(orderBy, isDescendingOrder);
  }
}
