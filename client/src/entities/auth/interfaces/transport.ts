import type { Request } from "shared/model/interfaces";

import type { LoginDto, RegisterDto } from "./dto.request";

export type LoginRequest = Request<{ body: LoginDto }>;
export type RegisterRequest = Request<{ body: RegisterDto }>;
