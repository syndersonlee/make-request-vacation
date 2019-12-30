const { response, errResponse } = require('../library/response');
const returnCode = require('../library/returnCode')

const userService = require('../service/userService');

async function postUserSignin(req, res) {
    try {
        const loginResult = await userService.postUserSignin(req.body);
        if(loginResult == -1){
            console.log('정보 미기입');
            errResponse(res, returnCode.BAD_REQUEST, '정보 미기입');
        } else if(loginResult == -2){
            console.log('로그인 실패');
            errResponse(res, returnCode.UNAUTHORIZED, '로그인 실패');
        } else {
            console.log('로그인 성공');
            response(res, returnCode.OK, '로그인 성공', loginResult);
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function postUserSignup(req, res) {
    try {
        const signupResult = await userService.postUserSignup(req.body);
        if(signupResult == -1){
            console.log('중복 아이디 확인');
            errResponse(res, returnCode.BAD_REQUEST, '중복 아이디 확인');
        } else if(signupResult == -2) {
            console.log('회원 정보 미기입');
            errResponse(res, returnCode.BAD_REQUEST, '회원 정보 미기입');
        } else {
            console.log('회원가입 성공');
            response(res, returnCode.OK, '회원가입 성공');
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    postUserSignin,
    postUserSignup
}