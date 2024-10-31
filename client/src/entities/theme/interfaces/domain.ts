import type { Contact } from "entities/contact/@x";
import type { User } from "entities/user/@x";

import type { UniqueEntity } from "shared/model/interfaces";

export interface Theme extends UniqueEntity {
  name: string;
  text: string;
  contacts: Contact[];
  image: Link;
  author: User;
}
