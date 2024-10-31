import { Inject, Service } from "typedi";

import { type CreateThemeDto, ThemeApi } from "entities/theme";

@Service()
export class CreateThemeService {
  @Inject()
  private readonly _api!: ThemeApi;

  public async createTheme(body: CreateThemeDto): Promise<void> {
    await this._api.createTheme({ body });
  }
}
