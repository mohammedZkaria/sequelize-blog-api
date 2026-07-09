import "dotenv/config";
import express from "express";
import { bootstrap } from "./src/app.controller.js";
import { checkAsyncDBconnection, checkDBconnection } from "./src/DB/connection.js";

const app = express();
const PORT = process.env.PORT;
checkDBconnection();
checkAsyncDBconnection();
bootstrap(app, express);

app.listen(PORT, () =>
  console.log(`Example app listening on port http://localhost:${PORT}`),
);
