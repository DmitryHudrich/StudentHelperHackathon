import React from "react";
import { useNavigate } from "react-router-dom";
import { useAsyncFn } from "react-use";
import { Button, Form, Input, InputNumber, theme, Typography } from "antd";

import type { RegisterDto } from "entities/auth";
import { UniversityView, useUniversityList } from "entities/university";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";

import { AuthService } from "../service";

import { validationRules } from "./config";

interface Values {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  passwordConfirmation: string;
  age: number;
}

export const RegisterFeature = React.memo(function RegisterForm() {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const universities = useUniversityList();
  const [form] = Form.useForm<Values>();
  const authService = useInjectService(AuthService);

  const [{ error, loading }, submitForm] = useAsyncFn(
    async ({ fullName, email, password, universityId, age }: Values) => {
      const body: RegisterDto = { fullName, email, password, universityId, age };
      await authService.login(body);
      navigate(AppRoutes.getAuthUrl());
    },
  );

  const onUniversityChange = (id: number) => {
    form.setFieldValue("universityId", id);
  };

  return (
    <div>
      <Typography.Title level={3}>Регистрация</Typography.Title>
      <Typography.Text>Помощник для студентов</Typography.Text>
      <Form
        autoComplete="off"
        form={form}
        name="basic"
        size="large"
        style={{ marginTop: token.marginXL }}
        onFinish={submitForm}
      >
        <Form.Item name="fullName" rules={validationRules.fullName}>
          <Input placeholder="ФИО" status={error && "error"} />
        </Form.Item>

        <Form.Item name="age" rules={validationRules.age}>
          <InputNumber placeholder="Возраст" status={error && "error"} />
        </Form.Item>

        <Form.Item name="email" rules={validationRules.email}>
          <Input placeholder="E-mail" status={error && "error"} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={validationRules.password}
          style={{ marginBottom: error ? token.marginXS : token.marginLG }}
        >
          <Input.Password placeholder="Пароль" status={error && "error"} />
        </Form.Item>

        <Form.Item name="passwordConfirmation" rules={validationRules.passwordConfirmation}>
          <Input.Password placeholder="Подтвердите пароль" status={error && "error"} />
        </Form.Item>

        <Form.Item name="universityId" rules={validationRules.universityId}>
          <UniversityView.Select universities={universities} onChange={onUniversityChange} />
        </Form.Item>

        {error?.message && (
          <Typography.Text style={{ color: token.colorErrorText, marginBottom: token.marginXS }}>
            {error.message}
          </Typography.Text>
        )}

        <Button block htmlType="submit" loading={loading} style={{ marginBottom: token.marginXS }} type="primary">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
});
