import type { Contact } from "entities/contact";

export interface CreateThemeDto {
  title: string;
  content: string;
  contacts: Contact[];
  image: string;
  branchId: number;
  userId: number;
}
