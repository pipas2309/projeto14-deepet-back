import db from "../db/mongodb.js";
import 'dotenv/config'; 

export async function postProduct(req, res) {

  const security = req.headers
  const key = process.env.SECURITY_POST_PRODUCT;

  if(security.authorization === key) {
    await db.collection("products").insertOne(req.body);
    res.sendStatus(201);
    return;
  }

  res.sendStatus(511);
  return;

}

export async function getProducts(req,res) {
  const transactionList = await db.collection("products").find({}).toArray();
  res.send(transactionList).status(200);
  return;
}
