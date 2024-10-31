import type { Contact } from "entities/contact/@x";
import type { Theme } from "entities/theme/@x";

import type { UniqueEntity } from "shared/model/interfaces";

export interface Branch extends UniqueEntity {
  name: string;
  address: string;
  info: string;
  image: string;
  contacts: Contact[];
  themes: Theme[];
}
