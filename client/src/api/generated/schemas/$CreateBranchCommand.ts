/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateBranchCommand = {
  properties: {
    name: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    address: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    information: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    image: {
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
