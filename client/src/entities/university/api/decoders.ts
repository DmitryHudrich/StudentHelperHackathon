import Decoder, { array, field, number, string, succeed } from "jsonous";

import { branchesListDecoder } from "entities/branch/@x";
import { contactsListDecoder } from "entities/contact/@x";

import type { University } from "../interfaces";

export const universityDecoder: Decoder<University> = succeed({})
  .assign("id", field("id", number))
  .assign("name", field("name", string))
  .assign("info", field("information", string))
  .assign("address", field("address", string))
  .assign("image", field("image", string))
  .assign("contacts", field("contacts", contactsListDecoder))
  .assign("branches", field("branches", branchesListDecoder));

export const universitiesListDecoder: Decoder<University[]> = array(universityDecoder);
