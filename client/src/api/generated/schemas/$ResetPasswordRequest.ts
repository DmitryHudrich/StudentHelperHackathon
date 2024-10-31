/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ResetPasswordRequest = {
  properties: {
    email: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    resetCode: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    newPassword: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
  },
} as const;
