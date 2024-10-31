/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchContact } from "./BranchContact";
import type { University } from "./University";
export type Branch = {
  id?: number;
  name: string | null;
  address: string | null;
  contacts?: Array<BranchContact> | null;
  information: string | null;
  image: string | null;
  university: University;
};
