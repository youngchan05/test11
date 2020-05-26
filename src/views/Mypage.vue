<template>
  <div class="sub-contents type01">
    <div class="sub-title">
      <strong class="tit">개인정보 변경</strong>
      <p class="desc">
        IR Page 통합 회원 정보이며, 본인 인증을 통해 정보를 변경하실 수
        있습니다.
      </p>
      <router-link to="/" class="page-back"></router-link>
    </div>
    <!-- /.sub-title -->
    <div class="side-menu">
      <div class="menu">
        <strong class="menu-tit">회원정보</strong>
        <ul class="menu-list">
          <li>
            <router-link to="/Mypage" class="active">개인정보 변경</router-link>
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
            <router-link to="/MettingList" class="">미팅내역</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--side-menu-->
    <div class="my-info">
      <ul>
        <li>
          <strong class="tit">이름</strong>
          <p>박무열</p>
        </li>
        <li>
          <strong class="tit">휴대폰 번호</strong>
          <p>
            <span>010-7895-8789</span
            ><button type="button" class="type-white">
              본인인증으로 정보 수정
            </button>
          </p>
        </li>
        <li>
          <strong class="tit">비밀번호</strong>
          <p>
            <span class="password">**************</span
            ><button type="button" class="type-white" v-on:click="onToggle">비밀번호 변경</button>
          </p>
        </li>
      </ul>
    </div>
    <div class="pop" :class="{active:isActive}">
        <div class="pop-inner">
          <p class="pop-title">비밀번호 변경</p>
          <button type="button" class="pop-close" v-on:click="onToggle"></button>
          <ul class="form-list">
            <li>
              <label for="password">현재 비밀번호</label>
              <input
                type="text"
                id="password"
                class="input"
                placeholder="현재 비밀번호를 입력해 주세요"
              />
            </li>
            <li>
              <label for="password1">새 비밀번호</label>
              <input
                type="text"
                id="password1"
                class="input"
                placeholder="새 비밀번호를 입력해 주세요"
              />
            </li>
            <li>
              <label for="password2">새 비밀번호 확인</label>
              <input
                type="text"
                id="password2"
                class="input"
                placeholder="현재 비밀번호를 입력해 주세요"
              />
            </li>
          </ul>
          <div class="btn-wrap">
            <button type="button" class="type-gray2">취소</button>
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
<style lang="scss" scoped>
@import "@/style/_mixin.scss";
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
.my-info {
  ul {
    li {
      position: relative;
      padding-left: 164px;

      .tit {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: -0.5px;
        color: #545454;
      }

      p {
        display: flex;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px solid #D1D1D6;

        span {
          display: inline-block;
          width: 140px;
          font-size: 16px;
          line-height: 28px;
          color: #313439;

          &.password {
            color: #8E8E93;
          }
        }

        button {
          height: 28px;
          padding: 0 10px;
          margin-left: 44px;
          border-radius: 2px;
          font-size: 12px;
          line-height: 26px;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }
      }

      +li {
        margin-top: 36px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .my-info {
    ul {
      li {
        padding-left: 0;

        .tit {
          position: static;
          font-size: 16px;
          line-height: 32px;
        }

        p {
          padding-bottom: 4px;
          margin-top: 4px;
          font-size: 16px;
          line-height: 36px;

          span {
            width: auto;
            font-size: 16px;
            line-height: 36px;
          }

          button {
            margin-left: 20px;
          }
        }
      }
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
      }
      .form-list {
        padding:0 16px;
        li {
          label {
            font-size:14px;
          }
        }
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
