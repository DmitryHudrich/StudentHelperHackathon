import type { Request } from "shared/model/interfaces";

import type { CreateThemeDto } from "./dto.request";

export type CreateThemeRequest = Request<{ body: CreateThemeDto }>;
export type GetThemeRequest = Request<{ urlParams: { id: number } }>;
