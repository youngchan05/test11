<template>
    <div class="board-wrap">
        <div class="board-header">
            <p>FAQ <span>Frequently Asked Questions</span></p>
        </div>
        <ul class="toggle-list">
            <li>
                <button class="toggle-title active">
                    <span>1</span>기업정보
                </button>
                <div class="toggle-cont active"> <!--활성화시 클래스 active 추가해주시면됩니다.-->
                    <dl class="info">
                        <dt>LG디스플레이 창립연도</dt>
                        <dd>LG디스플레이는 1987년 TFT-LCD 개발을 시작으로 OLED, IPS 등의 차별화 기술을 통해, 혁신적인 디스플레이 및 관련 제품을 생산/ 판매하는 글로벌 디스플레이 회사입니다.</dd>
                        <dt>신용등급 정보</dt>
                        <dd>LG디스플레이는 해외 유수 평가기관인 무디스(Moody's) 및 S&P로부터 장기 외화채권에 대한 신용등급 평가를 받고 있습니다. 2016년말 현재 무디스(Moody's)의 삼성전자 평가등급은 AA-, 투자전망은 안정적(Stable)이고, S&P의 LG디스플레이 평가등급은 AA-이며 투자 전망은 안정적(Stable)입니다.</dd>
                        <dt>일반 조명용 올레드 사업 철수</dt>
                        <dd>신규 OLED 생산 라인에서 제품 양산을 시작한 지 1년 6개월여 만에 일반 조명용 올레드 사업에서 철수하기로 결정하였습니다. 대신 성장성이 큰 차량용 올레드 시장에 집중하기로 하였습니다.</dd>
                        <dt>LG디스플레이 이사회구성</dt>
                        <dd>LG디스플레이 이사회는 사외이사 6명을 포함한 총 11명의 이사로 구성되어 있습니다.</dd>
                    </dl>
                </div>
                <!-- /.toggle-cont -->
            </li>
            <li>
                <button class="toggle-title">
                    <span>2</span>주식관련사항
                </button>
            </li>
            <li>
                <button class="toggle-title">
                    <span>3</span>재무관련사항
                </button>
            </li>
            <li>
                <button class="toggle-title">
                    <span>4</span>신규사업관련사항
                </button>
            </li>
        </ul>
        <!-- /.toggle-list -->
    </div>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_mixin.scss";
.toggle-list {
li {
    border-bottom: 1px solid #C7C7CC;

    .toggle-title {
        position: relative;
        width: 100%;
        padding: 40px 0 40px 54px;
        font-weight: 700;
        font-size: 26px;
        line-height: 22px;
        color: #313439;
        text-align: left;
        @include bg(arrow/arrow_toggle, $type:svg, $pos: right 30px center);

        span {
            display: inline-block;
            position: absolute;
            left: 0;
            top: 50%;
            width: 36px;
            height: 36px;
            border: 3px solid #313439;
            transform: translateY(-50%);
            font-weight: bold;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            color: #313439;
            border-radius: 100px;
        }

        &.active {
            @include bg(arrow/arrow_toggle_up, $type:svg, $pos: right 30px center);
        }
    }

    .toggle-cont {
        display: none;
        padding: 0 0 60px 54px;

        .info {
            dt {
                font-weight: 700;
                font-size: 19px;
                line-height: 21px;
                color: #313439;
            }

            dd {
                margin-top: 20px;
                font-size: 16px;
                line-height: 24px;
                color: #8E8E93;

                +dt {
                    margin-top: 40px;
                }
            }
        }

        &.active {
            display: block;
        }
    }

    &:first-child {
        border-top: 1px solid #C7C7CC;
    }
}
}
@media screen and (max-width: 768px) {
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
</style>
