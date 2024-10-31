/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Branch = {
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
    address: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    contacts: {
      type: "array",
      contains: {
        type: "BranchContact",
      },
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
    university: {
      type: "University",
      isRequired: true,
    },
  },
} as const;
