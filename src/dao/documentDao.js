const mysql = require('../library/mysql');

async function selectAllDocument(userIdx) {
    const selectQuery = `SELECT documentIdx, documentTitle, applyDate FROM document WHERE userIdx = ?`;
    return await mysql.query(selectQuery, [userIdx]);
}

async function selectListDetailByIdx(listIdx) {
    const selectQuery = `SELECT * FROM document WHERE documentIdx = ?`
    return await mysql.query(selectQuery, [listIdx]);
}

async function deleteList(listIdx) {
    const deleteQuery = `DELETE FROM document WHERE documentIdx = ?`
    return await mysql.query(deleteQuery, [listIdx]);
}

async function insertDocument(documentData) {
    const insertQuery = `INSERT INTO document(documentTitle, applyDate, vacationType, vacationStartDate, vacationEndDate, comment, userIdx) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    return await mysql.query(insertQuery, [documentData.documentTitle, documentData.applyDate, documentData.vacationType, documentData.vacationStartDate, 
    documentData.vacationEndDate, documentData.comment, documentData.userIdx])
}

module.exports = {
    selectAllDocument,
    selectListDetailByIdx,
    deleteList,
    insertDocument
}