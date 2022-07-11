import { createUser } from '../db/database.js';

async function newUser(req, res) {
    const user = res.locals.user;

    try {
        const created = await createUser(user);

        if(created === 'alreadyExist') {
            res.sendStatus(409);
            return;
        };

        if(created === 'error') {
            res.sendStatus(500);
            return;
        };

        if(created === 'created') {
            console.log(user, ' usuario criado com sucesso')
            res.sendStatus(201);
            return;
        };

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export default newUser;