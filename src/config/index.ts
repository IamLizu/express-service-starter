const env = process.env.NODE_ENV || "development";
import "dotenv/config";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "test",
  port: process.env.PORT || 3000
};

export default baseConfig;
