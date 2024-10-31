/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UniversityContact = {
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
    university: {
      type: "University",
      isRequired: true,
    },
  },
} as const;
