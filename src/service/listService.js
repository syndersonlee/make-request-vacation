const moment = require('moment');
const { verify } = require('../library/jwt');
const { checkVacationDate } = require('../library/calculVacation');
const documentDao = require('../dao/documentDao');
const userDao = require('../dao/userDao');

async function deleteList(userToken, listIdx) {
    const userId = verify(userToken);
    let listDetail = await documentDao.selectListDetailByIdx(listIdx);
   if(userId < 0) {
        return -1;
    } else if(listDetail.length == 0) {
        return -2;
    } else {
        if(moment(listDetail[0].vacationStartDate) >= moment()) {
            if(listDetail[0].vacationType < 1) {
                await userDao.updateUserVacation(listDetail[0].vacationType, userId.idx);
            } else {
                const vacationDate = await checkVacationDate(listDetail[0].vacationStartDate, listDetail[0].vacationEndDate);
                await userDao.updateUserVacation(vacationDate, userId.idx);
            }
            await documentDao.deleteList(listIdx);
            return 1;
        } else {
            return -3;
        }
    }
}

async function getlistDetail(userToken, listIdx) {
    const userId = verify(userToken);
    let listDetail = await documentDao.selectListDetailByIdx(listIdx);
    if(userId < 0) {
        return -1;
    } else if(listDetail.length == 0) {
        return -2;
    } else {
        await Promise.all(listDetail.map((data) => {
            data.applyDate = moment(data.applyDate).format('YYYY-MM-DD');
            data.vacationStartDate = moment(data.vacationStartDate).format('YYYY-MM-DD');
            data.vacationEndDate = moment(data.vacationEndDate).format('YYYY-MM-DD');
            if(data.vacationType < 1) {
                delete data.vacationEndDate;
            }
            return data;
        }))
        return listDetail;
        
    }
}

async function getList(userToken) {
    const userId = verify(userToken);
    if(userId < 0) {
        return -1;
    } else {
        let vacationList = await documentDao.selectAllDocument(userId.idx);
        await Promise.all(vacationList.map((data) => {
            const convertedDate = moment(data.applyDate).format('YYYY-MM-DD');
            data.applyDate = convertedDate;
            return data;
        }))
        return vacationList;
    }
}

module.exports = {
    getList,
    getlistDetail,
    deleteList
}