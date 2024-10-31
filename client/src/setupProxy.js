const { createProxyMiddleware } = require("http-proxy-middleware");

const { REACT_APP_API_HOST } = process.env;

if (!REACT_APP_API_HOST) {
  throw new Error("env.REACT_APP_API_HOST is not set");
}

module.exports = function (app) {
  app.use(
    "/API_HOST",
    createProxyMiddleware({
      target: REACT_APP_API_HOST,
      changeOrigin: true,
      pathRewrite: { "^/API_HOST": "/" },
    }),
  );
};
