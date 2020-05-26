<template>
  <div>
    <div class="header-wrap" v-if="!isChecked">
    <div class="top">
      <router-link class="meeting" to="/Metting">미팅예약</router-link>
      <a href="#" class="company">회사소개</a>
      <div class="app">
        <button type="button">앱다운로드</button>
        <div class="app-box">
            <div class="googlePlay">
              <p>안드로이드</p>
              <img src="../assets/img/img_googlePlay.png" alt="">
            </div>
            <div class="appStore">
              <p>아이폰</p>
              <img src="../assets/img/img_appStore.png" alt="">
            </div>
            <!-- /.app -->
        </div>
        <!-- /.app-box -->
      </div>
      <span>
        <a href="#" class="active">KOR</a>
        <a href="#">ENG</a>
      </span>
    </div>
    <!--top-->
    <div class="gnb">
      <button type="button" class="menu" :class="{active:isActive}" v-on:click="onToggle"></button>
      <h1 class="log">
        <img src="../assets/logo/logo_logo.png" alt />
      </h1>
      <button type="button" class="mypage"></button>
      <div class="list" :class="{active:isActive}">
        <ul>
          <li class="tit">Investor Reations</li>
          <li>
            <router-link to="/">IR 일정</router-link>
          </li>
          <li>
            <router-link to="/">실적발표</router-link>
          </li>
          <li>
            <router-link to="/">IR Notice</router-link>
          </li>
          <li>
            <router-link to="/">뉴스클리핑</router-link>
          </li>
          <li>
            <router-link to="/">경영보고서</router-link>
          </li>
          <li>
            <router-link to="/">재무정보</router-link>
          </li>
          <li>
            <router-link to="/">주주현황</router-link>
          </li>
          <li>
            <router-link to="/">FAQ</router-link>
          </li>
        </ul>
      </div>
      <!-- /.list -->
    </div>
  </div>
    <router-view/>
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
.header-wrap {
  width: 100%;
  background-color: $white;
  border-bottom:1px solid #C7C7CC;
  .top {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: 1150px;

    > a {
      display: block;
      padding-left: 18px;
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;
      color: $gray;

      + a {
        margin-left: 22px;
      }

      @each $obj in meeting, company {
        &.#{$obj} {
          @include bg(bg/bg_#{$obj}, $pos: left center);
        }
      }
    }

    .app {
      position:relative;
      margin-left: 22px;
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;
      color: $black;
      button {
        padding-right:11px;
        @include bg(bg/bg_app,$pos:right center);
      }
      .app-box {
        position:absolute;
        left:50%;
        top:30px;
        transform: translateX(-50%);
        width:280px;
        padding:21px 0 26px 22px;
        border: 1px solid #8E8E93;
        box-sizing: border-box;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        z-index: 10;
        background-color:#FFFFFF;
        div  {
          img {
            margin-left:12px;
          }
          + div  {
            margin-top:18px;
          }
          p {
          margin-bottom:14px;
          font-weight: 500;
          font-size: 12px;
          line-height: 17px;
          color: #545454;
        }
        }
      }
    }

    span {
      display: flex;
      margin-left: 22px;

      a {
        font-weight: 500;
        font-size: 12px;
        line-height: 28px;
        color: $black;
        opacity: 0.5;

        + a {
          position: relative;
          padding-left: 10px;
          margin-left: 10px;

          &::after {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 10px;
            background-color: rgba($color: $black, $alpha: 0.5);
            content: "";
          }
        }

        &.active {
          opacity: 1;
        }
      }
    }
  }
}
.gnb {
display: flex;
margin: 22px auto;
max-width: 1150px;
align-items: center;
  h1 {
    margin-right: auto;
  }
  ul {
    display: flex;
    li {
      &.tit {
        display: none;
      }
      +li {
        margin-left: 33px;
      }
      a {
        font-size: 16px;
        line-height: 28px;
        color: $gray;
      }
    }
  }
}
@media screen and (max-width: 768px) {
.header-wrap {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  border-bottom:none;
  .top {
    display: none;
  }
  .gnb {
    display: flex;
    margin: 0;
    padding: 16px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    h1 {
      width: 100%;
      margin: 0;
      text-align: center;

      img {
        height: 21px;
      }
    }
    button {
      width: 24px;
      height: 24px;

      @each $obj in menu,
      mypage {
        &.#{$obj} {
          @include bg(btn/btn_#{$obj});
        }
      }
    }
    .list {
      display: none;
      position: fixed;
      left: 0;
      top: 56px;
      width: 100%;
      height: calc(100% - 56px);
      background: rgba($color: #000000, $alpha: .6);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
      z-index: 10;
      &.active {
        display: block;
      }
    }
    ul {
      display: block;
      padding: 40px;
      background: #FFFFFF;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 10px 10px;
      li {
        a {
          font-size: 18px;
          line-height: 28px;
          color: #313439;
          font-weight: 500;
        }
        &.tit {
          display: block;
          padding-bottom: 3px;
          margin-bottom: 30px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 25px;
          color: #545454;
          border-bottom: 1px solid #E5E5EA;

          +li {
            margin-top: 0;
          }
        }
        +li {
          margin-left: 0;
          margin-top: 17px;
        }
      }
    }
  }
}
}
</style>
