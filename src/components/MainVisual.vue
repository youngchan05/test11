<template>
<div class="visual-wrap">
    <img src="../assets/img/img_visual.png" alt="">
    <div class="text-wrap">
        <div class="inner">
            <strong>Investor Reations</strong>
            <div class="banner">
                <p class="num">14,300<span>원</span></p>
                <span class="condi up">100(+0.7%)</span>
                <p class="desc">거래량  1,816,343주<br>
                    시가총액  5,631억원</p>
                <span class="bottom">10/15 15:06 (KST) LG디스플레이 보통주</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.visual-wrap {
position: relative;
overflow: hidden;
img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1920px;
}
.text-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0 auto;
        max-width: 1150px;
        height: 100%;
        strong {
            font-size: 34px;
            line-height: 82px;
            color: #ffffff;
            text-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        }
    }
    .banner {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 274px;
        padding: 43px 0 43px 36px;
        background-color: rgba($color: #1b1d20, $alpha: 0.9);
        .num {
            margin-bottom: 8px;
            font-family: "Roboto";
            font-weight: bold;
            font-size: 34px;
            line-height: 26px;
            color: #ffffff;
            span {
                    margin-left: 4px;
                    font-size: 20px;
            }
        }
        .condi {
            display: inline-block;
            position: relative;
            padding-left: 20px;
            margin-bottom: 14px;
            font-size: 16px;
            line-height: 20px;
            color: #ffffff;
            font-family: "Roboto";
            font-weight: normal;
            &.up {
                &::after {
                    content: "▲";
                    color: #eb5757;
                }
            }
            &.down {
                &::after {
                    content: "▼";
                    color: #3083e9;
                }
            }
            &::after {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .desc {
            margin-bottom: 48px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: #ffffff;
        }

        .bottom {
            font-size: 10px;
            line-height: 20px;
            color: #ffffff;
        }
    }
}
}
@media screen and (max-width: 768px) {
    .visual-wrap {
    img {
        width: 1148px;
    }

    .text-wrap {
        .inner {
            padding-bottom: 94px;

            strong {
                font-size: 20px;
                line-height: 24px;
            }

            .banner {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                width: calc(100% - 64px);
                left: 32px;
                bottom: 20px;
                padding: 14px 20px 14px 20px;

                .desc {
                    display: none;
                }

                .condi {
                    margin: 0 0 0 8px;
                    font-size: 12px;
                    line-height: 20px;
                }

                .num {
                    margin: 0;
                    font-size: 24px;
                    line-height: 26px;
                }

                .bottom {
                    width: 100%;
                    margin-top: 0px;
                }
            }
        }
    }
}
}
</style>
