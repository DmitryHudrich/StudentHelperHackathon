import React from "react";
import { useTitle } from "react-use";

import { RegisterFeature } from "features/auth/register";

import { AppTitles } from "shared/model/services";

function RegisterPage() {
  useTitle(AppTitles.getRegisterTitle());

  return <RegisterFeature />;
}

export const Component = React.memo(RegisterPage);
