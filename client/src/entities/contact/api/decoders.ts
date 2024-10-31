import Decoder, { array, field, number, string, succeed } from "jsonous";

import type { Contact } from "../interfaces";

export const contactDecoder: Decoder<Contact> = succeed({})
  .assign("id", field("id", number))
  .assign("name", field("name", string))
  .assign("content", field("content", string));

export const contactsListDecoder: Decoder<Contact[]> = array(contactDecoder);
