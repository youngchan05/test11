<template>
    <div class="board-wrap">
        <div class="board-header">
            <p>IR 일정 <span>Events</span></p>
            <div class="select is_pc" :class="{active:isActive}" v-on:click="onToggle">
                <span class="selectd">2020</span>
                <ul>
                    <li>2019</li>
                    <li>2018</li>
                    <li>2017</li>
                    <li>2016</li>
                </ul>
            </div>
        </div>
        <ul class="board-list news">
            <li>
                <div class="cal-box">
                    <strong>21</strong>
                    APR
                </div>
                <p class="news">JP Morgan Korea Conference<br>
                    <span class="num">2020.04.21<em>D-38</em></span>
                </p>
                <button type="button" class="pdf is_pc">PDF</button>
            </li>
            <li>
                <div class="cal-box">
                    <strong>31</strong>
                    MAR
                </div>
                <p class="news">2020년 1/4분기 국내 로드쇼<br>
                    <span class="num">2020.03.31<span>여의도 콘래드호텔</span><em>D-12</em></span>
                </p>
                <button type="button" class="url is_pc">URL</button>
            </li>
            <li>
                <div class="cal-box over">
                    <strong>16</strong>
                    MAR
                </div>
                <p class="news">2020년 1/4분기 실적발표 컨퍼런스콜<br>
                    <span class="num">2020.04.21</span>
                </p>
                <button type="button" class="pdf is_pc">PDF</button>
            </li>
        </ul>
        <div class="more-wrap">
            <a href="#"><span>더보기</span></a>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_mixin.scss";
.board-wrap {
    border-top: 2px solid #313439;
.sub-tit {
    position: relative;
    padding-bottom: 9px;
    font-size: 32px;
    line-height: 52px;
    color: #313439;
    border-bottom: 1px solid #D1D1D6;
    .select {
        position: absolute;
        right: 0;
        top: 0;
    }
}
.board-header {
    position: relative;
    padding-bottom: 134px;
    .sns {
        display: flex;
        position: absolute;
        right: 0;
        top: 40px;

        a {
            display: block;
            width: 40px;
            height: 40px;

            @each $obj in home,
            blog,
            instagram,
            facebook,
            twitter,
            youtube{
                &.#{$obj} {
                    @include bg(icon/icon_#{$obj});
                }
            }

            +a {
                margin-left: 24px;
            }
        }
    }
    >p {

        padding-top: 36px;
        font-family: Roboto;
        font-weight: bold;
        font-size: 46px;
        line-height: 52px;
        color: #313439;

        span {
            display: block;
            margin-top: 14px;
            font-family: Roboto;
            font-weight: normal;
            font-size: 16px;
            line-height: 26px;
            color: #8e8e93;
        }
    }

    .select {
        position: absolute;
        right: 0;
        bottom: 53px;
    }
}

.board-list {
    &.news {
        li {
            padding-left:100px;
        }
    }
    li {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 35px 100px 35px 20px;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -0.5px;
        color: #313439;

        button {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            padding-left: 36px;
            font-size: 18px;
            line-height: 26px;
            color: #d80546;
            cursor: pointer;

            @each $obj in url,
            pdf {
                &.#{$obj} {
                    @include bg(btn/btn_#{$obj}, $pos: left center);
                }
            }
        }

        .news {
            position: relative;
            padding-right: 70px;
            font-size: 20px;
            line-height: 29px;
            letter-spacing: -0.5px;
            color: #1b1d20;

            em {
                position: absolute;
                right: 0;
                top: 0;
                font-family: Roboto;
                font-size: 20px;
                line-height: 34px;
                color: #d80546;
                font-style: normal;
            }

            .num {
                display: block;
                width: 100%;
                font-size: 16px;
                line-height: 19px;
                color: #8e8e93;

                span {
                    margin-left: 8px;
                }
            }
        }

        .cal-box {
            position:absolute;
            left:0;
            top:50%;
            transform: translateY(-50%);
            display: inline-block;
            width: 70px;
            height: 70px;
            margin-right: 26px;
            padding: 12px 0;
            background: #ffffff;
            border: 1px solid #e5e5ea;
            border-radius: 4px;
            font-family: Roboto;
            font-weight: bold;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            letter-spacing: 0.2px;
            color: $gray;

            &.over {
                background: #f2f2f2;
            }

            strong {
                display: block;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 32px;
                text-align: center;
                letter-spacing: -0.4px;
                color: $gray;
            }
        }

        .date {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #8e8e93;
        }

        +li {
            border-top: 1px solid #d1d1d6;
        }

        &:first-child {
            border-top: 1px solid #d1d1d6;
        }

        &:last-child {
            border-bottom: 1px solid #d1d1d6;
        }
    }

    &.category-wrap {
        li {
            padding-left: 132px;

            .category {
                position: absolute;
                left: 20px;
                top: 50%;
                transform: translateY(-50%);
                display: inline-block;
                width: 132px;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -0.5px;
                color: #8e8e93;
            }
        }
    }
}

.more-wrap {
    margin-top: 56px;
    text-align: center;

    a {
        display: inline-block;
        width: 200px;
        height: 48px;
        border: 1px solid #c7c7cc;
        box-sizing: border-box;
        border-radius: 4px;

        span {
            display: inline-block;
            padding-right: 21px;
            font-size: 16px;
            line-height: 48px;
            color: #8e8e93;
            @include bg(btn/btn_more, $pos: right center);
        }
    }
}

+.board-wrap {
    margin-top: 188px;
}
}
@media screen and (max-width: 768px) {
.is_pc {
    display: none !important;
}
.wrap {
    padding-top: 56px;
}
.input {
    font-size: 14px;
    line-height: 20px;
}
.board-wrap {
    border-top: 0;

    .board-header {
        padding-bottom: 0;

        >p {
            padding-top: 0;
            font-size: 32px;
            line-height: 34px;
            margin-bottom: 30px;

            span {
                margin-top: 13px;
                font-weight: 300;
                font-size: 12px;
                line-height: 22px;

            }
        }

        .select{
            position: relative;
            border: none;
            box-shadow: none;
            width: 100%;
            height: auto;
            left: 0;
            bottom: 0;

            .selectd {
                display: none;
            }

            ul {
                display: flex;
                position:static;
                padding:0;
                border:none;
                box-shadow: none;
                li {
                    flex: 1 1 auto;
                    padding:0 0 13px 0;
                    text-align: center;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 20px;
                    color: #8E8E93;

                    span {
                        display: none;
                    }

                    &.active {
                        font-weight: 700;
                        color: #313439;
                        border-bottom: 1px solid #313439;
                    }
                    &:hover {
                        background:transparent;
                    }
                }
            }
        }

        .sns {
            position: static;
            padding-top: 24px;
            margin-top: 24px;
            border-top: 1px solid #EFEFF4;
            justify-content: center;

            a {
                width: 30px;
                height: 30px;
                background-size: 30px auto !important;

                +a {
                }
            }
        }
    }

    // border-top:8px solid  #EFEFF4;
    .board-list {
        &.news {
            li {
                padding-left:70px;
            }
        }
        li {
            padding: 24px 10px;
            font-size: 16px;
            line-height: 22px;

            .cal-box {
                width: 56px;
                height: 56px;
                margin-right: 20px;

                strong {
                    font-size: 22px;
                    line-height: 22px;

                    span {
                        font-size: 10px;
                        line-height: 12px;
                    }
                }
            }

            .news {
                padding-right: 0;
                font-size: 16px;
                line-height: 23px;

                .num {
                    font-size: 10px;
                    line-height: 12px;
                }

                em {
                    position: static;
                    margin-left: 6px;
                    font-size: 10px;
                    line-height: 12px;
                }
            }

            button {
                width: 24px;
                height: 24px;
                right: 16px;
                padding-left: 0;
                text-indent: -99999px;
                overflow: hidden;
                background-position: center;
            }

            .date {
                position: static;
                display: block;
                width: 100%;
                margin-top: 10px;
                font-size: 10px;
                line-height: 12px;
                transform: translateY(0);
            }
        }

        &.category-wrap {
            li {
                padding-left: 10px;

                .category {
                    position: static;
                    transform: translateY(0);
                    width: auto;
                    margin-top: 10px;
                    margin-right: 10px;
                    font-size: 10px;
                    line-height: 12px;
                }

                .date {
                    width: auto;
                }
            }
        }
    }

    .more-wrap {
        margin-top: 12px;

        a {
            border: none;
            width: auto;
            height: auto;

            span {
                font-size: 12px;
                line-height: 25px;
                background-size: auto 8px;
            }
        }
    }

    +.board-wrap {
        position: relative;
        margin-top: 45px;
        padding-top: 45px;

        &::after {
            display: block;
            position: absolute;
            left: -16px;
            top: 0;
            width: calc(100% + 32px);
            height: 8px;
            content: "";
            background-color: #EFEFF4;
        }
    }

    .sub-tit {
        padding-bottom: 0;
        margin-bottom: 24px;
        font-size: 22px;
        line-height: 25px;
        border-bottom: none;

        .select {
            position: static;
            border: none;
            box-shadow: none;
            width: 100%;
            height: auto;
            left: 0;
            bottom: 0;
            margin-top: 28px;

            .selectd {
                display: none;
            }

            ul {
                position:static;
                display: flex;
                border:none;
                box-shadow: none;
                li {
                    flex: 1 1 auto;
                    padding-bottom: 13px;
                    text-align: center;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 20px;
                    color: #8E8E93;
                    border-bottom: 1px solid #D1D1D6;

                    span {
                        display: none;
                    }
                    &:hover {
                        background-color:transparent;
                    }
                    &.active {
                        font-weight: 700;
                        color: #313439;
                        border-bottom: 1px solid #313439;
                    }
                }
            }
        }
    }

    .notice-text {
        padding-left: 20px;
        font-weight: 300;
        font-size: 10px;
        line-height: 16px;

        span {
            font-weight: 300;
            font-size: 10px;
            line-height: 16px;
        }

        +.notice-text {
            margin-top: 4px;
        }
    }

    .status-box {
        display: block;
        margin-top: 0;
        margin-bottom: 20px;

        .graph {
            width: 100%;
            margin-bottom: 32px;

            img {
                width: 100%;
            }
        }

        .table {
            width: 100%;

            table {
                tfoot {
                    tr {
                        td {
                            &:first-child {
                                padding: 10px;
                            }
                        }
                    }
                }

                tr {

                    th,
                    td {
                        padding: 10px;
                        font-size: 14px;
                        line-height: 20px;
                    }

                    td {
                        span {
                            padding-left: 15px;

                            &::after {
                                width: 8px;
                                height: 8px;
                            }
                        }
                    }
                }
            }
        }
    }

    .allocation {
        margin-top: 60px;

        .table {
            width: 100%;

            table {
                tr {

                    th,
                    td {
                        padding: 10px;
                        font-size: 14px;
                        line-height: 20px;
                    }

                    &.group {
                        td {
                            div+div {
                                margin-top: 30px;
                            }
                        }
                    }
                }
            }
        }
    }

    .toggle-list {
        li {
            .toggle-title {
                padding: 16px 32px;
                font-size: 18px;
                line-height: 22px;
                background-position: right 0 center;

                span {
                    width: 24px;
                    height: 24px;
                    font-size: 14px;
                    line-height: 18px;
                }
            }

            .toggle-cont {
                padding: 0 0 42px 16px;

                .info {
                    dt {
                        font-size: 14px;
                        line-height: 18px;
                    }

                    dd {
                        margin-top: 8px;
                        font-size: 14px;
                        line-height: 20px;

                        +dt {
                            margin-top: 26px;
                        }
                    }
                }
            }
        }
    }
}
}
</style>
