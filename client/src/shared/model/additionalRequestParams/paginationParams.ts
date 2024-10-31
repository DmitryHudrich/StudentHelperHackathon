import { Model } from "../abstractModel";
import type { Pagination, PaginationModel } from "../interfaces";

export class PaginationParams extends Model<Pagination> implements PaginationModel {
  public setPageIndex(pageIndex: number) {
    this.set("pageIndex", pageIndex);
  }

  public setPageSize(pageSize: number) {
    this.set("pageSize", pageSize);
  }

  public nextPage = () => {
    this.setPageIndex(this.state.pageIndex + 1);
  };

  public prevPage = () => {
    if (this.state.pageIndex <= 1) this.resetPage();
    this.setPageIndex(this.state.pageIndex - 1);
  };

  public resetPage = () => {
    this.setPageIndex(1);
  };
}
