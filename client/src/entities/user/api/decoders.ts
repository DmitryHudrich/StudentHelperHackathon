import Decoder, { field, number, string, succeed } from "jsonous";

import { universityDecoder } from "entities/university/@x";

import type { User } from "../interfaces";

export const userDecoder: Decoder<User> = succeed({})
  .assign("id", field("id", number))
  .assign("fullName", field("fullName", string))
  .assign("email", field("login", string))
  .assign("age", field("age", number))
  .assign("university", field("university", universityDecoder));
