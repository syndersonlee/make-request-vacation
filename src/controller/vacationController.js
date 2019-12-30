const { response, errResponse } = require('../library/response');
const returnCode = require('../library/returnCode')

const vacationService = require('../service/vacationService');

async function postVacation(req, res){
    try {
        const vacationResult = await vacationService.postVacation(req.headers.authorization, req.body);
        if(vacationResult == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } else if(vacationResult == -2) {
            console.log('남은 휴가 일수보다 더 많은 요청입니다');
            errResponse(res, returnCode.BAD_REQUEST, '남은 휴가 일수보다 더 많은 요청입니다');
        } else if(vacationResult == -3) {
            console.log('요청에 맞지 않는 형식');
            errResponse(res, returnCode.BAD_REQUEST, '요청에 맞지 않는 형식');
        }
        else {
            console.log('휴가 신청 성공');
            response(res, returnCode.OK, '휴가 신청 성공');
        }

    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function getVacation(req, res) {
    try {
        const vacationResult = await vacationService.getVacation(req.headers.authorization);
        if(vacationResult == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } 
        else {
            console.log('휴가 신청 조회 성공');
            response(res, returnCode.OK, '휴가 신청 조회 성공', vacationResult);
        }

    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    postVacation,
    getVacation
}