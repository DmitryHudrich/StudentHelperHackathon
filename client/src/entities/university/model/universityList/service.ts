import { Inject, Service } from "typedi";

import { UniversitiesApi } from "../../api";
import type { University } from "../../interfaces";

@Service()
export class UniversityListService {
  private _universities: University[] = [];

  @Inject()
  private readonly _universityApi!: UniversitiesApi;

  public get universityList() {
    return this._universities;
  }

  public async loadUniversityList(): Promise<void> {
    this._universities = await this._universityApi.getUniversities();
  }
}
