const moment = require('moment');
const { verify } = require('../library/jwt');
const { checkVacationDate } = require('../library/calculVacation');
const documentDao = require('../dao/documentDao');
const userDao = require('../dao/userDao');


async function postVacation(userToken, documentData) {
    const userId = verify(userToken);
    if(userId < 0) {
        return -1;
    } else {
        const userData = await userDao.selectUserByIdx(userId.idx);
        const remainVacation = userData[0].userVacation;
        let applyTime;
        if(documentData.vacationTime < 1){
            applyTime = documentData.vacationType;
        } else {
            applyTime = await checkVacationDate(documentData.vacationStartDate, documentData.vacationEndDate);
            if(applyTime > remainVacation) {
                return -2;
            } else if(applyTime < 0 || applyTime == undefined) {
                return -3;
            }
        }

        if(moment(documentData.vacationStartDate).format('YYYY-MM-DD') == undefined) {
            return -3;
        }

        const minusDate = applyTime * -1;
        let documentDto = documentData;
        documentDto['userIdx'] = userId.idx;
        documentDto['applyDate'] = moment().format('YYYY-MM-DD');

        if (documentDto['vacationType'] >= 1) {
            documentDto['vacationType'] = 1;
        }


        await userDao.updateUserVacation(minusDate, userId.idx);
        await documentDao.insertDocument(documentDto);
        return 1;
    }

}

async function getVacation(userToken) {
    const userId = verify(userToken);
    if(userId < 0) {
        return -1;
    } else {
        const userData = await userDao.selectUserByIdx(userId.idx);
        return { remainDate : userData[0].userVacation };
    }
}

module.exports = {
    postVacation,
    getVacation
}