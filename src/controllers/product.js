import db from "../db/mongodb.js";

export async function postProduct(req, res) {
  await db.collection("products").insertOne(req.body);
  res.sendStatus(200);
  return;
}

export async function getProducts(req,res) {
  const productList = await db.collection("products").find({}).toArray();
  res.send(productList).status(200);
  return;
}
