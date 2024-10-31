import type { Request } from "shared/model/interfaces";

export type GetUniversityRequest = Request<{ additionalQueryParams: { id: number } }>;
