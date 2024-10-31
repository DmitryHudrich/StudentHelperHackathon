import { Inject, Service } from "typedi";

import { UniversitiesApi } from "../../api";
import type { University } from "../../interfaces";

@Service()
export class UniversityDetailsService {
  private _universityDetails: University | null = null;

  @Inject()
  private readonly _api!: UniversitiesApi;

  public get universityDetails() {
    return this._universityDetails;
  }

  public async loadUniversityDetails(id: number): Promise<void> {
    this._universityDetails = await this._api.getUniversity({ additionalQueryParams: { id } });
  }
}
