import type { LoginDto } from "entities/auth";

import type { ValidationRules } from "shared/lib/types";

export const validationRules: ValidationRules<LoginDto> = {
  email: [
    {
      type: "email",
      message: "Ввод не является действительным E-mail!",
    },
    { required: true, message: "Пожалуйста, введите ваш e-mail" },
  ],
  password: [{ required: true, message: "Пожалуйста, введите ваш пароль" }],
};
