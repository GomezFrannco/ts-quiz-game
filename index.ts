import "./src/config/dotenv.config.js";
import { App } from "./src/app.js";

function main(port: any = process.env.PORT): void { // ---> Port argument only can be a string or a number
  const app: App = new App(port);
  return app.listen();
}

main();
