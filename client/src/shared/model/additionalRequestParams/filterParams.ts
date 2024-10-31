import { Model } from "../abstractModel";
import type { FilterModel } from "../interfaces";

export class FilterParams<TYPE extends object> extends Model<TYPE> implements FilterModel<TYPE> {}
