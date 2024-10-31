/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TwoFactorRequest = {
  properties: {
    enable: {
      type: "boolean",
      isNullable: true,
    },
    twoFactorCode: {
      type: "string",
      isNullable: true,
    },
    resetSharedKey: {
      type: "boolean",
    },
    resetRecoveryCodes: {
      type: "boolean",
    },
    forgetMachine: {
      type: "boolean",
    },
  },
} as const;
