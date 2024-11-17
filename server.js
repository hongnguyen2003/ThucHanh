import express from "express";
import dotenv from "dotenv/config";
import myDateTime from "./date";
import getURL from "./getURL";
import viewEngine from "./viewEngine";
const app = express();

viewEngine(app);
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.render("test");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/date", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
  res.write(myDateTime());
  res.end();
});

app.get("/geturl", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
  res.write(getURL.getPath(req));
  res.write(getURL.getParamsURL(req));
  res.end();
});

app.get("/ejs", (req, res) => {
  res.render("test");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
