import express from "express";
import RouterWeb from "./router/webRoute.js";
import viewEngine from "./config/viewEngine";
import path from "path";
import dotenv from "dotenv";
import RouterAPI from "./router/apiRoute.js";
import isAuth from "./middleware/isAuth.js";
import session from "express-session";
import RedisStore from "connect-redis";
import { createClient } from "redis";
import cookieParser from "cookie-parser";

// Initialize client.
let redisClient = createClient();
redisClient.connect().catch(console.error);

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});

const app = express();
dotenv.config();
const sessionConfig = {
  secret: process.env.JWT_SECRET,
  resave: false,
  store: redisStore,
  saveUninitialized: false,
};

app.use(session(sessionConfig));
app.use(cookieParser());

app.use(isAuth);
app.use("/src", express.static(path.join(__dirname, "src")));
app.use(express.json());

viewEngine(app);
RouterWeb(app);
RouterAPI(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on address http://localhost:${port}`);
});
