<template>
    <div class="sub-contents type01">
        <div class="sub-title meeting">
          <strong class="tit">미팅내역</strong>
          <!-- /. -->
        </div>
        <!-- /.sub-title -->
        <div class="side-menu">
          <div class="menu">
            <strong class="menu-tit">회원정보</strong>
            <ul class="menu-list">
              <li>
                <a href="" class="">개인정보 변경</a>
              </li>
              <li>
                <a href="">소속정보 변경</a>
              </li>
            </ul>
          </div>
          <div class="menu">
            <strong class="menu-tit">활동정보</strong>
            <ul class="menu-list">
              <li>
                <a href="" class="active">IR미팅 내역</a>
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
            <button type="button" class="type-white">일정 취소</button>
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
      </div>
</template>
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
}
</style>
