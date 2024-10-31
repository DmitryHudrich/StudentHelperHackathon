/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoginRequest = {
  properties: {
    email: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    password: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    twoFactorCode: {
      type: "string",
      isNullable: true,
    },
    twoFactorRecoveryCode: {
      type: "string",
      isNullable: true,
    },
  },
} as const;
