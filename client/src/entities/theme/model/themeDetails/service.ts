import { Inject, Service } from "typedi";

import { ThemeApi } from "../../api";
import type { Theme } from "../../interfaces";

@Service()
export class ThemeDetailsService {
  private _themeDetails: Theme | null = null;

  @Inject()
  private readonly _themeApi!: ThemeApi;

  public get themeDetails() {
    return this._themeDetails;
  }

  public async loadThemeDetails(id: number): Promise<void> {
    this._themeDetails = await this._themeApi.getThemeDetails({ urlParams: { id } });
  }
}
