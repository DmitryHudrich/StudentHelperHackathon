import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { University } from "../../interfaces";

import { UniversityListService } from "./service";

export function useUniversityList(): University[] {
  const universityListService = useInjectService(UniversityListService);

  const universityList = universityListService.universityList;

  if (isNil(universityList)) throw new Error("universityList not found");

  return universityList;
}
