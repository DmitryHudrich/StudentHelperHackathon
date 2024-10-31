import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Image, Typography } from "antd";

import { AppRoutes } from "../../shared/model/services";

export const HomeWidget = memo(function HomeWidget() {
  const navigate = useNavigate();

  return (
    <>
      <Image alt="university" preview={false} src="/assets/university.png" />
      <Typography.Paragraph>
        Этот сервис призван помочь студентам в повседневной жизни. Здесь Вы можете найти информацию о своем
        университете, узнать ответы на интересующие Вас вопросы и многое другое.
      </Typography.Paragraph>
      <Typography.Title level={4}>Что начать, Вам необходимо зарегистрироваться или войти в аккаунт:</Typography.Title>
      <Button.Group>
        <Button icon={<LoginOutlined />} type="primary" onClick={() => navigate(AppRoutes.getAuthUrl())}>
          Войти
        </Button>
        <Button icon={<UserAddOutlined />} type="primary" onClick={() => navigate(AppRoutes.getRegisterUrl())}>
          Зарегистрироваться
        </Button>
      </Button.Group>
    </>
  );
});
