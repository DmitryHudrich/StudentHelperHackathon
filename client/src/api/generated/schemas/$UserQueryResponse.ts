/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserQueryResponse = {
  properties: {
    userId: {
      type: "string",
      isNullable: true,
    },
    age: {
      type: "number",
      format: "int32",
    },
    fullName: {
      type: "string",
      isNullable: true,
    },
    email: {
      type: "string",
      isNullable: true,
    },
    university: {
      type: "University",
    },
  },
} as const;
