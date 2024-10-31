import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { University } from "../../interfaces";

import { UniversityDetailsService } from "./service";

export function useUniversityDetails(): University {
  const universityDetailsService = useInjectService(UniversityDetailsService);

  const universityDetails = universityDetailsService.universityDetails;

  if (isNil(universityDetails)) throw new Error("universityDetails not found");

  return universityDetails;
}
