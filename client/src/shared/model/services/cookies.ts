import type { CookieAttributes } from "js-cookie";
import Cookies from "js-cookie";
import { Service } from "typedi";

@Service()
export class CookiesStore {
  public set(key: string, value: string, options?: CookieAttributes) {
    Cookies.set(key, value, options);
  }

  public get(key: string) {
    return Cookies.get(key);
  }

  public remove(key: string) {
    Cookies.remove(key);
  }
}
