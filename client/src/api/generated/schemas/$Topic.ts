/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Topic = {
  properties: {
    id: {
      type: "number",
      format: "int32",
    },
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
    branch: {
      type: "Branch",
      isRequired: true,
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
