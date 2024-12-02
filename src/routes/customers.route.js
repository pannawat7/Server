const express = require('express');
const app = express.Router();
const controller = require('../controllers/customers.controller');

// defind routes here
// match GET localhost:4000/customers
app.get("/", controller.get);
  
  // match GET localhost:4000/customers/[id]
app.get("/:id", controller.getById);
  // match GET localhost:4000/customers/[name]
app.get("/name/:name", controller.getByName);

app.post("/", controller.create);

app.put("/:id",  controller.edit);

app.patch("/:id",  controller.patchs);

app.delete("/:id",  controller.deletes);



module.exports = app;