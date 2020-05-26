<template>
<div class="app-down" :class="{active:isActive}">
    <div class="inner">
    <strong>주주와 함께하는 LG디스플레이</strong>
    <p>LG디스플레이 IR앱에서 투자정보/소식을 받아보고,<br>
    IR담당자와 소통할 수 있습니다. </p>
    <button tpye="button" class="btn-down type-red">앱 다운로드</button>
    <button type="button" class="close" v-on:click="onToggle">모바일 웹에서 계속보기</button>
    </div>
    <!-- /.inner -->
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
<style lang="scss" scoped>
.app-down {
  display: none;
  align-items: flex-end;
  position: fixed;
  width:100%;
  height:100%;
  left:0;
  bottom:0;
  z-index: 100;
  background-color:rgba($color: #000000, $alpha: .6);
  .inner {
    width:100%;
    padding:47px 16px 40px 16px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    strong {
      font-size: 20px;
      line-height: 25px;
      text-align: center;
      letter-spacing: -0.005em;
      color: #313439;
    }
    p {
      margin:6px 0 26px 0;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      letter-spacing: -0.005em;
      color: #545454;
    }
    .btn-down  {
      width:100%;
      height:48px;
      margin-bottom:13px;
      border-radius: 4px;
      font-size: 16px;
      line-height: 48px;
      text-align: center;
      color: #FFFFFF;
    }
    .close {
      font-size: 14px;
      line-height: 20px;
      color: #8E8E93;
    }
  }
}
@media screen and (max-width: 768px) {
  .app-down {
    &.active {
        display:none;
    }
  }
}
</style>
