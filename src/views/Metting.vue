<template>
    <div>
            <div class="banner-top">
        <span>현재 <strong>일정변경</strong> 중입니다. <button type="button">변경취소</button></span>
    </div>
    <div class="sub-contents">
        <div class="sub-title">
          <strong class="tit">편리하게 IR 미팅을 예약하 실 수 있습니다.</strong>
          <p class="desc">
            LG디스플레이는 기관투자자들과의 원활한 소통을 위해 온라인으로 IR
            미팅예약을 진행하고 있습니다.<br />
            현재일부터 90일까지의 스퀘쥴이 노출 됩니다.
          </p>
          <div class="btn-group">
            <button type="button" class="type-white">마이페이지</button>
            <button type="button" class="type-gray2">로그아웃</button>
          </div>

          <!-- 로그인 아닐경우 <div class="btn-group">
                <button type="button" class="type-white">회원가입</button>
                <button type="button" class="type-gray">로그인</button>
            </div> -->
          <!-- /. -->
        </div>
        <!-- /.sub-title -->
        <div class="meeting-section">
          <p class="tit">미팅예약</p>
          <div class="inner">
            <div class="calendar-wrap">
              <div class="calendar-header">
                <button type="button" class="prev">prev</button
                ><strong class="date">2020.06</strong
                ><button type="button" class="next">next</button>
              </div>
              <div class="calendar">
                <ul class="week">
                  <li>일</li>
                  <li>월</li>
                  <li>화</li>
                  <li>수</li>
                  <li>목</li>
                  <li>금</li>
                  <li>토</li>
                </ul>
                <ul class="day">
                  <li>
                    <span class="disabled">1</span>
                  </li>
                  <li>
                    <span class="today">2 <b>오늘</b></span>
                  </li>
                  <li>
                    <span class="selected">3</span>
                  </li>
                  <li>
                    <span>4</span>
                  </li>
                  <li>
                    <span class="disabled">5</span>
                  </li>
                  <li>
                    <span>6</span>
                  </li>
                  <li>
                    <span class="disabled">7</span>
                  </li>
                  <li>
                    <span class="disabled">8</span>
                  </li>
                  <li>
                    <span class="">9</span>
                  </li>
                  <li>
                    <span>10</span>
                  </li>
                  <li>
                    <span>12</span>
                  </li>
                  <li>
                    <span>13</span>
                  </li>
                  <li>
                    <span class="disabled">14</span>
                  </li>
                  <li>
                    <span class="disabled">15</span>
                  </li>
                  <li>
                    <span class="disabled">16</span>
                  </li>
                  <li>
                    <span class="">17</span>
                  </li>
                  <li>
                    <span class="disabled">18</span>
                  </li>
                  <li>
                    <span>19</span>
                  </li>
                  <li>
                    <span class="disabled">20</span>
                  </li>
                  <li>
                    <span>21</span>
                  </li>
                  <li>
                    <span class="disabled">22</span>
                  </li>
                  <li>
                    <span class="disabled">23</span>
                  </li>
                  <li>
                    <span class="">24</span>
                  </li>
                  <li>
                    <span>25</span>
                  </li>
                  <li>
                    <span class="disabled">26</span>
                  </li>
                  <li>
                    <span>27</span>
                  </li>
                  <li>
                    <span>28</span>
                  </li>
                  <li>
                    <span class="disabled">29</span>
                  </li>
                  <li>
                    <span class="disabled">30</span>
                  </li>
                  <li>
                    <span class="">31</span>
                  </li>
                </ul>
                <button type="button" class="time">
                  Japan, Korea Time(14:33)
                </button>
              </div>
            </div>
            <!-- /.calendar-wrap -->
            <div class="calendar-date">
              <div class="date-wrap">
                <dl class="is_pc">
                  <dt>선택 날짜</dt>
                  <dd>2020.06.12 <span>(목)</span></dd>
                </dl>
                <dl>
                  <dt>미팅 시간</dt>
                  <dd>
                    <button type="button" disabled class="type-white">
                      09:00
                    </button>
                    <button type="button" class="type-white selected">
                      13:00
                    </button>
                    <button type="button" class="type-white">15:00</button>
                  </dd>
                </dl>
              </div>
              <!-- /.time-wrap -->
            </div>
          </div>
          <!-- /.inner -->
          <div class="meeting-select">
            <p class="tit">미팅방식</p>
            <div class="tab">
              <span class="active">탐방미팅</span>
              <div class="list active">
                  <!--list 노출시 클래스 active 추가해주시면됩니다.-->
                <button type="button" class="type-white selected">
                  탐방 미팅
                </button>
                <button type="button" class="type-white">화상 미팅</button>
                <button type="button" class="type-white">컨퍼런스콜</button>
              </div>
            </div>
            <!-- /.tab -->
            <!--tab 활성화시 클래스 active 추가해주시면됩니다.-->
            <div class="tab-cont active">
              <p class="tab-tit">
                미팅 확정 이후 해당일에 회사로 직접방문하여 미팅을 진행합니다.
              </p>
              <dl>
                <dt>방문장소</dt>
                <dd>
                  서울특별시 영등포구 여의대로 128, LG트윈타워
                  <a href="#" class="map">지도보기</a>
                </dd>
                <dt>추가정보</dt>
                <dd>
                  방문 등록을 위해 신분증을 꼭 지참해 주시고 주차 공간이
                  협소하여 주차가 힘드니 대중교통을 이용해 주시기 바랍니다.
                </dd>
              </dl>
            </div>
            <div class="tab-cont">
              <p class="tab-tit">
                미팅 확정 이후 해당일에 온라인으로 미팅을 진행합니다.
              </p>
              <dl>
                <dt>화상미팅룸 접속방법</dt>
                <dd>
                  <p>
                    메일로 전송된 URL을 통해 접속합니다. (미팅 시작일 1일 전
                    안내 메일이 발송됩니다.)
                  </p>
                  <p>
                    * 화상미팅을 사용하기 위한 인터넷 환경이 필요합니다. 크롬
                    브라우저
                  </p>
                  <p>
                    * 모바일로 접속 가능하지만, ios의 경우 앱 다운로드가
                    필요합니다.
                  </p>
                </dd>
              </dl>
            </div>
            <div class="tab-cont">
              <p class="tab-tit">
                미팅 확정 이후 해당일에 전화통화로 미팅을 진행합니다.
              </p>
              <dl>
                <dt>컨퍼런스콜 정보</dt>
                <dd>02-3773-1114</dd>
                <dt>추가정보</dt>
                <dd>
                  방문 등록을 위해 신분증을 꼭 지참해 주시고 주차 공간이
                  협소하여 주차가 힘드니 대중교통을 이용해 주시기 바랍니다.
                </dd>
              </dl>
            </div>
            <!-- /.tab-cont -->
          </div>
          <!-- /.meeting-select -->
          <div class="btn-wrap">
            <button type="button" class="next">다음</button>
          </div>
        </div>
        <!-- /.seeting-section -->
        <!-- /.btn-wrap -->
      </div>
    </div>
</template>

<style lang="scss">
@import "@/style/_mixin.scss";
    .banner-top {
    padding: 20px 0;
    background-color: #fff7e3;
    text-align: center;

    span {
        display: inline-block;
        padding-left: 22px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.005em;
        color: #313439;
        @include bg(bg/bg_info, $pos: left center);

        strong {
            color: #3083e9;
            font-style: normal;
            font-weight: normal;
        }

        button {
            color: #ea5659;
            text-decoration: underline;
        }
    }
}
.sub-contents {
    max-width: 1150px;
    margin: 0 auto;
    padding: 68px 0 56px 0;
    .page-back {
        display:none;
    }
    .sub-title {
        position: relative;
        margin-bottom: 98px;
        &.meeting {
            margin-bottom: 54px;
            .tit {
                margin-bottom: 0;
            }
        }

        .tit {
            display: inline-block;
            margin-bottom: 15px;
            font-weight: bold;
            font-size: 28px;
            line-height: 44px;
            letter-spacing: -0.5px;
            color: #313439;

            &.detail {
                margin-bottom: 0;
                padding-left: 42px;
                font-size: 24px;
                line-height: 35px;
                letter-spacing: -0.5px;
                color: #8E8E93;
                @include bg(bg/bg_title_detail, $pos :left center);
            }

        }

        .sub {
            display: inline-block;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: -0.5px;
            color: #8E8E93;
        }

        .desc {
            font-size: 16px;
            line-height: 28px;
            letter-spacing: -0.5px;
            color: #8e8e93;
            font-weight: normal;

            &.type1 {
                color: #545454;
            }
        }

        .btn-group {
            display: flex;
            position: absolute;
            right: 0;
            top: 0;
            .step {
                width: 88px;
                height: 88px;
                padding-top: 20px;
                background: #f2f2f2;
                font-family: Roboto;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                color: #313439;
                border-radius: 100px;
                a {
                    display:none;
                }
                p {
                    font-family: "Noto Sans KR";
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                }
                +.step {
                    position: relative;
                    margin-left: 26px;

                    &::after {
                        display: block;
                        position: absolute;
                        left: -25px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 24px;
                        height: 24px;
                        content: "";
                        @include bg(arrow/arrow_step);
                    }
                }

                &.active {
                    background: #313439;
                    color: #ffffff;
                }
            }

            button {
                width: 144px;
                height: 40px;
                font-weight: 500;
                font-size: 14px;
                line-height: 38px;
                border-radius: 4px;

                +button {
                    margin-left: 8px;
                }
            }
        }
    }

    &.type01 {
        position: relative;
        padding-left: 222px;
    }

    .side-menu {
        position: absolute;
        left: 0;
        top: 68px;

        .menu {
            width: 180px;

            &-tit {
                display: inline-block;
                width: 100%;
                padding-bottom: 10px;
                padding-left: 22px;
                font-weight: 500;
                font-size: 16px;
                line-height: 23px;
                color: #313439;
                border-bottom: 1px solid #E5E5EA;
                box-sizing: border-box;
            }

            &-list {
                padding: 10px 0 0 20px;

                li {
                    a {
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 20px;
                        align-items: center;
                        color: #8E8E93;

                        &.active {
                            color: #D80546;
                        }
                    }

                    +li {
                        margin-top: 10px;
                    }
                }
            }

            &+.menu {
                margin-top: 58px;
            }
        }
    }
    }

    .meeting-section {
    >.tit {
        font-weight: 500;
        font-size: 24px;
        line-height: 48px;
        letter-spacing: -0.5px;
        color: #313439;
        border-bottom: 1px solid #313439;
    }

    .inner {
        display: flex;
        padding: 38px 0 62px 0;
        margin-bottom: 53px;
        border-bottom: 1px solid #d1d1d6;
    }

    .calendar-wrap {
        width: 662px;
        padding: 0 54px;
        border-right: 1px solid #c7c7cc;

        .calendar-header {
            display: flex;
            justify-content: center;
            margin-bottom: 33px;

            .date {
                margin: 0 23px;
                font-family: Roboto;
                font-weight: 500;
                font-size: 22px;
                line-height: 32px;
                color: #313439;
            }

            button {
                width: 32px;
                height: 32px;
                border: 1px solid #d1d1d6;
                text-indent: -999999px;
                overflow: hidden;

                @each $obj in prev,
                next {
                    &.#{$obj} {
                        @include bg(btn/btn_#{$obj});
                    }
                }
            }
        }

        .calendar {
            .week {
                display: flex;
                padding-bottom: 12px;
                margin-bottom: 20px;
                border-bottom: 1px solid #c7c7cc;

                li {
                    width: calc(100% / 7);
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                    color: #313439;
                }
            }

            .day {
                display: flex;
                flex-wrap: wrap;
                margin-top: -23px;

                li {
                    width: calc(100% / 7);
                    margin-top: 23px;
                    text-align: center;

                    span {
                        display: inline-block;
                        width: 62px;
                        height: 62px;
                        padding-top: 10px;
                        font-family: Roboto;
                        font-size: 16px;
                        line-height: 19px;
                        color: #313439;
                        cursor: pointer;

                        &.disabled {
                            font-family: Roboto;
                            font-size: 16px;
                            line-height: 19px;
                            text-align: center;
                            color: #c7c7cc;
                            opacity: 0.9;
                            cursor: default;
                        }

                        &.today {
                            position: relative;
                            color: rgba($color: #4da1ff, $alpha: 0.9);

                            b {
                                display: block;
                                margin-top: 4px;
                                font-weight: 500;
                                font-size: 12px;
                                line-height: 17px;
                                text-align: center;
                                color: #4da1ff;
                            }
                        }

                        &.selected {
                            background: $gray;
                            border-radius: 2px;
                            color: $white;
                        }
                    }
                }
            }
        }

        .time {
            position: relative;
            padding: 0 14px 0 22px;
            margin-top: 24px;
            font-family: Roboto;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: -0.005em;
            text-transform: capitalize;
            color: $gray;
            @include bg(bg/bg_map, $pos: left center);

            &::after {
                display: block;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 9px;
                height: 9px;
                content: "";
                @include bg(arrow/arrow_map, $pos: left center);
            }
        }
    }

    .calendar-date {
        width: calc(100% - 662px);
        padding: 0 46px;
    }

    .date-wrap {
        dl {
            dt {
                margin-bottom: 12px;
                font-size: 16px;
                line-height: 23px;
                color: $gray;
            }

            dd {
                font-family: Roboto;
                font-weight: 500;
                font-size: 22px;
                line-height: 24px;
                color: $gray;

                span {
                    font-weight: 500;
                }

                button {
                    width: 100%;
                    height: 54px;
                    line-height: 52px;
                    border-radius: 2px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;

                    &:disabled {
                        border-color: #f2f2f2;
                        background-color: #f2f2f2;
                        color: #c7c7cc;
                        cursor: default;
                    }

                    &.selected {
                        background: $gray;
                        color: $gray;
                        color: $white;
                    }

                    +button {
                        margin-top: 14px;
                    }
                }
            }

            +dl {
                margin-top: 54px;
            }
        }
    }

    .info-text {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        strong {
            display: inline-block;
            padding-top: 74px;
            font-weight: 500;
            font-size: 22px;
            line-height: 32px;
            display: flex;
            color: $gray;
            @include bg(bg/bg_alert, $pos: center top);
        }

        p {
            text-align: center;
            margin-top: 12px;
            font-size: 16px;
            line-height: 23px;
            color: $gray;
        }
    }

    .meeting-select {
        border-bottom: 1px solid #d1d1d6;

        .tit {
            margin-bottom: 16px;
            font-size: 16px;
            line-height: 23px;
            display: flex;
            color: #545454;
        }

        .tab {
            .active {
                display: none;
            }

            .list {
                display: flex;
                margin-bottom: 37px;

            }

            button {
                width: calc(33.333% - 9.3333px);
                height: 48px;
                line-height: 46px;
                border-radius: 2px;

                +button {
                    margin-left: 14px;
                }

                &.selected {
                    background-color: $gray;
                    border-color: $gray;
                    color: $white;
                }
            }
        }

        .tab-cont {
            display:none;
            padding-bottom: 53px;

            .tab-tit {
                margin-bottom: 48px;
                font-weight: 500;
                font-size: 20px;
                line-height: 29px;
                letter-spacing: -0.005em;
                color: #545454;
            }

            dl {
                dt {
                    margin-bottom: 7px;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.005em;
                    color: #8e8e93;
                }

                dd {
                    font-size: 16px;
                    line-height: 22px;
                    letter-spacing: -0.01em;
                    color: #545454;

                    p {
                        font-size: 16px;
                        line-height: 22px;
                        letter-spacing: -0.01em;
                        color: #545454;
                    }

                    +dt {
                        margin-top: 24px;
                    }

                    .map {
                        display: inline-block;
                        margin-left: 6px;
                        font-size: 14px;
                        line-height: 20px;
                        letter-spacing: -0.005em;
                        text-transform: capitalize;
                        color: #4da1ff;
                    }
                }
            }
            &.active {
                display:block;
            }
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
            background: #313439;
            border-radius: 4px;
        }
    }
}
@media screen and (max-width: 768px) {
    .sub-contents {
        padding: 24px 24px 54px 24px;
        .page-back  {
            display:block;
            position:absolute;
            left:0;
            top:50%;
            transform: translateY(-50%);
            width:24px;
            height:24px;
            @include bg(arrow/arrow_step, $type:svg, $pos:left center);
        }
        &.type01 {
            padding-left: 24px;
            .side-menu {
                display: none;
            }

            .sub-title {
                position: relative;
                margin-top: -24px;

                >.desc {
                    display: none;
                }

                &.meeting {
                    margin-bottom: 42px;
                }

                .sub {
                    display: none;
                }

                .tit,
                &.detail {
                    display: inline-block;
                    width: 100%;
                    padding: 15px 0;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 26px;
                    text-align: center;
                    color: #313439;
                    border-bottom: 1px solid #E5E5EA;
                    background:none;
                }
            }
        }

        .sub-title {
            margin-bottom: 42px;

            &.register {
                position: relative;
                margin-top: -24px;
                margin-bottom: 28px;

                .tit,
                .desc {
                    display: none;
                }
                .step {
                    display: none;
                    &.active {
                        position: relative;
                        display: block;
                        width: 100%;
                        height: auto;
                        padding: 0;
                        border-radius: 0;
                        background-color: $white;

                        span {
                            display: none;
                        }

                        p {
                            padding: 15px 0;
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 26px;
                            text-align: center;
                            color: #313439;
                            border-bottom: 1px solid #E5E5EA;
                        }
                        a {
                            position:absolute;
                            left:0;
                            top:50%;
                            transform: translateY(-50%);
                            display:block;
                            width:24px;
                            height:24px;
                            @include bg(arrow/arrow_step, $type:svg, $pos:left center);
                        }
                        &.result {
                            p {
                                background: none;
                            }
                        }
                    }

                    +.step {
                        margin-left: 0;
                        padding-left: 0;
                        overflow: hidden;
                    }
                }
            }

            .tit {
                margin-bottom: 0;
                font-size: 20px;
                line-height: 26px;
            }

            .desc {
                margin: 10px 0 16px;
                font-size: 14px;
                line-height: 20px;
            }

            .btn-group {
                display: block;
                position: static;

                button {
                    width: 100%;
                    font-size: 14px;

                    +button {
                        margin-left: 0;
                        margin-top: 8px;
                    }

                }
            }
        }

        .meeting-section {
            .tit {
                padding-bottom: 10px;
                font-size: 20px;
                line-height: 29px;
            }

            .inner {
                display: block;
                padding: 0;
                margin: 0;
                border-bottom: none;
            }

            .calendar-wrap {
                width: 100%;
                padding: 40px 14px 0 14px;
                border-right: none;

                .calendar-header {
                    button {
                        width: 24px;
                        height: 24px;
                        background-size: 24px auto;
                    }

                    .date {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                .calendar {
                    .week {
                        li {
                            font-size: 12px;
                            line-height: 17px;
                        }
                    }

                    .day {
                        margin-top: -14px;

                        li {
                            margin-top: 14px;

                            span {
                                width: 40px;
                                height: 40px;
                                font-size: 14px;
                                line-height: 16px;

                                &.today {
                                    b {
                                        margin-top: 0;
                                        font-size: 9px;
                                        line-height: 13px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .calendar-date {
                width: 100%;
                margin-top: 25px;
                padding: 0;

                .info-text {
                    strong {
                        font-size: 16px;
                        line-height: 18px;
                    }

                    p {
                        font-size: 14px;
                        line-height: 16px;
                    }
                }
            }

            .date-wrap {
                margin-bottom: 32px;

                dl {
                    dt {
                        margin-bottom: 8px;
                        font-size: 14px;
                        line-height: 26px;
                    }

                    dd {
                        button {
                            height: 40px;
                            font-size: 16px;
                            line-height: 40px;

                            +button {
                                margin-top: 12px;
                            }
                        }
                    }
                }
            }

            .meeting-select {
                border-bottom: none;

                .tit {
                    padding-bottom: 0;
                    margin-bottom: 8px;
                    font-size: 14px;
                    line-height: 26px;
                }

                .tab {
                    position: relative;
                    height: 40px;
                    margin-bottom: 18px;
                    border: 1px solid #D1D1D6;
                    border-radius: 2px;

                    @include bg(arrow/arrow_select3, $pos :right 10px center);
                    background-size: 10px auto;

                    .list {
                        display:none;
                        position: absolute;
                        left:-1px;
                        top:0;
                        width:calc(100% + 2px);
                        background: #FFFFFF;
                        border: 1px solid #313439;
                        border-radius: 4px;
                        padding:18px 0 18px 13px;
                        margin:0;
                        button {
                            width:100%;
                            height:auto;
                            font-size: 16px;
                            line-height: 16px;
                            text-align: left;
                            border:none;
                            background-color: none;
                            color: #545454;
                            &.selected {
                                background-color:#fff;
                            }
                            + button{
                                margin:19px 0 0 0 ;
                            }
                        }
                        &.active {
                            display:block;
                        }
                    }

                    span.active {
                        display: block;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        padding-left: 13px;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 38px;
                        color: #545454;
                    }
                }

                .tab-cont {
                    padding-bottom: 0;

                    .tab-tit {
                        margin-bottom: 23px;
                        font-size: 14px;
                        line-height: 20px;
                    }

                    dl {
                        dt {
                            margin-bottom: 6px;
                            font-size: 14px;
                            line-height: 20px;
                        }

                        dd {
                            font-size: 14px;
                            line-height: 22px;

                            p {

                                font-size: 14px;
                                line-height: 22px;
                            }

                            .map {
                                font-size: 12px;
                                line-height: 22px;
                                margin-left: 2px;
                                ;
                            }

                            +dt {
                                margin-top: 20px;
                            }
                        }
                    }
                }
            }

            .btn-wrap {
                margin-top: 34px;

                button {
                    width: 100%;
                    border: 1px solid #313439;
                    height: 48px;
                    font-size: 16px;
                    line-height: 46px;
                    color: #313439;
                    background-color: $white;
                }
            }
        }

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
