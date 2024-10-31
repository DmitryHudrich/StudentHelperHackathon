import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { Branch } from "../../interfaces";

import { BranchDetailsService } from "./service";

export function useBranchDetails(): Branch {
  const branchDetailsService = useInjectService(BranchDetailsService);

  const branchDetails = branchDetailsService.branchDetails;

  if (isNil(branchDetails)) throw new Error("universityDetails not found");

  return branchDetails;
}
