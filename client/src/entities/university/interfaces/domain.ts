import type { Branch } from "entities/branch/@x";
import type { Contact } from "entities/contact/@x";

import type { UniqueEntity } from "shared/model/interfaces";

export interface University extends UniqueEntity {
  name: string;
  address: string;
  info: string;
  contacts: Contact[];
  image: Link;
  branches: Branch[];
}
