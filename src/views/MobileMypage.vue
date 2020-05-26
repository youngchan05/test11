<template>
  <div class="mobile-menu">
      <div class="menu">
        <strong class="menu-tit">회원정보</strong>
        <ul class="menu-list">
          <li>
            <router-link to="/Mypage">개인정보 변경</router-link>
          </li>
          <li>
            <router-link to="/MettingBelong">소속정보 변경</router-link>
          </li>
        </ul>
      </div>
      <div class="menu">
        <strong class="menu-tit">활동정보</strong>
        <ul class="menu-list">
          <li>
            <router-link to="/MettingList">미팅내역</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="type-white">로그아웃</button>
    </div>
</template>
<script>

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@media screen and (max-width: 768px) {
  .mobile-menu {
    padding:40px 22px 0 22px;
    .menu {
      strong {
        width:100%;
        display:inline-block;
        padding-bottom:10px;
        border-bottom: 1px solid #313439;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        color: #313439;
      }
      ul {
        padding-top:17px;
        li {
          a {
            font-weight: 500;
            font-size: 16px;
            line-height: 23px;
            color: #8E8E93;
          }
          + li {
            margin-top:10px;
          }
        }
      }
      + .menu {
        margin-top:50px;
      }
    }
  }
  .type-white {
    width:100%;
    height:56px;
    margin-top:55px;
    border-radius: 4px;
    line-height:54px;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>
