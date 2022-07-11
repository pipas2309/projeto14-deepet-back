import db from "../db/mongodb.js";

export async function postProduct(req, res) {
  await db.collection("products").insertOne(req.body);
  res.sendStatus(200);
  return;
}

export async function getProducts(req,res) {
  const transactionList = await db.collection("products").find({}).toArray();
  res.send(transactionList).status(200);
  return;
}
