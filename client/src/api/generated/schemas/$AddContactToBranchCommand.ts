/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AddContactToBranchCommand = {
  properties: {
    branchId: {
      type: "number",
      isRequired: true,
      format: "int32",
    },
    name: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    content: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
  },
} as const;
