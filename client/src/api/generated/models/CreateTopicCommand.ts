/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TopicContact } from "./TopicContact";
export type CreateTopicCommand = {
  title: string | null;
  image: string | null;
  content: string | null;
  branchId: number;
  userId: number;
  contacts?: Array<TopicContact> | null;
};
