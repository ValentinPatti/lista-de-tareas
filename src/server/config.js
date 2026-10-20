import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

export default class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 3000;
  }
  listen() {
    this.app.listen(this.PORT, () => {
      console.info(`Servidor activo en http://localhost:${this.PORT}`);
    });
  }
}
