import { StudentHelperWebOpenApi } from "api";
import { Service } from "typedi";

import { applyDecoder } from "shared/lib/applyDecoder";

import type { GetUniversityRequest, University } from "../interfaces";

import { universitiesListDecoder, universityDecoder } from "./decoders";

@Service()
export class UniversitiesApi {
  public async getUniversities(): Promise<University[]> {
    return StudentHelperWebOpenApi.getUniversityAll().then(applyDecoder(universitiesListDecoder));
  }
  public async getUniversity({ additionalQueryParams }: GetUniversityRequest): Promise<University> {
    return StudentHelperWebOpenApi.getUniversity({ id: additionalQueryParams.id }).then(
      applyDecoder(universityDecoder),
    );
  }
}
