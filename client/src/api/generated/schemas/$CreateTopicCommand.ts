/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateTopicCommand = {
  properties: {
    title: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    image: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    content: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    branchId: {
      type: "number",
      isRequired: true,
      format: "int32",
    },
    userId: {
      type: "number",
      isRequired: true,
      format: "int32",
    },
    contacts: {
      type: "array",
      contains: {
        type: "TopicContact",
      },
      isNullable: true,
    },
  },
} as const;
