import { configuration } from "./core/init";
import { formatLogger } from "./utils/formatLogger";

console.log("Start");

console.log(configuration)

setInterval(() => {
  console.log(
    formatLogger({
      lineLog: "This is a log message",
      title: "Log"
    })
  );
}, 1200);

setInterval(() => {
  console.log(
    formatLogger({
      lineLog: "error",
      title: "JoinRHBackend"
    })
  );
}, 1200);