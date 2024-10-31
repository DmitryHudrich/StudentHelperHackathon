/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BranchContact = {
  properties: {
    id: {
      type: "number",
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
    branch: {
      type: "Branch",
      isRequired: true,
    },
  },
} as const;
