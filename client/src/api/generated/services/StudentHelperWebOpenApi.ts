/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenResponse } from "../models/AccessTokenResponse";
import type { AddContactToBranchCommand } from "../models/AddContactToBranchCommand";
import type { Branch } from "../models/Branch";
import type { BranchContact } from "../models/BranchContact";
import type { CreateBranchCommand } from "../models/CreateBranchCommand";
import type { CreateTopicCommand } from "../models/CreateTopicCommand";
import type { CreateUniversityCommand } from "../models/CreateUniversityCommand";
import type { DeleteBranchCommand } from "../models/DeleteBranchCommand";
import type { DeleteTopicCommand } from "../models/DeleteTopicCommand";
import type { DeleteUniversityCommand } from "../models/DeleteUniversityCommand";
import type { ForgotPasswordRequest } from "../models/ForgotPasswordRequest";
import type { InfoRequest } from "../models/InfoRequest";
import type { InfoResponse } from "../models/InfoResponse";
import type { LoginRequest } from "../models/LoginRequest";
import type { RefreshRequest } from "../models/RefreshRequest";
import type { RegisterRequest } from "../models/RegisterRequest";
import type { RemoveContactFromBranchCommand } from "../models/RemoveContactFromBranchCommand";
import type { ResendConfirmationEmailRequest } from "../models/ResendConfirmationEmailRequest";
import type { ResetPasswordRequest } from "../models/ResetPasswordRequest";
import type { Topic } from "../models/Topic";
import type { TwoFactorRequest } from "../models/TwoFactorRequest";
import type { TwoFactorResponse } from "../models/TwoFactorResponse";
import type { University } from "../models/University";
import type { UpdateBranchCommand } from "../models/UpdateBranchCommand";
import type { UpdateProfileCommand } from "../models/UpdateProfileCommand";
import type { UpdateTopicCommand } from "../models/UpdateTopicCommand";
import type { UpdateUniversityCommand } from "../models/UpdateUniversityCommand";
import type { UserQueryResponse } from "../models/UserQueryResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class StudentHelperWebOpenApi {
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postAuthRegister({ requestBody }: { requestBody?: RegisterRequest }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/register",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * @returns AccessTokenResponse OK
   * @throws ApiError
   */
  public static postAuthLogin({
    useCookies,
    useSessionCookies,
    requestBody,
  }: {
    useCookies?: boolean;
    useSessionCookies?: boolean;
    requestBody?: LoginRequest;
  }): CancelablePromise<AccessTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/login",
      query: {
        useCookies: useCookies,
        useSessionCookies: useSessionCookies,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns AccessTokenResponse OK
   * @throws ApiError
   */
  public static postAuthRefresh({
    requestBody,
  }: {
    requestBody?: RefreshRequest;
  }): CancelablePromise<AccessTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/refresh",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static mapIdentityApiAuthConfirmEmail({
    userId,
    code,
    changedEmail,
  }: {
    userId?: string;
    code?: string;
    changedEmail?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/auth/confirmEmail",
      query: {
        userId: userId,
        code: code,
        changedEmail: changedEmail,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postAuthResendConfirmationEmail({
    requestBody,
  }: {
    requestBody?: ResendConfirmationEmailRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/resendConfirmationEmail",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postAuthForgotPassword({
    requestBody,
  }: {
    requestBody?: ForgotPasswordRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/forgotPassword",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postAuthResetPassword({ requestBody }: { requestBody?: ResetPasswordRequest }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/resetPassword",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * @returns TwoFactorResponse OK
   * @throws ApiError
   */
  public static postAuthManage2Fa({
    requestBody,
  }: {
    requestBody?: TwoFactorRequest;
  }): CancelablePromise<TwoFactorResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/manage/2fa",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns InfoResponse OK
   * @throws ApiError
   */
  public static getAuthManageInfo(): CancelablePromise<InfoResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/auth/manage/info",
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns InfoResponse OK
   * @throws ApiError
   */
  public static postAuthManageInfo({ requestBody }: { requestBody?: InfoRequest }): CancelablePromise<InfoResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/auth/manage/info",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
  /**
   * @returns University OK
   * @throws ApiError
   */
  public static getUniversity({ id }: { id: number }): CancelablePromise<University> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/university",
      query: {
        Id: id,
      },
    });
  }
  /**
   * @returns boolean OK
   * @throws ApiError
   */
  public static patchUniversity({ requestBody }: { requestBody: UpdateUniversityCommand }): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/university",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns University OK
   * @throws ApiError
   */
  public static postUniversity({
    requestBody,
  }: {
    requestBody: CreateUniversityCommand;
  }): CancelablePromise<University> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/university",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns boolean OK
   * @throws ApiError
   */
  public static deleteUniversity({
    requestBody,
  }: {
    requestBody: DeleteUniversityCommand;
  }): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/university",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns University OK
   * @throws ApiError
   */
  public static getUniversityAll(): CancelablePromise<Array<University>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/university/all",
    });
  }
  /**
   * @returns Branch OK
   * @throws ApiError
   */
  public static getBranch({ id }: { id: number }): CancelablePromise<Branch> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/branch",
      query: {
        Id: id,
      },
    });
  }
  /**
   * @returns boolean OK
   * @throws ApiError
   */
  public static patchBranch({ requestBody }: { requestBody: UpdateBranchCommand }): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/branch",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns Branch OK
   * @throws ApiError
   */
  public static postBranch({ requestBody }: { requestBody: CreateBranchCommand }): CancelablePromise<Branch> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/branch",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns boolean OK
   * @throws ApiError
   */
  public static deleteBranch({ requestBody }: { requestBody: DeleteBranchCommand }): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/branch",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns Branch OK
   * @throws ApiError
   */
  public static getBranchByunivercity({ universityId }: { universityId: number }): CancelablePromise<Array<Branch>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/branch/byunivercity",
      query: {
        UniversityId: universityId,
      },
    });
  }
  /**
   * @returns BranchContact OK
   * @throws ApiError
   */
  public static postBranchContact({
    requestBody,
  }: {
    requestBody: AddContactToBranchCommand;
  }): CancelablePromise<BranchContact> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/branch/contact",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns BranchContact OK
   * @throws ApiError
   */
  public static deleteBranchContact({
    requestBody,
  }: {
    requestBody: RemoveContactFromBranchCommand;
  }): CancelablePromise<BranchContact> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/branch/contact",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns Topic OK
   * @throws ApiError
   */
  public static getTopic({ id }: { id: number }): CancelablePromise<Array<Topic>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/topic",
      query: {
        Id: id,
      },
    });
  }
  /**
   * @returns Topic OK
   * @throws ApiError
   */
  public static patchTopic({ requestBody }: { requestBody: UpdateTopicCommand }): CancelablePromise<Topic> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/topic",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns Topic OK
   * @throws ApiError
   */
  public static postTopic({ requestBody }: { requestBody: CreateTopicCommand }): CancelablePromise<Topic> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/topic",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns boolean OK
   * @throws ApiError
   */
  public static deleteTopic({ requestBody }: { requestBody: DeleteTopicCommand }): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/topic",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns UserQueryResponse OK
   * @throws ApiError
   */
  public static getProfile(): CancelablePromise<UserQueryResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/profile",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static postProfile({ requestBody }: { requestBody: UpdateProfileCommand }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/profile",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
