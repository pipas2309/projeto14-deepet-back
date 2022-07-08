import db  from './mongodb.js';
import bcrypt from 'bcrypt';

async function createUser(user) { //finished
    try {
        const alreadyExist = await db.collection('users').findOne({ email: user.email});

        if(alreadyExist) {
            console.log('Usuário cadastrado - processo interrompido em createUser()');
            return 'alreadyExist';
        };

        const hashPassword = bcrypt.hashSync(user.password, 10);

        await db.collection('users').insertOne({
            ...user, password: hashPassword
        });
        
        return 'created';

    } catch (error) {
        console.error(error);
        return 'error';
    }
};

export {
    createUser
};