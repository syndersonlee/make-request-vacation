주어진 요구 사항에 맞는 시스템을 만들 수 있는지 확인하기 위한 과제입니다.

만들어야 할 것은 휴가 신청 시스템입니다.

# 요구 사항
* 완전히 동작하는 웹 어플리케이션 또는 API 서버를 작성해주세요.
    * 웹 어플리케이션을 작성하는 경우 웹 UI는 평가대상이 아닙니다. CSS를 적용하지 않아도 됩니다.
    * API 서버를 작성하는 경우 일반적인 사용 시나리오에 대한 호출 순서를 스크립트로 작성해주세요.
        * 예) 휴가 취소: 로그인 API 호출 -> 목록 API 호출 -> 휴가 보기 API 호출 -> 휴가 취소 API 호출
* 데이터를 영구히 저장하기 위해 DBMS를 사용해주세요.
* 사용가능한 언어: JavaScript / TypeScript / Java / Kotlin

## 기능 명세
* 사용자 모델과 로그인 시스템이 필요합니다.
    * 가입 기능은 없어도 괜찮습니다.
* 사용자에게는 매년 15일의 연차가 부여됩니다.
* 사용자는 연차/반차(0.5일)/반반차(0.25일)에 해당하는 휴가를 신청할 수 있습니다.
* 휴가 신청시 시작일, 종료일(반차/반반차의 경우는 필요없음), 사용 일수, 코멘트(선택 항목)를 입력합니다.
    * 휴가 신청시 남은 연차를 표시합니다.
    * 연차를 모두 사용한 경우 휴가를 신청할 수 없습니다.
    * 추가 기능: 사용 일수를 입력하는 대신 시작일, 종료일을 가지고 공휴일을 제외하고 계산해도 됩니다.
* 아직 시작하지 않은 휴가는 취소할 수 있습니다.

![img](https://user-images.githubusercontent.com/30704569/71418624-b6b98d00-26ae-11ea-9115-91be163e15b3.PNG)

* [URL wiki](https://github.com/syndersonLEE/make-request-vacation/wiki)

* 휴가 신청
   * [로그인](https://github.com/syndersonLEE/make-request-vacation/wiki/%EB%A1%9C%EA%B7%B8%EC%9D%B8) -> [휴가 신청 리스트](https://github.com/syndersonLEE/make-request-vacation/wiki/%ED%9C%B4%EA%B0%80%EC%8B%A0%EC%B2%AD%EB%A6%AC%EC%8A%A4%ED%8A%B8) -> [휴가 신청하기/조회](https://github.com/syndersonLEE/make-request-vacation/wiki/%ED%9C%B4%EA%B0%80%EC%8B%A0%EC%B2%AD%ED%95%98%EA%B8%B0-%EC%A1%B0%ED%9A%8C) -> [휴가 신청하기](https://github.com/syndersonLEE/make-request-vacation/wiki/%ED%9C%B4%EA%B0%80%EC%8B%A0%EC%B2%AD%ED%95%98%EA%B8%B0)
   
* 휴가 취소
   * [로그인](https://github.com/syndersonLEE/make-request-vacation/wiki/%EB%A1%9C%EA%B7%B8%EC%9D%B8) -> [휴가 신청 리스트](https://github.com/syndersonLEE/make-request-vacation/wiki/%ED%9C%B4%EA%B0%80%EC%8B%A0%EC%B2%AD%EB%A6%AC%EC%8A%A4%ED%8A%B8) -> [휴가상태보기](https://github.com/syndersonLEE/make-request-vacation/wiki/%ED%9C%B4%EA%B0%80%EC%83%81%ED%83%9C%EB%B3%B4%EA%B8%B0) -> [휴가 취소하기](https://github.com/syndersonLEE/make-request-vacation/wiki/%ED%9C%B4%EA%B0%80%EC%B7%A8%EC%86%8C%ED%95%98%EA%B8%B0)
