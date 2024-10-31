import React from "react";
import { App as AntdApp, ConfigProvider } from "antd";

import { theme } from "shared/config/theme";
import { antdServices } from "shared/model/services";
import { BreakpointProvider } from "shared/ui/breakpointProvider";

import type { AppProvider } from "../types";

const AntdServicesInitializer = React.memo(function AppServicesInitializer() {
  const staticFunction = AntdApp.useApp();

  antdServices.setMessageInstance(staticFunction.message);
  antdServices.setNotificationInstance(staticFunction.notification);
  antdServices.setModalInstance(staticFunction.modal);
  return null;
});

export const withAntD: AppProvider = (App) =>
  function AntDProvider() {
    return (
      <ConfigProvider theme={theme}>
        <BreakpointProvider>
          <AntdApp>
            <AntdServicesInitializer />
            <App />
          </AntdApp>
        </BreakpointProvider>
      </ConfigProvider>
    );
  };
