/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateProfileCommand = {
  properties: {
    userId: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    email: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    age: {
      type: "number",
      isRequired: true,
      isNullable: true,
      format: "int32",
    },
    fullName: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    universityId: {
      type: "number",
      isRequired: true,
      format: "int32",
    },
  },
} as const;
