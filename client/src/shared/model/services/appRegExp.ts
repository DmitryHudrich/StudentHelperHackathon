import { Service } from "typedi";

@Service()
export class AppRegExp {
  public static readonly ruPhoneRegExp: RegExp = /(\+7|8)(-|\s)?[0-9]{3}(-|\s)?[0-9]{3}(-|\s)?[0-9]{2}(-|\s)?[0-9]{2}/;
}
