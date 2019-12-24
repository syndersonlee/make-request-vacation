const userDao = require('../dao/userDao');
const { sign } = require('../library/jwt');

async function postUserSignin(userData) {
    const checkExistedUser = await userDao.selectUserByIdPw(userData);
    if(checkExistedUser.length == 0) {
        return -1;
    } else {
        const tokenData = {
            token : sign(checkExistedUser[0].userIdx)
        }
        return tokenData;
    }
}

async function postUserSignup(userData) {
    const checkExistedUser = await userDao.selectUserById(userData.id);
    if(checkExistedUser.length > 0) {
        return -1;
    } else {
        await userDao.insertUser(userData);
        return 1;
    }
}

module.exports = {
    postUserSignup,
    postUserSignin
}