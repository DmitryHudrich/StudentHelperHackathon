import type { Request } from "shared/model/interfaces";

export type GetBranchRequest = Request<{ urlParams: { id: number } }>;
