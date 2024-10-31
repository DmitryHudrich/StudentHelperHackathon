/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contact } from "./Contact";
export type UpdateUniversityCommand = {
  id?: number;
  name: string | null;
  mainAddress: string | null;
  contacts: Array<Contact> | null;
  information: string | null;
  image: string | null;
};
