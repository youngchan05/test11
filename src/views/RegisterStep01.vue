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
            <div class="step active">
              <span>01</span>
              <p>이용약관</p>
            </div>
            <div class="step">
              <span>02</span>
              <p>본인인증</p>
            </div>
            <div class="step">
              <span>03</span>
              <p>개인정보</p>
            </div>
            <div class="step">
              <span>04</span>
              <p>가입완료</p>
            </div>
            <!-- /.step -->
          </div>
          <!-- /. -->
        </div>
        <!-- /.sub-title -->
        <div class="agree-section">
          <div class="check-box">
            <span class="checkbox">
              <input type="checkbox" />
              <span>전체 약관에 동의합니다.</span>
            </span>
          </div>
          <div class="agree-box">
            <strong class="tit">회원 이용약관</strong>
            <div class="agree-text scroll">
              회사는 IR정보 제공 및 기관투자자 미팅접수를 위하여 아래와 같은
              개인정보를 수집하고 있습니다. 본 이용약관은 아이알큐더스(이하
              "회사")가 “IR PAGE”(이하 "서비스")를 통하여 제공하는 모든 서비스의
              이용조건과 운영에 관한 제반사항 규정을 목적으로 합니다. ① 운영자는
              이용회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할
              경우에는 가급적빨리 처리하여야 합니다. 다만, 개인적인 사정으로
              신속한 처리가 곤란한 경우에는 사후에공지 또는 이용회원에게 쪽지,
              전자우편 등을 보내는 등 최선을 다합니다. ② 운영자는 계속적이고
              안정적인 사이트 제공을 위하여 설비에 장애가 생기거나 유실된 때에는
              이를 지체 없이 수리 또는 복구할 수 있도록 사이트에 요구할 수
            </div>
            <span class="checkbox">
              <input type="checkbox" />
              <span>회원 이용약관에 대해서 동의합니다. <b>*</b></span>
            </span>
          </div>
          <div class="agree-box">
            <strong class="tit"
              >개인정보 수집 및<br class="is_pc" />
              이용에 대한 안내</strong
            >
            <div class="agree-text scroll">
              회사는 IR정보 제공 및 기관투자자 미팅접수를 위하여 아래와 같은
              개인정보를 수집하고 있습니다. 본 이용약관은 아이알큐더스(이하
              "회사")가 “IR PAGE”(이하 "서비스")를 통하여 제공하는 모든 서비스의
              이용조건과 운영에 관한 제반사항 규정을 목적으로 합니다. ① 운영자는
              이용회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할
              경우에는 가급적빨리 처리하여야 합니다. 다만, 개인적인 사정으로
              신속한 처리가 곤란한 경우에는 사후에공지 또는 이용회원에게 쪽지,
              전자우편 등을 보내는 등 최선을 다합니다. ② 운영자는 계속적이고
              안정적인 사이트 제공을 위하여 설비에 장애가 생기거나 유실된 때에는
              이를 지체 없이 수리 또는 복구할 수 있도록 사이트에 요구할 수
            </div>
            <span class="checkbox">
              <input type="checkbox" />
              <span>개인정보 이용 약관에 대해서 동의합니다. <b>*</b></span>
            </span>
          </div>
          <div class="agree-box">
            <strong class="tit">3자정보제공</strong>
            <div class="agree-text scroll">
              회사는 IR정보 제공 및 기관투자자 미팅접수를 위하여 아래와 같은
              개인정보를 수집하고 있습니다. 본 이용약관은 아이알큐더스(이하
              "회사")가 “IR PAGE”(이하 "서비스")를 통하여 제공하는 모든 서비스의
              이용조건과 운영에 관한 제반사항 규정을 목적으로 합니다. ① 운영자는
              이용회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할
              경우에는 가급적빨리 처리하여야 합니다. 다만, 개인적인 사정으로
              신속한 처리가 곤란한 경우에는 사후에공지 또는 이용회원에게 쪽지,
              전자우편 등을 보내는 등 최선을 다합니다. ② 운영자는 계속적이고
              안정적인 사이트 제공을 위하여 설비에 장애가 생기거나 유실된 때에는
              이를 지체 없이 수리 또는 복구할 수 있도록 사이트에 요구할 수
            </div>
            <span class="checkbox">
              <input type="checkbox" />
              <span>3자정보제공에 대해서 동의합니다. <b>*</b></span>
            </span>
          </div>
          <div class="btn-wrap">
            <button type="button" class="type-gray">다음</button>
          </div>
        </div>
      </div>
</template>
<style lang="scss">
@import "@/style/_mixin.scss";
.agree-section {
    .check-box {
        padding: 20px 0;
        margin-bottom: 52px;
        text-align: center;
        border: 1px solid #8e8e93;
        box-sizing: border-box;
        border-radius: 4px;

        span {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.5px;
        }
    }

    .agree-box {
        position: relative;
        padding-left: 294px;

        .tit {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 22px;
            line-height: 32px;
            letter-spacing: -0.5px;
            color: #313439;
        }

        .agree-text {
            height: 152px;
            overflow: auto;
            margin-bottom: 16px;
            padding-bottom: 13px;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.5px;
            color: #8e8e93;
            white-space: pre-line;
            border-bottom: 1px solid #d1d1d6;
        }

        .checkbox {
            margin-top: 16px;

            span {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: -0.5px;
                color: #545454;

                b {
                    color: #ea5659;
                }
            }
        }

        +.agree-box {
            margin-top: 93px;
        }
    }

    .btn-wrap {
        margin-top: 90px;
        text-align: center;

        button {
            width: 156px;
            height: 60px;
            font-weight: 500;
            font-size: 16px;
            line-height: 58px;
            background: #313439;
            border-radius: 4px;
        }
    }
    }
@media screen and (max-width: 768px) {
    .agree-section {
        .check-box {
            padding: 15px 0;
        }

        .agree-box {
            padding-left: 0;

            .tit {
                position: static;
                font-size: 20px;
                line-height: 24px;
                color: #313439;
            }

            .agree-text {
                margin: 13px 0 28px 0;
                font-size: 12px;
                line-height: 17px;
            }

            +.agree-box {
                margin-top: 50px;
            }
        }

        .btn-wrap {
            margin-top: 42px;

            button {
                width: 100%;
                height: 56px;
                line-height: 56px;
            }
        }
    }
}
</style>
