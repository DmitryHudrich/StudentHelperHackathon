import { Inject, Service } from "typedi";

import { AuthApi, type LoginDto, type RegisterDto } from "entities/auth";
import { UserDetailsService } from "entities/user";

import { CookiesStore } from "shared/model/services";

@Service()
export class AuthService {
  @Inject()
  private readonly _api!: AuthApi;

  @Inject()
  private readonly _userDetailsService!: UserDetailsService;

  @Inject()
  private readonly _cookiesStore!: CookiesStore;

  public async login(body: LoginDto): Promise<void> {
    const token = await this._api.loginRequest({ body });
    this._cookiesStore.set("token", `Bearer ${token.accessToken}`, { secure: true, expires: 365 });
  }

  public async register(body: RegisterDto): Promise<void> {
    await this._api.registerRequest({ body });
  }
  public logout(): void {
    this._cookiesStore.remove("token");
    this._userDetailsService.logout();
  }
}
