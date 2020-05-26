<template>
    <div class="sub-contents">
        <div class="sub-title">
          <strong class="tit"
            >IR 미팅예약을 위해 추가 정보를 입력해 주세요.</strong
          >
          <p class="desc">
            선택한 일정을 다시 한번 확인하시고 동행인과 탐방목적에 대해 남겨
            주시기 바랍니다.
          </p>
        </div>
        <!-- /.sub-title -->
        <div class="apply-section">
          <div class="info-list">
            <p class="tit">신청 일정</p>
            <div class="apply-info">
              <div class="box">
                <span>날짜</span>
                <p class="en">2020.06.18 <b>(목)</b></p>
              </div>
              <div class="box">
                <span>날짜</span>
                <p class="en">13:00</p>
              </div>
              <div class="box">
                <span>미팅 방식</span>
                <p>탐방 미팅</p>
              </div>
              <div class="box last">
                <span>신청인</span>
                <p>박무열 과장</p>
              </div>
            </div>
            <!-- /.apply-info -->
          </div>
          <div class="info-list add">
            <p class="tit"><button>동행인 정보</button></p>
            <ul class="add-table">
              <li class="table-head">
                <div class="col-1">이름</div>
                <div class="col-2">소속회사/기관</div>
                <div class="col-3">휴대폰</div>
                <div class="col-4">이메일</div>
                <!-- /.col -->
              </li>
              <li>
                <button type="button" class="delete">동행인1</button>
                <div class="col-1">
                  <input type="text" class="input" placeholder=" 이름" />
                </div>
                <div class="col-2">
                  <input
                    type="text"
                    class="input"
                    placeholder=" 소속회사/기관"
                  />
                </div>
                <div class="col-3">
                  <input type="text" class="input" placeholder=" 휴대폰" />
                </div>
                <div class="col-4">
                  <input type="text" class="input" placeholder=" 이메일" />
                </div>
              </li>
              <li>
                <button type="button" class="delete">동행인2</button>
                <div class="col-1">
                  <input type="text" class="input" placeholder=" 이름" />
                </div>
                <div class="col-2">
                  <input
                    type="text"
                    class="input"
                    placeholder=" 소속회사/기관"
                  />
                </div>
                <div class="col-3">
                  <input type="text" class="input" placeholder=" 휴대폰" />
                </div>
                <div class="col-4">
                  <input type="text" class="input" placeholder=" 이메일" />
                </div>
              </li>
            </ul>
            <!-- /.add-table -->
          </div>
          <div class="info-list last">
            <p class="tit">탐방목적 및 사전질문</p>
            <div class="textarea">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="input"
                placeholder="내용을 입력하세요"
              ></textarea>
              <!-- /# -->
            </div>
            <!-- /.textarea -->
          </div>
          <div class="btn-wrap">
            <button type="button" class="next">다음</button>
          </div>
        </div>
        <!-- /.seeting-section -->
      </div>
</template>
<style lang="scss">
@import "@/style/_mixin.scss";
.apply-section {
    .info-list {
        border-bottom: 1px solid #d1d1d6;

        .tit {
            font-weight: 500;
            font-size: 24px;
            line-height: 48px;
            letter-spacing: -0.5px;
            color: #313439;
            border-bottom: 1px solid #313439;
        }

        .apply-info {
            display: flex;
            flex-wrap: wrap;
            padding: 44px 20px;

            .box {
                span {
                    font-size: 16px;
                    line-height: 23px;
                    color: #545454;
                }

                p {
                    margin-top: 6px;
                    font-weight: 500;
                    font-size: 22px;
                    line-height: 26px;
                    color: #313439;

                    b {
                        font-style: normal;
                        font-weight: 500;
                        font-family: "Noto Sans KR", sans-serif;
                    }
                }

                +.box {
                    margin-left: 83px;
                }
            }
        }

        +.btn-wrap {
            border-top: none;
        }

        +.info-list {
            margin-top: 64px;
        }

        &.add {
            .tit {
                button {
                    display: inline-block;
                    padding-right: 35px;
                    @include bg(btn/btn_add, $pos: right center);
                }
            }
        }

        .add-table {
            padding: 34px 0 40px 0;

            .table-head {
                div {
                    font-size: 16px;
                    line-height: 23px;
                    display: flex;
                    letter-spacing: -0.005em;
                    color: #545454;
                }

                +li {
                    margin-top: 10px;
                }
            }

            li {
                display: flex;
                position: relative;
                padding-right: 32px;

                .input {
                    &::placeholder {
                        opacity: 0;
                    }
                }

                .delete {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    text-indent: -99999px;
                    overflow: hidden;
                    width: 16px;
                    height: 16px;
                    @include bg(btn/btn_delete);
                }

                div {
                    flex: 0 1 auto;

                    +div {
                        margin-left: 20px;
                    }

                    &.col-1 {
                        width: 138px;
                    }

                    &.col-2 {
                        width: 248px;
                    }

                    &.col-3 {
                        width: 317px;
                    }

                    &.col-4 {
                        flex: 1 1 auto;
                    }
                }

                +li {
                    margin-top: 14px;
                }
            }
        }

        .textarea {
            height: 260px;
            padding-top: 42px;

            .input {
                height: 100%;
                padding: 23px 26px;
                overflow: auto;
            }
        }

        &.last {
            border-bottom: none;
        }
    }

    .btn-wrap {
        margin-top: 60px;
        text-align: center;

        button {
            width: 150px;
            height: 56px;
            line-height: 56px;
            color: $white;
            background: #d80546;
            border-radius: 4px;
        }
    }
    }
@media screen and (max-width: 768px) {
    .apply-section {
        .info-list {
            border-bottom: none;

            .tit {
                padding-bottom: 10px;
                font-size: 20px;
                line-height: 29px;
            }

            .apply-info {
                padding: 19px 0 16px 0;

                .box {
                    span {
                        display: none;
                    }

                    p {
                        margin-top: 0;
                        font-size: 16px;
                        line-height: 23px;
                    }

                    +.box {
                        margin-left: 5px;
                    }

                    &.last {
                        display: flex;
                        width: 100%;
                        margin-left: 0;

                        span {
                            display: inline-block;
                            margin-right: 12px;
                        }
                    }
                }
            }

            .add-table {
                padding: 28px 0 0 0;

                .table-head {
                    display: none;

                    +li {
                        margin-top: 0;
                    }
                }

                li {
                    display: block;
                    padding-right: 0;

                    .input {
                        &::placeholder {
                            opacity: 1;
                        }
                    }

                    .delete {
                        position: static;
                        width: auto;
                        height: auto;
                        padding-right: 22px;
                        text-indent: 0px;
                        transform: translateY(0);
                        background-position: right center;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 23px;
                        margin-bottom: 10px;
                    }

                    div {
                        width: 100% !important;

                        +div {
                            margin: 10px 0 0 0;
                        }
                    }

                    +li {
                        margin-top: 28px;
                    }
                }
            }

            .textarea {
                padding-top: 28px;

                .input {
                    padding: 11px 10px;
                }
            }

            &.add {
                .tit {
                    button {
                        background-size: 20px;
                        padding-right: 25px;
                    }
                }
            }

            +.info-list {
                margin-top: 52px;
            }
        }

        .btn-wrap {
            margin-top: 20px;

            button {
                width: 100%;
                height: 56px;
                line-height: 56px;
            }
        }
    }
}
</style>
