const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const app = express();
const port = 3000;
let bodyParser = require("body-parser");
//json文件所在路径
const city = "./db/city.json";

global.len = 0;

//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  next();
});
let jsonParser = bodyParser.json();

// 音乐推荐接口
app.get("/personalized", (req, res) => {
  const fs = require("fs");
  let indexData = JSON.parse(
    fs.readFileSync(__dirname + index, {
      encoding: "utf8",
      flag: "r",
    })
  );
  res.send(indexData);
});
app.listen(port, () => {
  console.log(`-----------------------listening at http://localhost:${port}-----------------------`);
});