import db  from './mongodb.js';
//import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
//import { v4 as uuid } from 'uuid';

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

async function findUser(user) { //finished
    try {
        const userOnDatabase = await db.collection('users').findOne({ email: user.email });

        if (!userOnDatabase) {
          return 'not found';
        }
    
        return userOnDatabase;

      } catch (error) {
        console.error(error);
        return 'error';
      }
}

async function newToken(user) { 
    // código do token tirado do mywallet, precisa de revisão
    /* 
    const lastSession = await db.collection('tokens').findOne({userId: new ObjectId(user._id)});

    const token = uuid();
    const time = Date.now();


    if(lastSession) {
        if(time - lastSession.time < 50000 ) {
            return lastSession;
        }
        try {
            await db.collection('tokens').updateOne({userId: new ObjectId(user._id)},
            {
                $set: {token, time}
            })
            return {
                ...lastSession,
                token,
                time
            };
        } catch (error) {
            return 'error';
        }
    }

    let userData = {
        name: user.username,
        email: user.email,
        userId: user._id,
        token,
        time
    }

    await db.collection('tokens').insertOne(userData);

    return userData;
    */
}

export {
    createUser,
    findUser,
    newToken
};