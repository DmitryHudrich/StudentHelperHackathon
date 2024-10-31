import { OpenAPI, StudentHelperWebOpenApi } from "api";
import { Inject, Service } from "typedi";

import { applyDecoder } from "shared/lib/applyDecoder";
import { CookiesStore } from "shared/model/services";

import type { User } from "../interfaces";

import { userDecoder } from "./decoders";

@Service()
export class UsersApi {
  @Inject()
  private readonly _cookiesStore!: CookiesStore;

  public async getUserDetails(): Promise<User> {
    const token = this._cookiesStore.get("token");
    if (!token) {
      throw new Error("No token found");
    }
    OpenAPI.TOKEN = token;
    return StudentHelperWebOpenApi.getProfile().then(applyDecoder(userDecoder));
  }
}