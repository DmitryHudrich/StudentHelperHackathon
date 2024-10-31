import React from "react";
import { Layout } from "antd";

const YEAR = new Date().getFullYear();

export const Footer = React.memo(function Footer() {
  return (
    <Layout.Footer style={{ textAlign: "center", color: "#fff" }}>© Помощник для студентов, {YEAR}</Layout.Footer>
  );
});
