/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TwoFactorResponse = {
  properties: {
    sharedKey: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    recoveryCodesLeft: {
      type: "number",
      isRequired: true,
      format: "int32",
    },
    recoveryCodes: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
    isTwoFactorEnabled: {
      type: "boolean",
      isRequired: true,
    },
    isMachineRemembered: {
      type: "boolean",
      isRequired: true,
    },
  },
} as const;
