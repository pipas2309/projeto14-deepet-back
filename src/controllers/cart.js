import db from "../db/mongodb.js";

export async function postCart(req, res) {
    console.log(res.locals.Csession.userId)
  await db.collection("cart").insertOne({
    userId: res.locals.Csession.userId,
    name: req.body.name,
    description: req.body.description,
    images: req.body.images,
    features: req.body.features,
    price: req.body.price,
    departament: req.body.departament,
    address: req.body.address,
    seller: req.body.seller,
    quantity: req.body.quantity,
    review: req.body.review,
    off: req.body.off,
  });
  res.sendStatus(200);
  return;
}

export async function getCart(req, res) {
  const cartList = await db.collection("cart").find({userID:res.locals.Csession.userID}).toArray();
  res.send(cartList).status(200);
  return;
}
