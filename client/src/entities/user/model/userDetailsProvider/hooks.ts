import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { UserDetailsModel } from "./model";
import { UserDetailsService } from "./service";

export function useUserDetails(): UserDetailsModel {
  const userDetailsService = useInjectService(UserDetailsService);

  const userDetails = userDetailsService.userDetails;

  if (isNil(userDetails)) throw new Error("userDetails not found");

  return userDetails;
}
