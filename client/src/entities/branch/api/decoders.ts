import Decoder, { array, field, number, string, succeed } from "jsonous";

import { contactsListDecoder } from "entities/contact/@x";
import { themesListDecoder } from "entities/theme/@x";

import type { Branch } from "../interfaces";

export const branchDecoder: Decoder<Branch> = succeed({})
  .assign("id", field("id", number))
  .assign("name", field("name", string))
  .assign("address", field("address", string))
  .assign("info", field("information", string))
  .assign("image", field("image", string))
  .assign("themes", field("topics", themesListDecoder))
  .assign("contacts", field("contacts", contactsListDecoder));

export const branchesListDecoder: Decoder<Branch[]> = array(branchDecoder);
