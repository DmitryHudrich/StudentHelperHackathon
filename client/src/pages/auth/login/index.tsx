import React from "react";
import { useTitle } from "react-use";

import { LoginFeature } from "features/auth/login";

import { AppTitles } from "shared/model/services";

function LoginPage() {
  useTitle(AppTitles.getAuthTitle());

  return <LoginFeature />;
}

export const Component = React.memo(LoginPage);
