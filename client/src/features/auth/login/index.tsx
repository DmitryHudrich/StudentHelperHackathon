import React from "react";
import { useNavigate } from "react-router-dom";
import { useAsyncFn } from "react-use";
import { Button, Form, Input, theme, Typography } from "antd";

import type { LoginDto } from "entities/auth";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";

import { AuthService } from "../service";

import { validationRules } from "./config";

interface Values {
  email: string;
  password: string;
}

export const LoginFeature = React.memo(function LoginForm() {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const [form] = Form.useForm<Values>();

  const authService = useInjectService(AuthService);

  const [{ error, loading }, submitForm] = useAsyncFn(async ({ email, password }: Values) => {
    const body: LoginDto = { email, password };
    await authService.login(body);
    navigate(AppRoutes.getHomeUrl());
  });

  return (
    <div>
      <Typography.Title level={3}>Вход</Typography.Title>
      <Typography.Text>Помощник для студентов</Typography.Text>
      <Form
        autoComplete="off"
        form={form}
        name="basic"
        size="large"
        style={{ marginTop: token.marginXL }}
        onFinish={submitForm}
      >
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

        {error?.message && (
          <Typography.Text style={{ color: token.colorErrorText, marginBottom: token.marginXS }}>
            {error.message}
          </Typography.Text>
        )}

        <Button block htmlType="submit" loading={loading} style={{ marginBottom: token.marginXS }} type="primary">
          Войти
        </Button>
        <Button
          block
          style={{ marginBottom: token.marginXS }}
          type="default"
          onClick={() => navigate(AppRoutes.getRegisterUrl())}
        >
          Регистрация
        </Button>
      </Form>
    </div>
  );
});
