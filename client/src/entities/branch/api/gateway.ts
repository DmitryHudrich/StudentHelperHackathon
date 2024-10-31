import { StudentHelperWebOpenApi } from "api";
import { Service } from "typedi";

import { applyDecoder } from "shared/lib/applyDecoder";

import type { Branch, GetBranchRequest } from "../interfaces";

import { branchDecoder } from "./decoders";

@Service()
export class BranchApi {
  public async getBranchDetails({ urlParams }: GetBranchRequest): Promise<Branch> {
    return StudentHelperWebOpenApi.getBranch({ id: urlParams.id }).then(applyDecoder(branchDecoder));
  }
}
