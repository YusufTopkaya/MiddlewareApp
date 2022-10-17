require("dotenv/config");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const {middleware,middlewareLog}= require("./middleware") 
const {getHello,postHello,putHello,deleteHello}=require("./controller")

app.use(middleware);

app.get("/hello",getHello);

app.post("/hello",middlewareLog,postHello);

app.put("/hello",putHello);

app.delete("/hello",deleteHello);

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda hizmet vermektedir!`);
});

