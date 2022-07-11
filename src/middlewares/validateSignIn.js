import signInJoi from "../models/signInJoi.js";

async function validateSignIn(req, res, next) {
    try {
        const user = req.body;
        const joiValidate = await signInJoi(user);

        if(!joiValidate) {
            console.log('Falha na validação JOI signInJoi()');
            res.status(422).send("Insira um email e senha válido!");
            return;
        }
        console.log(user)

        res.locals.user = user;
        next();
        
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export default validateSignIn;