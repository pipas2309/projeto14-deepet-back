import signUpJoi from "../models/signUpJoi.js";

async function validateSignUp(req, res, next) {
    try {
        const user = req.body;
        const joiValidate = await signUpJoi(user);

        if(!joiValidate) {
            console.log('Falha na validação JOI em signUpJoi()');
            res.status(422).send('Preencha os dados corretamente!')
            return;
        }

        delete user.confirmPassword;

        res.locals.user = user;
        next();

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export default validateSignUp;