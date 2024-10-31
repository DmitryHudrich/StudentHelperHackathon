/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AccessTokenResponse = {
  properties: {
    tokenType: {
      type: "string",
      isReadOnly: true,
      isNullable: true,
    },
    accessToken: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
    expiresIn: {
      type: "number",
      isRequired: true,
      format: "int64",
    },
    refreshToken: {
      type: "string",
      isRequired: true,
      isNullable: true,
    },
  },
} as const;
