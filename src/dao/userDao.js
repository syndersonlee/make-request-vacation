const mysql = require('../library/mysql');


async function selectUserById(userId){
    const selectQuery = `SELECT * FROM user WHERE userId = ?`
    return await mysql.query(selectQuery, [userId]);
}
async function insertUser(userData){
    const insertQuery = `INSERT INTO user(userId, userPassword, userVacation) VALUES (?, ?, ?)`
    return await mysql.query(insertQuery, [userData.id, userData.password, 15]);
}

async function selectUserByIdPw(userData) {
    const selectQuery = `SELECT * FROM user WHERE userId = ? AND userPassword = ?`;
    return await mysql.query(selectQuery, [userData.id, userData.password]);
}

async function updateUserVacation(vacationDate, userIdx) {
    const updateQuery = `UPDATE user SET userVacation = userVacation + ? WHERE userIdx = ?`;
    return await mysql.query(updateQuery, [vacationDate, userIdx]);
}

async function selectUserByIdx(userIdx) {
    const selectQuery = `SELECT * FROM user WHERE userIdx = ?`;
    return await mysql.query(selectQuery, [userIdx]);
}

module.exports = {
    selectUserById,
    insertUser,
    selectUserByIdPw,
    selectUserByIdx,
    updateUserVacation
}