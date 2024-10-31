import React from "react";
import { Typography } from "antd";
import { isNil } from "ramda";

interface FormExceptionProps {
  error?: Error;
}

export const FormErrorMessage = ({ error }: FormExceptionProps) => {
  if (isNil(error?.message)) {
    return null;
  }
  return (
    <Typography.Text style={{ marginBottom: 16, display: "block" }} type="danger">
      {error?.message}
    </Typography.Text>
  );
};
