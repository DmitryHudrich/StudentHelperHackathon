/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UniversityContact } from "./UniversityContact";
export type University = {
  id?: number;
  name: string | null;
  address: string | null;
  information: string | null;
  image: string | null;
  contacts?: Array<UniversityContact> | null;
};
