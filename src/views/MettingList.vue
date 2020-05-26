<template>
    <div class="sub-contents type01">
        <div class="sub-title meeting">
          <strong class="tit">미팅내역</strong>
          <router-link to="/" class="page-back"></router-link>
          <!-- /. -->
        </div>
        <!-- /.sub-title -->
          <div class="side-menu">
            <div class="menu">
              <strong class="menu-tit">회원정보</strong>
              <ul class="menu-list">
                <li>
                  <router-link to="/Mypage" class="">개인정보 변경</router-link>
                </li>
                <li>
                  <router-link to="/MettingBelong" class="">소속정보 변경</router-link>
                </li>
              </ul>
            </div>
            <div class="menu">
              <strong class="menu-tit">활동정보</strong>
              <ul class="menu-list">
                <li>
                  <router-link to="/MettingList" class="active">미팅내역</router-link>
                </li>
              </ul>
            </div>
          </div>
        <!--side-menu-->
        <div class="meeting-table">
          <p class="title result">승인 완료</p>
          <ul class="table-header">
            <li class="col-1">날짜</li>
            <li class="col-2">시간</li>
            <li class="col-3">미팅방법</li>
            <li class="col-4">신청자</li>
            <li class="col-5">동행인</li>
            <li class="col-6">담당자</li>
            <li class="col-7">상태</li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="result">미팅 예정</span></li>
          </ul>
          <p class="desc">
            * 승인 완료된 일정은 변경, 취소가 불가능 합니다. 특별한 사유가
            있으신 경우 IR팀으로 연락 부탁드립니다.
          </p>
        </div>
        <div class="meeting-table">
          <p class="title wait">승인 대기</p>
          <ul class="table-header">
            <li class="col-1">날짜</li>
            <li class="col-2">시간</li>
            <li class="col-3">미팅방법</li>
            <li class="col-4">신청자</li>
            <li class="col-5">동행인</li>
            <li class="col-6">담당자</li>
            <li class="col-7">상태</li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span>승인 대기</span></li>
          </ul>
          <div class="btn-wrap">
            <button type="button" class="type-white">일정 변경</button>
            <button type="button" class="type-white" v-on:click="onToggle">일정 취소</button>
          </div>
        </div>
        <div class="meeting-table">
          <p class="title">지난 IR미팅</p>
          <ul class="table-header">
            <li class="col-1">날짜</li>
            <li class="col-2">시간</li>
            <li class="col-3">미팅방법</li>
            <li class="col-4">신청자</li>
            <li class="col-5">동행인</li>
            <li class="col-6">담당자</li>
            <li class="col-7">상태</li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00 ~ 11:30</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="result">승인 거절</span></li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00 ~ 11:30</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="">미팅 완료</span></li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00 ~ 11:30</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="">미팅 완료</span></li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00 ~ 11:30</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="">미팅 완료</span></li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00 ~ 11:30</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="">미팅 완료</span></li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00 ~ 11:30</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="">미팅 완료</span></li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00 ~ 11:30</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="">미팅 완료</span></li>
          </ul>
          <ul class="table-body">
            <li class="col-1 en">2020.04.16 (월)</li>
            <li class="col-2 en">10:00 ~ 11:30</li>
            <li class="col-3">탐방 미팅</li>
            <li class="col-4">박무열</li>
            <li class="col-5">박주민, 양효수, 전수철</li>
            <li class="col-6">유연석 차장, 박진주 대리</li>
            <li class="col-7"><span class="">미팅 완료</span></li>
          </ul>
          <div class="paging is_pc">
            <button type="button" disabled class="prev"></button>
            <div class="num">
              <button type="button" class="active">1</button>
              <button type="button" class="">2</button>
              <button type="button" class="">3</button>
              <button type="button" class="">4</button>
              <button type="button" class="more"></button>
            </div>
            <button type="button" class="next"></button>
          </div>
          <div class="more-wrap">
            <a href="#"><span>더보기</span></a>
          </div>
        </div>
        <div class="pop" :class="{active:isActive}">
        <div class="pop-inner">
          <p class="pop-title">신청된 IR미팅을 취소합니다.</p>
          <button type="button" class="pop-close" v-on:click="onToggle"></button>
          <div class="cancel-box">
            <strong>신청내용</strong>
            <p>2020.06.18 10:00</p>
            <span>탐방미팅</span><span>박무열 매니저 외 2명</span>
          </div>
          <div class="textarea">
            <textarea
              class="input scroll"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="내용을 입력하세요"
            ></textarea>
          </div>
          <div class="btn-wrap">
            <button type="button" class="type-gray2" v-on:click="onToggle">취소</button>
            <button type="button" class="type-gray">확인</button>
          </div>
        </div>
      </div>
      </div>
</template>
<script>
export default {
  data: () => {
    return {
      isActive: false
    }
  },
  methods: {
    onToggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_mixin.scss";
.meeting-table {

.title {
    padding-left: 36px;
    margin-bottom: 23px;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.005em;
    color: #313439;
    @include bg(bg/bg_check, $pos:left center);

    &.result {
        @include bg(bg/bg_check_result, $pos:left center);
    }

    &.wait {
        @include bg(bg/bg_check_wait, $pos:left center);
    }
}

.more-wrap {
    display: none;
}

.btn-wrap {
    display: flex;
    justify-content: flex-end;
    margin-top: 18px;

    button {
        width: 120px;
        height: 40px;
        border-radius: 4px;
        font-weight: 500;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        color: #545454;

        +button {
            margin-left: 10px;
        }
    }

}

.desc {
    margin-top: 13px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.005em;
    color: #8E8E93;
}

.table-header {
    li {
        padding: 8px 10px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.005em;
        color: #8E8E93;
        border-top: 1px solid #C7C7CC;
        border-bottom: 1px solid #C7C7CC;
    }
}

.table-body {
    &:last-child li {
        border-color: #C7C7CC;
    }

    li {
        padding: 13px 10px;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.005em;
        color: #545454;
        border-bottom: 1px solid #E5E5EA;

    }
}

.table-header,
.table-body {
    display: flex;
    width: 100%;

    li {

        &.col-1 {
            width: 14%;
        }

        &.col-2 {
            width: 12%;
        }

        &.col-3 {
            width: 12%;
        }

        &.col-4 {
            width: 12%;
        }

        &.col-5 {
            width: 20%;
        }

        &.col-6 {
            width: 20%;
        }

        &.col-7 {
            width: 10%;
            text-align: right;

            span {
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: -0.01em;
                color: #8E8E93;
                text-decoration: underline;

                &.result {
                    color: #D80546;

                }
            }
        }
    }
}

+.meeting-table {
    margin-top: 50px;
}

.paging {
    display: flex;
    justify-content: center;
    margin-top: 28px;

    .num {
        display: flex;
        margin: 0 16px;
        align-items: center;

        button {
            display: inline-block;
            width: 30px;
            padding: 2px 0;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            color: #8E8E93;

            &.more {
                @include bg(btn/btn_paging_more);
            }

            &.active {
                position: relative;
                color: #313439;
                font-weight: 700;

                &::after {
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    display: block;
                    width: 10px;
                    height: 2px;
                    content: "";
                    background-color: #313439;
                }
            }

            +span {
                margin-left: 15px;
            }
        }
    }

    >button {
        width: 28px;
        height: 28px;

        @each $obj in prev,
        next {
            &.#{$obj} {
                @include bg(btn/btn_paging_#{$obj}_on);

                &:disabled {
                    @include bg(btn/btn_paging_#{$obj});
                }
            }
        }
    }
}
}
.pop {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba($color:#ACACAC, $alpha: .5);
  z-index: 100;
  &.active {
    display:flex;
  }
  &-inner {
    position: relative;
    width: 512px;
    padding: 52px 33px 62px 33px;
    background: #FFFFFF;
    border-radius: 4px;
  }

  &-close {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 12px;
    height: 12px;
    @include bg(btn/btn_close_pop);
  }

  &-title {
    margin-bottom: 38px;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.005em;
    color: #313439;
  }

  .textarea {
    textarea {
      width: 100%;
      height: 220px;
      padding: 15px 16px;
      border: 1px solid #EFEFF4;
      border-radius: 4px;
    }
  }

  .cancel-box {
    margin-bottom: 14px;
    padding: 14px 20px;
    background: #F2F2F2;
    border-radius: 3px;

    strong {
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #8E8E93;
    }

    p {
      margin: 8px 0 5px 0;
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #313439;
    }

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.005em;
      color: #545454;

      +span {
        position: relative;
        margin-left: 10px;
        padding-left: 10px;

        &::after {
          display: block;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 10px;
          content: "";
          background-color: #C7C7CC;
          ;
        }
      }
    }
  }

  .form-list {
    li {
      label {
        margin-bottom: 3px;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: -0.5px;
        color: #8E8E93;
      }

      +li {
        margin-top: 23px;
      }
    }
  }

  .btn-wrap {
    display: flex;
    justify-content: center;
    margin-top: 62px;

    button {
      width: 86px;
      height: 48px;
      line-height: 48px;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      border-radius: 4px;

      +button {
        margin-left: 10px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
.meeting-table {
    .title {
        padding-left: 30px;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;
        background-size: 20px;

        &.result,
        &.wait {
            background-size: 20px;
        }
    }

    .table-header {
        display: none;
    }

    .table-body {
        flex-wrap: wrap;
        padding: 18px 0;
        border-bottom: 1px solid #E5E5EA;
        border-top: 1px solid #E5E5EA;

        li {
            padding: 0;
            border-bottom: none;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #313439;

            &.col-1,
            &.col-2,
            &.col-3 {
                width: auto;
            }

            &.col-2 {
                margin: 0 12px 0 5px;
            }

            &.col-7 {
                width: 100%;
                text-align: left;

                span {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 24px;
                }
            }

        }

        .col-4,
        .col-5,
        .col-6 {
            display: none;
        }

        +.table-body {
            border-top: none;
        }
    }

    .more-wrap {
        display: block;
        margin-top: 20px;
        text-align: center;

        a {
            span {
                display: inline-block;
                padding-right: 21px;
                font-size: 12px;
                line-height: 25px;
                background-size: auto 8px;
                color: #8e8e93;
                @include bg(btn/btn_more,$pos:right center);
            }
        }
    }

    .btn-wrap {
        button {
            width: calc(50% - 5px);
            height: 40px;
            line-height: 38px;

            +button {
                margin-left: 10px;
            }
        }
    }

    +.meeting-table {
        margin-top: 64px;
    }
}
  .pop {
    background-color:#fff;
    height:calc(100% - 56px);
    top:56px;
    &.active {
      display:block;
    }
    .pop-inner {
      width:100%;
      padding:0;
      .pop-title {
        padding:15px 0;
        font-size: 18px;
        line-height: 26px;
        margin-bottom:0;
      }
      .textarea {
        padding:0 16px;
      }
      .pop-close {
        display:none;
      }
      .btn-wrap {
        margin-top:30px;
        padding:0 16px;
        button {
          width:50%;
        }
      }
    }
  }
}
</style>
