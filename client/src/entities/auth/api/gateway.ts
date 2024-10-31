import { OpenAPI, StudentHelperWebOpenApi } from "api";
import { Inject, Service } from "typedi";

import { applyDecoder } from "shared/lib/applyDecoder";

import { CookiesStore } from "../../../shared/model/services";
import type { AuthenticationTokens, LoginRequest, RegisterRequest } from "../interfaces";

import { authenticationTokensDecoder } from "./decoders";

@Service()
export class AuthApi {
  @Inject()
  private readonly _cookiesStore!: CookiesStore;

  public async loginRequest({ body }: LoginRequest): Promise<AuthenticationTokens> {
    return StudentHelperWebOpenApi.postAuthLogin({
      useCookies: false,
      useSessionCookies: false,
      requestBody: body,
    }).then(applyDecoder(authenticationTokensDecoder));
  }
  public async registerRequest({ body }: RegisterRequest): Promise<void> {
    await StudentHelperWebOpenApi.postAuthRegister({ requestBody: body });
    const tokens = await this.loginRequest({ body });
    this._cookiesStore.set("token", tokens.accessToken);
    OpenAPI.TOKEN = tokens.accessToken;
    const user = await StudentHelperWebOpenApi.getProfile();
    if (!user.userId) throw new Error("user not found");
    await StudentHelperWebOpenApi.postProfile({
      requestBody: {
        userId: user.userId,
        age: body.age,
        fullName: body.fullName,
        email: body.email,
        universityId: body.universityId,
      },
    });
  }
}
