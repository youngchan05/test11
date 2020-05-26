<template>
    <div class="sub-contents">
        <div class="sub-title register">
          <strong class="tit">기관투자자 회원가입</strong>
          <p class="desc">
            LG디스플레이 IR Page 기관투자자 대상 회원가입 페이지 입니다.<br />
            IR Page 통합 회원가입을 통해 모든 회원사의 서비스를 이용하실 수
            있습니다.
          </p>
          <div class="btn-group">
            <div class="step">
              01
              <p>이용약관</p>
            </div>
            <div class="step">
              02
              <p>본인인증</p>
            </div>
            <div class="step">
              03
              <p>개인정보</p>
            </div>
            <div class="step result active">
              <span>04</span>
              <p>가입완료</p>
            </div>
            <!-- /.step -->
          </div>
          <!-- /. -->
        </div>
        <!-- /.sub-title -->
        <div class="signUp-ressult">
          <strong>회원가입이 완료되었습니다.</strong>
          <p>
            회원가입절차가 완료되었습니다.<br />
            로그인 후 모든 서비스를 이용하실 수 있습니다.
          </p>
          <button type="button" class="type-white">IR미팅 예약하기</button>
        </div>
      </div>
</template>
<style lang="scss">
@import "@/style/_mixin.scss";
.signUp-ressult {
    padding-top: 65px;
    border-top: 1px solid #d1d1d6;
    text-align: center;

    strong {
        font-weight: bold;
        font-size: 24px;
        line-height: 44px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #313439;
    }

    p {
        margin-top: 14px;
        font-size: 16px;
        line-height: 27px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #545454;
    }

    button {
        width: 176px;
        height: 56px;
        margin-top: 40px;
        font-weight: 500;
        font-size: 16px;
        line-height: 54px;
        text-align: center;
        color: #313439;
        border-radius: 4px;
    }
}
@media screen and (max-width: 768px) {
    .signUp-ressult {
        padding-top: 0;
        border-top: none;

        strong {
            font-size: 20px;
            line-height: 24px;
        }

        p {
            margin-top: 13px;
            font-size: 14px;
            line-height: 24px;
        }

        button {
            width: 166px;
            height: 56px;
            margin-top: 20px;
            line-height: 56px;

        }
    }
}
</style>
