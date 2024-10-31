import { SmileOutlined } from "@ant-design/icons";

export const NotFoundPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SmileOutlined style={{ fontSize: 20 }} />
      <p>Data Not Found</p>
    </div>
  );
};
