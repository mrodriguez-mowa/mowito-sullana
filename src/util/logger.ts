import * as log4js from "log4js";

log4js.configure({
  appenders: {
    app: { type: "file", filename: "sullana-sfpt-files.log" },
    console: { type: "console"},
  },
  categories: {
    default: { appenders: ["app"], level: "INFO" },
    sullanaSftpFiles: {appenders: ["app", "console"], level: "INFO"}
  },
});

const logger = log4js.getLogger("sullanaSftpFiles");

export default logger;