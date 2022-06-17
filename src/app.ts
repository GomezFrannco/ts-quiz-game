import express, { Application } from "express";
import "./config/mongoose.config.js";
import apiRoutes from "./routes/api.routes.js";

export class App {
  private app: Application;
  constructor(private port: number | string = undefined) {
    this.app = express();
    this.port = port;
    this.settings();
    this.middlewares();
    this.routes();
  }
  private settings(): void {
    this.app.set("port", this.port);
  }
  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  private routes(): void {
    this.app.use("/api/0.1.0v/", apiRoutes);
  }
  public listen(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("🚀 listening on port:", Number(this.app.get("port")));
    });
  }
}
