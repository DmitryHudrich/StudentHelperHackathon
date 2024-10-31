/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Branch } from "./Branch";
import type { TopicContact } from "./TopicContact";
export type Topic = {
  id?: number;
  title: string | null;
  image: string | null;
  content: string | null;
  branch: Branch;
  userId: number;
  contacts?: Array<TopicContact> | null;
};
