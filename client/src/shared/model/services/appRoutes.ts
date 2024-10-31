export class AppRoutes {
  public static getHomeUrl = () => "/";

  public static getProfileUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}profile`;

  public static getAuthUrl = () => "/auth";

  public static getRegisterUrl = () => "/register";

  public static getUniversityDetailsUrl = (withPrefix: boolean = false, uId?: number) => {
    return `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}university/${uId ?? ":universityId"}`;
  };

  public static getBranchDetailsUrl = (
    withPrefix: boolean = false,
    { universityId, branchId }: { universityId?: number; branchId?: number } = {},
  ) => {
    return `${this._calculatePrefix(this.getUniversityDetailsUrl(true, universityId), withPrefix)}branch/${branchId ?? ":branchId"}`;
  };

  public static getThemeDetailsUrl = (
    withPrefix: boolean = false,
    { universityId, branchId, themeId }: { universityId?: number; branchId?: number; themeId?: number } = {},
  ) => {
    return `${this._calculatePrefix(this.getBranchDetailsUrl(true, { universityId, branchId }), withPrefix)}theme/${themeId ?? ":themeId"}`;
  };

  public static getCreateThemeUrl = (
    withPrefix: boolean = false,
    { universityId, branchId }: { universityId?: number; branchId?: number } = {},
  ) =>
    `${this._calculatePrefix(this.getBranchDetailsUrl(true, { universityId, branchId }), withPrefix)}theme/create    `;

  private static readonly _calculatePrefix = (prefix: string, withPrefix: boolean) =>
    withPrefix ? prefix + "/" : prefix;
}
