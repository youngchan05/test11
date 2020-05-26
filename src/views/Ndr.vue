<template>
    <div>
        <div class="sub-contents">
            <div class="sub-title">
                <strong class="tit">NDR 및 행사 관리 페이지</strong>
                <p class="desc">
                    해당 페이지는 LG디스플레이 담당자가 권한을 부여한 대상자만 사용가능한 페이지입니다.
                </p>
            </div>
        <!-- /.sub-title -->
            <ul class="event-info">
                <li>
                    <span class="tit">목적</span>
                    2020년 2분기 경영실적발표
                </li>
                <li>
                    <span class="tit">기간</span>
                    2020.07.20 ~ 2020.07.24
                </li>
                <li>
                    <span class="tit">요청사항</span>
                    5일간 국내기관 대상으로 진행하려고 합니다.<br>
                    해당 기간동안 하루 5타임 정도 괜찮을 것 같구요. 동선 고려하여 잡아주시기 바랍니다..<br>
                    저희쪽은 세명씩 로테이션으로 참석 예정입니다.
                </li>
            </ul>
            <div class="tab-section">
                <div class="tabs">
                    <button type="button" class="active">07/20 (월)</button>
                    <button type="button">07/21 (화)</button>
                    <button type="button">07/22 (수)</button>
                    <button type="button">07/23 (목)</button>
                    <button type="button">07/24 (금)</button>
                </div>
            </div>
            <div class="add-section">
                <div class="table-wrap">
                    <table>
                        <colgroup>
                            <col style="width:100px;">
                            <col style="width:350px;">
                            <col style="width:auto">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>시간</th>
                                <th>기관명</th>
                                <th>참석자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" class="input">
                                </td>
                                <td>
                                    <input type="text" class="input">
                                </td>
                                <td>
                                    <div class="input-set">
                                        <input type="text" class="input">
                                        <button type="button"></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                    <ul class="add-list">
                                        <li>
                                            <input type="text" class="input col-1" value="박무열" disabled>
                                            <input type="text" class="input col-2" value="미래에셋대우" disabled>
                                            <input type="text" class="input col-3" value="010-9569-4812" disabled>
                                            <input type="text" class="input col-4" value="sminseok.sul@hotmail.com" disabled>
                                            <button type="button" class="delete"></button>
                                        </li>
                                        <li>
                                            <input type="text" class="input col-1" placeholder="이름">
                                            <input type="text" class="input col-2" placeholder="소속">
                                            <input type="text" class="input col-3" placeholder="번호">
                                            <input type="text" class="input col-4" placeholder="이메일">
                                            <button type="button" class="delete"></button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-wrap">
                    <table>
                        <colgroup>
                            <col style="width:100px;">
                            <col style="width:350px;">
                            <col style="width:auto">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>시간</th>
                                <th>기관명</th>
                                <th>참석자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" class="input">
                                </td>
                                <td>
                                    <input type="text" class="input">
                                </td>
                                <td>
                                    <div class="input-set">
                                        <input type="text" class="input">
                                        <button type="button"></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                    <ul class="add-list">
                                        <li>
                                            <input type="text" class="input col-1" value="박무열" disabled>
                                            <input type="text" class="input col-2" value="미래에셋대우" disabled>
                                            <input type="text" class="input col-3" value="010-9569-4812" disabled>
                                            <input type="text" class="input col-4" value="sminseok.sul@hotmail.com" disabled>
                                            <button type="button" class="delete"></button>
                                        </li>
                                        <li>
                                            <input type="text" class="input col-1" placeholder="이름">
                                            <input type="text" class="input col-2" placeholder="소속">
                                            <input type="text" class="input col-3" placeholder="번호">
                                            <input type="text" class="input col-4" placeholder="이메일">
                                            <button type="button" class="delete"></button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn-wrap">
                    <button type="button" class="btn-add"></button>
                </div>
            </div>
            <div class="btn-wrap">
                <button type="button" class="type-gray2">취소</button>
                <button type="button" class="type-black">확인</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/style/_mixin.scss";
.event-info {
    padding:25px 0 31px 0;
    margin-bottom:70px;
    border-top: 1px solid #D1D1D6;
    border-bottom: 1px solid #D1D1D6;
    li {
        position:relative;
        padding-left:104px;
        font-size: 18px;
        line-height: 26px;
        color: #545454;
        span {
            position: absolute;
            left:0;
            top:0;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
            color: #313439;
        }
        + li {
            margin-top:16px;
        }
    }
}
.tab-section {
    display:flex;
    margin-bottom:10px;
    border-bottom:1px solid #D1D1D6;
    button {
        position:relative;
        padding-bottom:4px;
        font-weight: 500;
        font-size: 20px;
        line-height: 48px;
        color: #8E8E93;
        + button {
            margin-left:35px;
        }
        &.active {
            color: #313439;
             &::after {
                position: absolute;
                left:0;
                bottom:0;
                width:100%;
                height:1px;
                content:"";
                display:block;
                background-color:#313439;
            }
        }
    }
}
.add-section {
    .btn-wrap {
        margin-top:50px;
        padding-top:32px;
        border-top:1px solid #D1D1D6;
        text-align: center;
        .btn-add {
            width:32px;
            height:32px;
            @include bg(btn/btn_plus);
        }
    }
}
.table-wrap {
    .add-list {
        padding:12px 0;
        li {
            position:relative;
            padding-right:32px;
            display:flex;
            input {
                padding:0 10px;
                + input {
                    margin-left:10px;
                }
                &:disabled {
                    background: #F2F2F2;
                }
                &.col-1 {
                    width:90px;
                }
                &.col-2 {
                    width:164px;
                }
                &.col-3 {
                    width:128px;
                }
            }
            + li {
                margin-top:6px;
            }
            button {
                position: absolute;
                right:0;
                top:50%;
                transform: translateY(-50%);
                width:18px;
                height:18px;
                @include bg(btn/btn_delete);
            }
        }
    }
    .input-set {
        position:relative;
        button {
            position: absolute;
            right:0;
            top:0;
            height:40px;
            width:40px;
            @include bg(bg/bg_person_add);
            border-left:1px solid #e5e5ea;
        }
    }
    table {
        tr {
            th {
                padding-bottom:7px;
                font-style: normal;
                font-weight: normal;
                text-align: left;
                font-size: 14px;
                line-height: 18px;
                color: #545454;
            }
            td {
                padding-right:25px;
                .input {
                    height:40px;
                }
                &:last-child {
                    padding-right:0;
                }
            }
        }
    }
    & + .table-wrap {
        padding-top:40px;
        margin-top:42px;
        border-top: 1px solid #D1D1D6;
    }
}
.btn-wrap {
    display:flex;
    justify-content: center;
    margin-top:150px;
    button {
        width:150px;
        height:56px;
        font-weight: 500;
        font-size: 16px;
        line-height: 54px;
        border-radius: 4px;
        + button {
            margin-left:14px;
        }
    }
}
</style>
