export const IS_PRODUCTION_MODE = process.env.NODE_ENV === "production";
export const BASE_API_HOST = process.env.REACT_APP_API_HOST ? "/API_HOST" : window.location.origin;
