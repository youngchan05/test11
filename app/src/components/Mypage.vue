<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link" v-on:click="$router.push('/')"></a>
      <strong>마이페이지</strong>
      <a href="#" class="alarm"></a>
    </div>
    <div class="content">
      <ul class="my-section">
        <li>
            <div class="myName">
              <div class="pic">
                <img src="../assets/bg/bg_user.svg" alt="">
              </div>
              <strong class="name">박무열</strong>
              <p class="phone en">010-5789-6425</p>
          </div>
        </li>
        <li>
          <a href="#" class="desc">이메일 변경</a>
        </li>
        <li>
          <a href="#" class="desc">명함 정보 재등록</a>
        </li>
      </ul>
      <ul class="my-section">
        <li>
          <strong class="tit">활동 내역</strong>
        </li>
        <li>
          <p class="desc">IR 미팅 내역</p>
          <span class="en">10</span>
        </li>
        <li>
          <p class="desc">IR담당자 문의 내역</p>
          <span class="en">4</span>
        </li>
      </ul>
      <ul class="my-section">
        <li>
          <strong class="tit">알림설정</strong>
        </li>
        <li>
          <p class="desc">IR 정보</p>
          <button type="button" class="push-btn"></button>
        </li>
        <li>
          <p class="desc">IR 미팅</p>
          <button type="button" class="push-btn on"></button>
        </li>
        <li>
          <p class="desc">문의 답변</p>
          <button type="button" class="push-btn"></button>
        </li>
      </ul>
            <ul class="my-section">
        <li>
          <strong class="tit">앱 정보</strong>
        </li>
        <li>
          <a href="#" class="desc">서비스 이용약관</a>
        </li>
        <li>
          <p class="desc">버전</p>
          <span class="en version">2.4.0</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 .wrap {
   height:100%;
   padding-top:70px;
 }
 .header {
   position: fixed;
   left:0;
   top:0;
   z-index: 50;
   background-color:#fff;
   border-bottom: 1px solid #E5E5EA;
   width:100%;
   padding-top:14px;
   padding-bottom:14px;
   text-align: center;
   .alarm {
    display:inline-block;
     position:absolute;
     right :24px;
     top:17px;
     width:24px;
     height:24px;
     background:url(../assets/btn/btn_alarm.svg) no-repeat center;
   }
   .btn-link {
     display:inline-block;
     position:absolute;
     left:24px;
     top:22px;
     width:10px;
     height:10px;
     transform: rotate(45deg);
     border:2px solid #000;
     border-top:none;
     border-right:none;
     -webkit-tap-highlight-color:transparent;
   }
   strong {
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
     }
}
.content {
  padding-bottom:46px;
}
  .btn-bottom {
    display:block;
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    padding:13px 0 53px 0;
    background-color:#E91E63;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    &.active {
      background-color:#D1D1D6;
    }
  }
  .my-section {
    &:last-child {
      li {
        &:last-child {
          border-bottom:none;
        }
      }
    }
    + .my-section {
      margin-top:53px;
    }
    li {
      position:relative;
      display:flex;
      align-items: center;
      padding:17px 23px;
      + li {
        border-top:1px solid #E5E5EA;
      }
      &:first-child {
        padding-top:0;
      }
      &:last-child {
        border-bottom:4px solid #EFEFF4;
      }
      .tit {
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        color: #8E8E93;
      }
      .desc {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        color: #313439;
        & + span.en {
        position:absolute;
        right:24px;
        top:50%;
        transform: translateY(-50%);
        }
      }
      .version {
        color:#8E8E93;
      }
      .push-btn {
        position:absolute;
        right:24px;
        top:50%;
        transform: translateY(-50%);
      }
    }
  }
  .push-btn {
    position:relative;
    width:40px;
    height:20px;
    background: #8E8E93;
    border-radius: 10px;
    &::after {
      display:block;
      position:absolute;
      left:4px;
      top:50%;
      width:12px;
      height:12px;
      background-color:#fff;
      border-radius: 50px;
      transform: translateY(-50%);
      content:"";
      transition: ease-in .2s;
    }
    &.on {
      background: #E91E63;
      &::after {
        left: calc(100% - 16px);
      }
    }
  }
  .myName {
    position: relative;
    padding-left:62px;
    .pic {
      position:absolute;
      left:0;
      top:0;
    }
    .name {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #1B1D20;
    }
    .phone {
      margin-top:5px;
      font-size: 14px;
      line-height: 16px;
      color: #8E8E93;
    }
  }
 </style>
