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
            <div class="step active">
              <span>03</span>
              <p>개인정보</p>
              <router-link to="/"></router-link>
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
        <div class="signUp-form">
          <ul>
            <li>
              <label class="tit" for="email"
                >이메일(아이디) <span>*</span></label
              >
              <input type="text" id="email" class="input" />
            </li>
            <li>
              <label class="tit" for="password">비밀번호<span>*</span></label>
              <input type="text" id="password" class="input" />
            </li>
            <li>
              <label class="tit" for="password2"
                >비밀번호 확인 <span>*</span></label
              >
              <input type="text" id="password2" class="input" />
            </li>
            <li class="half">
              <label class="tit" for="company"
                >소속회사/기관명 <span>*</span></label
              >
              <input type="text" id="company" class="input" />
            </li>
            <li class="half">
              <label class="tit right" for="num">유선번호 <span>*</span></label>
              <input type="text" id="num" class="input" />
            </li>
            <li class="half">
              <label class="tit" for="rank">직급 <span>*</span></label>
              <input type="text" id="rank" class="input" />
            </li>
            <li class="half">
              <label class="tit right" for="occupation"
                >직군 <span>*</span></label
              >
              <input type="text" id="rank" class="input" />
            </li>
          </ul>
          <div class="card-wrap">
            <strong>명함 인증</strong>
            <p>금융기관 재직정보 확인을 위해 명함 이미지 첨부가 필요합니다.</p>
            <span
              >* 정확하지 않은 정보이거나 본인의 명함이 아닐 경우 서비스 이용에
              제한을 받을 수 있습니다.</span
            >
            <button type="button" class="type-white">
              <span>명함이미지 첨부</span>
            </button>
          </div>
          <div class="btn-wrap">
            <button type="button" class="type-red">가입완료</button>
          </div>
        </div>
      </div>
</template>
<style lang="scss">
@import "@/style/_mixin.scss";
.signUp-form {
    padding-top: 37px;
    border-top: 1px solid #d1d1d6;

    ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: -18px;
        margin-bottom: 40px;
        padding-bottom: 41px;
        border-bottom: 1px solid #d1d1d6;

        li {
            position: relative;
            width: 100%;
            padding-left: 200px;
            margin-top: 18px;

            &.half {
                width: 50%;
            }

            .tit {
                position: absolute;
                left: 0;
                top: 0;
                font-weight: 500;
                font-size: 16px;
                line-height: 40px;
                letter-spacing: -0.5px;
                color: #545454;

                span {
                    color: #ea5659;
                }

                &.right {
                    left: 98px;
                }
            }

            .input {
                height: 40px;
            }
        }
    }

    .card-wrap {
        strong {
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: -0.5px;

            color: #313439;
        }

        p {
            margin-top: 10px;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.5px;

            color: #545454;
        }

        span {
            font-size: 12px;
            line-height: 18px;
            letter-spacing: -0.5px;

            color: #8e8e93;
        }

        button {
            display: block;
            margin-top: 33px;
            width: 164px;
            height: 40px;
            border-radius: 4px;

            span {
                display: inline-block;
                padding-left: 24px;
                font-weight: 700;
                font-size: 14px;
                line-height: 20px;
                color: #545454;
                @include bg(btn/btn_card, $pos: left center);
            }
        }
    }

    .btn-wrap {
        margin-top: 95px;
        text-align: center;

        button {
            width: 150px;
            height: 56px;
            line-height: 56px;
            border-radius: 4px;
        }
    }
}
@media screen and (max-width: 768px) {
    .signUp-form {
            padding-top: 0;
            border-top: none;

            ul {
                margin-top: 0;
                padding-bottom: 50px;
                margin-bottom: 25px;

                li {
                    padding-left: 0;
                    margin-top: 0;

                    .tit {
                        position: static;
                        display: inline-block;
                        margin-bottom: 8px;
                        font-size: 14px;
                        line-height: 20px;
                    }

                    &.half {
                        width: 100%;
                    }

                    +li {
                        margin-top: 20px;
                    }
                }
            }

            .card-wrap {
                strong {
                    font-size: 20px;
                    line-height: 29px;
                }

                p {
                    margin: 13px 0 6px 0;
                    font-size: 16px;
                    line-height: 24px;
                }

                span {
                    font-size: 12px;
                    line-height: 18px;
                }

                button {
                    width: 152px;
                    margin-top: 20px;
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
