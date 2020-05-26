<template>
<div class="sub-contents type01">
        <div class="sub-title">
          <strong class="tit detail">일정 상세보기</strong>
          <router-link to="/" class="page-back"></router-link>
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
        <div class="detail-section">
          <div class="info-list">
            <p class="tit">IR미팅 일정</p>
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
              <strong class="status">승인 완료</strong>
            </div>
            <!-- /.apply-info -->
          </div>
          <div class="ask-wrap">
            <p class="tit">사전 질문</p>
            <ul class="list">
              <li>
                Q. 손상처리 관련 실적 발표 시 언급한 상각 사유 그대로
                받아들이기가 힘듦. 중소형 pO 사업에 대한 부담감 및 향후 수익확보
                어렵다는 근본적인 판단 때문 아닌가?
              </li>
              <li>
                Q. 경쟁사 QLED가 시장에서 OLED Killer application, 대항마가
                될것이란 소문?
              </li>
            </ul>
            <div class="btn-wrap is_pc">
              <button type="button">더보기</button>
            </div>
          </div>
          <div class="companion-list">
            <p class="tit">동행인 정보</p>
            <div class="companion-table">
              <ul class="table-header">
                <li class="col-1">이름</li>
                <li class="col-2">소속회사/기관</li>
                <li class="col-3">휴대폰</li>
                <li class="col-4">이메일</li>
              </ul>
              <ul class="table-body">
                <li class="col-1">박주민</li>
                <li class="col-2">미래에셋대우</li>
                <li class="col-3 en">010-4578-8512</li>
                <li class="col-4 en">joominpark@miraeasset.co.kr</li>
              </ul>
              <ul class="table-body">
                <li class="col-1">박주민</li>
                <li class="col-2">미래에셋대우</li>
                <li class="col-3 en">010-4578-8512</li>
                <li class="col-4 en">joominpark@miraeasset.co.kr</li>
              </ul>
              <ul class="table-body">
                <li class="col-1">박주민</li>
                <li class="col-2">미래에셋대우</li>
                <li class="col-3 en">010-4578-8512</li>
                <li class="col-4 en">joominpark@miraeasset.co.kr</li>
              </ul>
            </div>
          </div>
          <div class="manager-wrap">
            <p class="tit">담당자 정보</p>
            <div class="list">
              <div class="manager">
                <strong class="name"><span>유</span>유연석 차장</strong>
                <p>
                  <span>010-7127-2460</span>
                  <span>homemachine@lgdisplay.co.kr</span>
                </p>
              </div>
              <div class="manager">
                <strong class="name"><span>박</span>박진주 대리</strong>
                <p>
                  <span>010-7127-2460</span>
                  <span>homemachine@lgdisplay.co.kr</span>
                </p>
              </div>
            </div>
            <!-- /.list -->
          </div>
          <!-- /.manager-wrap -->
          <div class="place-info">
            <p class="tit">방문장소 정보</p>
            <p class="desc">
              서울특별시 영등포구 여의대로 128, LG트윈타워 <br />
              <a href="#" class="map">지도보기</a>
            </p>
            <dl>
              <dt>추가정보</dt>
              <dd>
                방문 등록을 위해 신분증을 꼭 지참해 주시고 주차 공간이 협소하여
                주차가 힘드니 대중교통을 이용해 주시기 바랍니다.
              </dd>
            </dl>
          </div>
          <!-- /.place-info -->
        </div>
      </div>
</template>
<style lang="scss">
@import "@/style/_mixin.scss";
.detail-section {
  .info-list {
    border-bottom: 1px solid #d1d1d6;

    .tit {
      padding-bottom: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.5px;
      color: #313439;
      border-bottom: 1px solid #313439;
    }

    .apply-info {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      padding: 25px 16px;

      .status {
        position: absolute;
        right: 50px;
        top: 50%;
        padding-left: 36px;
        transform: translateY(-50%);
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.005em;
        color: #313439;
        @include bg(bg/bg_check_result, $pos :left center);
      }

      .box {
        span {
          font-size: 14px;
          line-height: 20px;
          color: #8E8E93;
        }

        p {
          margin-top: 10px;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #545454;

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
  }

  .ask-wrap {
    margin-top: 50px;

    .tit {
      padding-bottom: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.5px;
      color: #313439;
      border-bottom: 1px solid #313439;
    }

    .list {
      padding: 20px 16px;

      li {
        font-size: 16px;
        line-height: 24px;
        color: #545454;
      }
    }

    .btn-wrap {
      margin-top: 8px;
      text-align: center;

      button {
        padding-right: 18px;
        font-size: 14px;
        line-height: 20px;
        color: #8E8E93;
        @include bg(arrow/arrow_more, $pos:right center);
      }
    }
  }

  .companion-list {
    margin-top: 57px;
    border-bottom: 1px solid #D1D1D6;

    .tit {
      padding-bottom: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.5px;
      color: #313439;
      border-bottom: 1px solid #313439;
    }

    .companion-table {
      padding-bottom: 26px;

      .table-header {
        li {
          padding: 8px 10px;
          font-size: 14px;
          line-height: 20px;
          color: #8E8E93;
        }
      }

      .table-body {
        li {
          padding: 10px 10px;
          font-size: 16px;
          line-height: 19px;
          color: #545454;

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
            width: 16%;
          }

          &.col-3 {
            width: 20%;
          }

          &.col-4 {
            width: 50%;
          }
        }
      }
    }
  }

  .manager-wrap {
    margin-top: 60px;

    .tit {
      margin-bottom: 40px;
      padding-bottom: 10px;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.5px;
      color: #313439;
      border-bottom: 1px solid #313439;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
    }

    .manager {
      width: calc(50% - 19px);
      padding: 25px 26px;
      border: 1px solid #E5E5EA;
      box-sizing: border-box;
      border-radius: 4px;

      .name {
        display: flex;
        align-items: center;
        margin-bottom: 22px;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;
        color: #313439;

        span {
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 12px;
          background-color: #8E8E93;
          border-radius: 100px;
          font-weight: 500;
          font-size: 12px;
          line-height: 24px;
          text-align: center;
          color: #FFFFFF;

        }
      }

      p {
        padding-left: 36px;

        span {
          width: 100%;
          display: inline-block;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #8E8E93;

          +span {
            margin-top: 6px;
          }
        }
      }

      +.manager {
        margin-left: 38px;
      }
    }
  }
}
.place-info {
  margin-top: 60px;

  .tit {
    margin-bottom: 30px;
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.5px;
    color: #313439;
    border-bottom: 1px solid #313439;
  }

  .desc {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 22px;
    color: #545454;

    br {
      display: none;
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

  dl {
    dt {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 20px;
      color: #8E8E93;
    }

    dd {
      font-size: 16px;
      line-height: 23px;
      color: #545454;
    }
  }
}
@media screen and (max-width: 768px) {
.detail-section {
    .info-list {
      border-bottom: none;

      .tit {
        padding-bottom: 10px;
        font-size: 20px;
        line-height: 29px;
      }

      .apply-info {
        padding: 19px 0 16px 0;
        border-bottom: 1px solid #E5E5EA;

        .status {
          position: static;
          padding-left: 30px;
          margin-top: 16px;
          transform: translateY(0);
          font-weight: 500;
          font-size: 20px;
          line-height: 29px;
          background-size: 20px;
        }

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
    }

    .ask-wrap {
      .tit {
        padding-bottom: 10px;
        font-size: 20px;
        line-height: 29px;
      }

      .list {
        padding: 16px 0;

        li {
          font-size: 16px;
          line-height: 160%;
        }
      }
    }

    .companion-list {
      margin-top: 10px;

      .companion-table {
        padding-bottom: 0;

        .table-header {
          display: none;
        }

        .table-body {
          position: relative;
          flex-wrap: wrap;
          padding: 16px 0 16px 100px;

          li {
            padding: 0;
            font-size: 12px;
            line-height: 17px;

            &.col-1 {
              position: absolute;
              left: 0;
              top: 16px;
              font-weight: 500;
              font-size: 16px;
              line-height: 23px;
            }

            &.col-3 {
              margin-left: 10px;
            }

            &.col-4 {
              width: 100%;
              margin-top: 5px;
            }

            &.col-1,
            &.col-2,
            &.col-3 {
              width: auto;
            }

          }

          &+.table-body {
            border-top: 1px solid #E5E5EA;
          }
        }
      }
    }

    .manager-wrap {
      margin-top: 47px;

      .tit {
        margin-bottom: 0;
        padding-bottom: 10px;
        font-size: 20px;
        line-height: 29px;
      }

      .list {
        border-bottom: 1px solid #E5E5EA;

        .manager {
          position: relative;
          width: 100%;
          padding: 16px 0 16px 100px;
          border: none;

          .name {
            position: absolute;
            left: 0;
            top: 16px;
            padding-left: 0;
            font-weight: 500;
            font-size: 16px;
            line-height: 23px;

            span {
              display: none;
            }
          }

          p {
            padding-left: 0;

            span {
              font-size: 12px;
              line-height: 14px;
            }
          }

          +.manager {
            margin-left: 0;
            border-top: 1px solid #E5E5EA;
          }
        }
      }
    }

    .place-info {
      margin-top: 47px;

      .tit {
        margin-bottom: 24px;
        padding-bottom: 10px;
        font-size: 20px;
        line-height: 29px;
      }

      .desc {
        margin-bottom: 20px;

        br {
          display: block;
        }

        .map {
          margin-left: auto;
        }
      }
    }
  }
  .place-info {
      margin-top: 47px;

      .tit {
        margin-bottom: 24px;
        padding-bottom: 10px;
        font-size: 20px;
        line-height: 29px;
      }

      .desc {
        margin-bottom: 20px;

        br {
          display: block;
        }

        .map {
          margin-left: auto;
        }
      }
    }
}
</style>
