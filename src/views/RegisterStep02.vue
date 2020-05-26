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
            <div class="step active">
              <span>02</span>
              <p>본인인증</p>
            </div>
            <div class="step">
              03
              <p>개인정보</p>
            </div>
            <div class="step">
              04
              <p>가입완료</p>
            </div>
            <!-- /.step -->
          </div>
          <!-- /. -->
        </div>
        <!-- /.sub-title -->
        <div class="certification-section">
          <strong>휴대폰 인증</strong>
          <p>
            타인의 개인정보를 도용하여 가입할 경우 서비스 이용에 제한을 받으실
            수 있습니다.
          </p>
          <button type="button" class="type-white">인증하기</button>
        </div>
      </div>
</template>
<style lang="scss">
@import "@/style/_mixin.scss";
.certification-section {
    padding-top: 37px;
    border-top: 1px solid #d1d1d6;

    strong {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.5px;
        color: #313439;
    }

    p {
        margin-top: 13px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.5px;
        color: #8e8e93;
    }

    button {
        width: 96px;
        height: 40px;
        margin-top: 18px;
        font-weight: 500;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        color: #545454;
        border-radius: 4px;
    }
}
@media screen and (max-width: 768px) {
    .certification-section {
        padding-top: 0;
        border-top: none;

        strong {
            font-size: 20px;
            line-height: 24px;
        }

        p {
            font-size: 14px;
            line-height: 24px;
        }

        button {
            width: 100%;
            height: 56px;
            line-height: 56px;
        }
    }
}
</style>
