import db from "../db/mongodb.js";

export default async function tokenValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
  
    if (!token) {
      res.sendStatus(401);
      return;
    }
  
    const Csession = await db
      .collection("tokens")
      .findOne({ token: token });
  
    if (!Csession) {
      return res.sendStatus(401);
    }
  
    res.locals.Csession = Csession;
    next();
  }