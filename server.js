import express from "express";
import RouterWeb from "./router/webRoute.js";
import viewEngine from "./config/viewEngine";
import path from "path";
import dotenv from "dotenv";
import RouterAPI from "./router/apiRoute.js";
const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

viewEngine(app);
RouterWeb(app);
RouterAPI(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on address http://localhost:${port}`);
});
