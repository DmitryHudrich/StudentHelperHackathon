import Decoder, { field, string, succeed } from "jsonous";

import type { AuthenticationTokens } from "../interfaces";

export const authenticationTokensDecoder: Decoder<AuthenticationTokens> = succeed({})
  .assign("accessToken", field("accessToken", string))
  .assign("refreshToken", field("refreshToken", string));
