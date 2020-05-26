<template>
    <div class="board-wrap">
        <div class="board-header">
            <p>주주현황<span>Shareholders Status</span></p>
        </div>
        <p class="sub-tit">주주구성</p>
        <div class="status-box">
            <div class="graph">
                <img src="../assets/img/img_graph.png" alt="">
            </div>
            <div class="table">
            <table>
                <colgroup>
                    <col style="width:auto">
                    <col style="width:auto">
                    <col style="width:20%">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" class="first">구분</th>
                        <th scope="col" class="text-right">주식수</th>
                        <th scope="col" class="text-right">비율</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="lank1">LG 전자</span></td>
                        <td class="text-right">11,111,111</td>
                        <td class="text-right">37.9%</td>
                    </tr>
                    <tr>
                        <td><span class="lank2">외국인</span></td>
                        <td class="text-right">1,111,111</td>
                        <td class="text-right">19.5%</td>
                    </tr>
                    <tr>
                        <td><span class="lank3">국내개인</span></td>
                        <td class="text-right">888,888</td>
                        <td class="text-right">25.6%</td>
                    </tr>
                    <tr>
                        <td><span class="lank4">국내기관</span></td>
                        <td class="text-right">100,000</td>
                        <td class="text-right">7.2%</td>
                    </tr>
                    <tr>
                        <td><span class="lank5">국민연금</span></td>
                        <td class="text-right">30,000,000</td>
                        <td class="text-right">6.9%</td>
                    </tr>
                    <tr>
                        <td><span class="lank6">ADR</span></td>
                        <td class="text-right">30,000,000</td>
                        <td class="text-right">2.9%</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td class="first">합계</td>
                        <td class="text-right">43,211,110</td>
                        <td class="text-right">100.0%</td>
                    </tr>
                </tfoot>
            </table>
            </div>
        </div>
        <p class="notice-text"><span>주1)</span> 2018년 12월 31일 보통주 기준</p>
        <p class="notice-text"><span>주2)</span> 국민연금기금의 소유주식수 및 지분율은 국민연금공단이 공시한 '주식등의대량보유상황보고서' (2019년 1월 4일 공시)를 기준으로 작성하였으며<br> 현재 시점의 주식소유현황과 차이가 발생할 수 있습니다.</p>
        <!-- /.status-box -->
        <div class="allocation">
            <div class="sub-tit">배당내역
                <div class="select type01" :class="{active:isActive}" v-on:click="onToggle">
                    <span class="selectd">2019</span>
                    <ul>
                        <li class="active">2018</li>
                        <li class="">2017</li>
                        <li class="">2016</li>
                        <li class="">2015</li>
                        <li class="">2014</li>
                    </ul>
                    <!-- <ul></ul> -->
                </div>
            </div>
            <div class="table">
                <table>
                    <colgroup>
                        <col style="width:auto">
                        <col style="width:18%">
                        <col style="width:22%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th class="text-left" scope="col">구분</th>
                            <th scope="col"></th>
                            <th class="text-right" scope="col">주식종류</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">당기순이익(백만원)</td>
                            <td></td>
                            <td class="text-right">224,157</td>
                        </tr>
                        <tr>
                            <td class="text-left">배당성향</td>
                            <td></td>
                            <td class="text-right">17.8%</td>
                        </tr>
                        <tr class="group">
                            <td class="text-left">주당 현금배당(원)</td>
                            <td colspan="2">
                                <div><span>보통주</span>28,500</div>
                                <div><span>우선주</span>-</div>
                            </td>
                        </tr>
                        <tr class="group">
                            <td class="text-left">주당 주식배당(주)</td>
                            <td colspan="2">
                                <div><span>보통주</span>-</div>
                                <div><span>우선주</span>-</div>
                            </td>
                        </tr>
                        <tr class="group">
                            <td class="text-left">배당총액(백만원)</td>
                            <td colspan="3">
                                <div><span>보통주</span>34,981</div>
                                <div><span>우선주</span>4,937</div>
                                <div><span>  소계</span>39,919</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.table -->
            <p class="notice-text"><span>주1)</span>상기 (연결)당기순이익은 연결재무제표 기준 지배기업 소유주지분 기준 당기순이익이며, 현금배당성향은<br>상기 (연결)당기순이익에 대한 현금배당금총액의 비율입니다.</p>
            <p class="notice-text"><span>주2)</span>주당순이익은 연결재무제표 기준 보통주 기준입니다.</p>
        </div>
        <!-- /.allocation -->
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
.notice-text {
    position: relative;
    padding-left: 40px;
    font-size: 14px;
    line-height: 22px;
    color: #8E8E93;

    span {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        font-size: 14px;
        line-height: 22px;
    }

    +.notice-text {
        margin-top: 20px;
    }
    }
    .status-box {
    display: flex;
    margin: 85px 0 62px 0;

    .graph {
        width: calc(100% - 490px);
        text-align: center;
    }

    .table {
        width: 490px;

        table {
            border-bottom: 1px solid #D1D1D6;

            .text-right {
                text-align: right;
            }

            tbody {
                tr {
                    &:first-child {
                        td {
                            padding-top: 25px;
                        }
                    }

                    &:last-child {
                        td {
                            padding-bottom: 22px;
                        }
                    }
                }
            }

            tfoot {
                tr {
                    td {
                        padding: 17px 0;
                        font-size: 18px;
                        line-height: 26px;
                        color: #313439;
                        border-top: 1px solid #D1D1D6;

                        &.first {
                            padding-left: 32px;
                        }
                    }
                }
            }

            tr {
                th {
                    font-style: normal;
                    font-weight: normal;
                    padding-bottom: 10px;
                    font-size: 18px;
                    line-height: 26px;
                    color: #8E8E93;
                    border-bottom: 1px solid #D1D1D6;
                    text-align: left;

                    &.first {
                        padding-left: 32px;
                    }
                }

                td {
                    padding: 10px 0;
                    text-align: left;
                    font-size: 18px;
                    line-height: 26px;
                    color: #545454;
                    $colors: (lank1 : #D80546,
                            lank2 : #e2507d,
                            lank3 : #eb82a2,
                            lank4 : #313439,
                            lank5 : #8E8E93,
                            lank6 : #D1D1D6,
                        );

                    span {
                        position: relative;
                        display: inline-block;
                        position: relative;
                        padding-left: 32px;

                        &::after {
                            display: inline-block;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 14px;
                            height: 14px;
                            content: "";
                            border-radius: 100px;
                        }

                        @each $obj,
                        $color in $colors {
                            &.#{$obj} {
                                &::after {
                                    background-color: $color;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.allocation {
    margin-top: 200px;

    .sub-tit {
        margin-bottom: 68px;
    }

    .table {
        margin-bottom: 42px;
    }

    table {
        .text-right {
            text-align: right;
        }

        .text-left {
            text-align: left;
        }

        tr {
            th {
                padding: 0 14px 10px 14px;
                font-weight: normal;
                font-size: 18px;
                line-height: 26px;
                color: #8E8E93;
                border-bottom: 1px solid #C7C7CC;
            }

            td {
                padding: 15px 14px;
                font-size: 18px;
                line-height: 26px;
                color: #313439;
                text-align: center;
                border-bottom: 1px solid #C7C7CC;

                div {
                    display: flex;

                    span {
                        display: inline-block;
                        min-width: 49px;
                        text-align: right;
                        margin-right: auto;
                        color: #8E8E93;
                    }

                    +div {
                        margin-top: 50px;
                    }
                }
            }

            &.group {
                td {
                    padding: 25px 14px;

                    &:first-child {
                        vertical-align: top;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 768px) {
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
}
</style>
