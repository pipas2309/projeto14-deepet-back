import db from "../db/mongodb.js";

export default async function checkout(req, res) {
  const payment = req.body.pay;
  if (!payment) {
    res.sendStatus(401);
    return;
  }
  const cartList = await db.collection("cart").deleteMany({userId:res.locals.Csession.userID})
  res.send("Pedido concluído").status(200);
  return;
}
