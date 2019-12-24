const { response, errResponse } = require('../library/response');
const jwt = require('../library/jwt');
const returnCode = require('../library/returnCode')

const listService = require('../service/listService');

async function deleteList(req, res) {
    try {
        const listResult = await listService.deleteList(req.headers.authorization, req.params.vacationIdx);
        if(listResult == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } else if(listResult == -2) {
            console.log('존재하지 않는 파라미터');
            errResponse(res, returnCode.BAD_REQUEST, '존재하지 않는 파라미터');
        } else if(listResult == -3) {
            console.log('이미 지난 휴가입니다');
            errResponse(res, returnCode.BAD_REQUEST, '이미 지난 휴가입니다');
        }
        else {
            console.log('게시판 성공');
            response(res, returnCode.OK, '게시판 성공');
        }

    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function getListDetail(req, res) {
    try {
        const listDetailResult = await listService.getlistDetail(req.headers.authorization, req.params.vacationIdx);
        if(listDetailResult == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } else if(listDetailResult == -2) {
            console.log('존재하지 않는 파라미터');
            errResponse(res, returnCode.BAD_REQUEST, '존재하지 않는 파라미터');
        }
        else {
            console.log('휴가 상태 호출');
            response(res, returnCode.OK, '휴가 상태 호출', listDetailResult);
        }

    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function getList(req, res) {
    try {
        const listResult = await listService.getList(req.headers.authorization);
        if(listResult == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } else {
            console.log('게시판 성공');
            response(res, returnCode.OK, '게시판 성공', listResult);
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function getList(req, res) {
    try {
        const listResult = await listService.getList(req.headers.authorization);
        if(listResult == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } else {
            console.log('게시판 성공');
            response(res, returnCode.OK, '게시판 성공', listResult);
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    getList,
    getListDetail,
    deleteList
}