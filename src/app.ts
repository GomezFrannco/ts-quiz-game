import express, { Application } from "express";

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
  }
  public listen(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("🚀 listening on port:", Number(this.app.get("port")));
    });
  }
}
