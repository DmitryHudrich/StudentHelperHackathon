import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    borderRadiusLG: 10,
    colorPrimary: "#D8881F",
  },
  components: {
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
    Layout: {
      bodyBg: "#fff",
      headerBg: "#fff",
      colorBgContainer: "#fff",
      colorBgElevated: "#fff",
      footerBg: "transparent",
    },
    Menu: {
      borderRadiusLG: 9,
      margin: 0,
      marginXS: 0,
      padding: 0,
      paddingXL: 0,
      paddingXS: 0,
      itemMarginInline: 0,
      itemMarginBlock: 0,
      itemBorderRadius: 0,
      itemSelectedBg: "rgba(255,255,255,0)",
      itemSelectedColor: "rgb(216,136,31)",
      activeBarBorderWidth: 0,
    },
    Table: {
      headerBg: "#647C80",
      headerColor: "#fff",
      headerSortActiveBg: "#647C80",
      headerSortHoverBg: "#647C80",
      headerFilterHoverBg: "#647C80",
      cellPaddingBlock: 10,
      cellPaddingInline: 10,
      headerSplitColor: "#647C80",
      borderRadius: 6,
    },
  },
};
