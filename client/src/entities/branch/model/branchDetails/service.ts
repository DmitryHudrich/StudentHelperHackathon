import { Inject, Service } from "typedi";

import { BranchApi } from "../../api";
import type { Branch } from "../../interfaces";

@Service()
export class BranchDetailsService {
  private _branchDetails: Branch | null = null;

  @Inject()
  private readonly _api!: BranchApi;

  public get branchDetails() {
    return this._branchDetails;
  }

  public async loadBranchDetails(id: number): Promise<void> {
    this._branchDetails = await this._api.getBranchDetails({ urlParams: { id } });
  }
}
