import joi from 'joi';

const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(64).required()
});

async function signInJoi(signin) {
    try {
        const allowedSignInData = await signinSchema.validateAsync(signin, { abortEarly: false });
        return allowedSignInData;

    } catch (error) {
        console.log(error);
        return;
    }
};  

export default signInJoi;