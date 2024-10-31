import type { UniqueEntity } from "shared/model/interfaces";

export interface Contact extends UniqueEntity {
  name: string;
  content: string;
}
