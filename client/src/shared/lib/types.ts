import type { Rule } from "rc-field-form/lib/interface";

export type ValidationRules<DTO> = Record<keyof DTO, Rule[]>;
