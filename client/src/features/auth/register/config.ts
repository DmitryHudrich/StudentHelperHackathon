import type { RegisterDto } from "entities/auth";

import type { ValidationRules } from "shared/lib/types";

export const validationRules: ValidationRules<RegisterDto & { passwordConfirmation: string }> = {
  email: [
    {
      type: "email",
      message: "Ввод не является действительным E-mail!",
    },
    { required: true, message: "Пожалуйста, введите ваш e-mail" },
  ],
  password: [
    { required: true, message: "Пожалуйста, введите ваш пароль" },
    ({ getFieldValue }) => ({
      async validator() {
        const password = String(getFieldValue("password"));
        if (
          !/[A-Z]/.test(password) ||
          !/[0-9]/.test(password) ||
          !/[^a-zA-Z0-9]/.test(password) ||
          password.length < 8
        ) {
          return Promise.reject(
            new Error(
              "Пароль должен содержать строчные латинские буквы, заглавные латинские буквы, цифры и специальные символы и иметь длину не менее 8 символов",
            ),
          );
        }
        return Promise.resolve();
      },
    }),
  ],
  fullName: [{ required: true, message: "Пожалуйста, введите ваше имя" }],
  universityId: [{ required: true, message: "Пожалуйста, выберите вашу университет" }],
  passwordConfirmation: [
    ({ getFieldValue }) => ({
      async validator() {
        const password = String(getFieldValue("password"));
        const passwordConfirmation = String(getFieldValue("passwordConfirmation"));
        if (password !== passwordConfirmation) {
          return Promise.reject(new Error("Пароли не совпадают"));
        }
        return Promise.resolve();
      },
    }),
  ],
  age: [
    {
      required: true,
      message: "Пожалуйста, введите ваш возраст",
    },
  ],
};
