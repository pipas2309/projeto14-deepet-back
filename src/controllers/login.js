import { findUser, newToken } from '../db/database.js';
import bcrypt from 'bcrypt';


async function login(req, res) {
    try {
        const user = res.locals.user;
        const dbUser = await findUser(user);
        
        if(dbUser === 'not found') {
            res.status(404).send('Usuário ou senha incorreto!');
            return;
        }

        if(dbUser === 'error') {
            res.sendStatus(500);
            return;
        }

        const correctPassword = bcrypt.compareSync(user.password, dbUser.password)

        if(!correctPassword) {
            res.status(404).send('Usuário ou senha incorreto!');
            return;
        }

        const session = await newToken(dbUser);

        delete session._id;

        res.status(200).send(session);

        return;
        
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
        return;
    }

}

export default login;