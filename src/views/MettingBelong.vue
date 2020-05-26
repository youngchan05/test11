<template>
<div class="sub-contents type01">
        <div class="sub-title">
          <strong class="tit">소속정보 변경</strong>
          <p class="desc type1">
            소속정보에 대한 변경이 있을 경우 소속정보 변경이 꼭 필요합니다.
          </p>
          <span class="sub"
            >* 정확하지 않은 정보이거나 본인의 명함이 아닐 경우 서비스 이용에
            제한을 받을 수 있습니다.</span
          >
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
                <a href="" class="active">소속정보 변경</a>
              </li>
            </ul>
          </div>
          <div class="menu">
            <strong class="menu-tit">활동정보</strong>
            <ul class="menu-list">
              <li>
                <a href="">IR미팅 내역</a>
              </li>
            </ul>
          </div>
        </div>
        <!--side-menu-->
        <div class="change-section">
          <div class="card-wrap">
            <p class="pic">
              <img
                src="../assets/img/KakaoTalk_20200103_214312341 2.png"
                alt=""
              />
            </p>
            <button type="butotn" class="type-white">
              명함 재등록
            </button>
          </div>
          <div class="form-wrap">
            <ul>
              <li>
                <label class="tit" for="email">이메일(아이디)</label>
                <input type="text" id="email" class="input" />
              </li>
              <li class="half">
                <label class="tit" for="company">소속회사/기관명</label>
                <input type="text" id="company" class="input" />
              </li>
              <li class="half">
                <label class="tit right" for="num">유선번호</label>
                <input type="text" id="num" class="input" />
              </li>
              <li class="half">
                <label class="tit" for="rank">직급</label>
                <input type="text" id="rank" class="input">
              </li>
              <li class="half">
                <label class="tit right" for="occupation">직군</label>
                <div class="select">
                  <span class="selectd">직군</span>
                  <ul>
                    <li>직군1</li>
                    <li>직군1</li>
                    <li>직군1</li>
                    <li>직군1</li>
                  </ul>
                </div>
                <!-- /.select -->
              </li>
            </ul>
          </div>
          <div class="btn-wrap">
            <button type="button" class="type-gray2">취소</button>
            <button type="button" class="type-gray">정보수정</button>
          </div>
        </div>
      </div>
</template>
<style lang="scss">
@import "@/style/_mixin.scss";
.change-section {
  .card-wrap {
    margin-bottom: 58px;

    .pic {
      margin-bottom: 20px;
    }

    button {
      width: 78px;
      height: 30px;
      border-radius: 2px;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #545454;
    }
  }

  .form-wrap {
    >ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: -18px;
      margin-bottom: 40px;
      padding-bottom: 41px;

      >li {
        position: relative;
        width: 100%;
        padding-left: 200px;
        margin-top: 18px;

        &.half {
          width: 50%;
        }

        .tit {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 16px;
          line-height: 40px;
          letter-spacing: -0.5px;
          color: #545454;

          &.right {
            left: 98px;
          }
        }
        .select {
          position:relative;
          width:100%;
          border: 1px solid #E5E5EA;
          box-sizing: border-box;
          border-radius: 4px;
          height:40px;
          .selectd {
            padding-left:12px;
            font-size: 16px;
            line-height: 38px;
            color: #313439;
            font-style: normal;
            font-weight: normal;
          }
          ul {
            top: 37px;
            border: 1px solid #E5E5EA;
            border-top:none;
            box-shadow: none;
            li {
                padding-left:12px;
                font-size: 16px;
                line-height: 38px;
                color: #313439;
                font-style: normal;
                font-weight: normal;
                + li {
                  margin-top:0;
                }
            }
          }
        }
        .input {
          height: 40px;
        }
      }
    }
  }

  .btn-wrap {
    display: flex;
    justify-content: center;

    button {
      width: 150px;
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      border-radius: 4px;

      +button {
        margin-left: 20px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
.change-section {
    .card-wrap {
      margin-bottom: 42px;
      text-align: center;

      .pic {
        margin-bottom: 18px;

        img {
          width: 100%;
        }
      }
    }
    .form-wrap {
      ul {
        margin-top: 0;
        padding-bottom: 0;

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
    }

    .btn-wrap {
      button {
        width: calc(50% - 5px);
        height: 48px;
        line-height: 46px;

        +button {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
