<template>
  <div>
  <MainVisual/>
    <div class="contents">
      <Events/>
      <Qer/>
      <Notice/>
      <News/>
      <Report/>
      <Financial/>
      <Disclosure/>
      <Status/>
      <Faq/>
      <Contact/>
    </div>
    <MobileApp/>
  </div>
</template>

<script>
import MainVisual from '@/components/MainVisual.vue'
import Events from '@/components/Events.vue'
import Qer from '@/components/Qer.vue'
import Notice from '@/components/Notice.vue'
import News from '@/components/News.vue'
import Report from '@/components/Report.vue'
import Financial from '@/components/Financial.vue'
import Disclosure from '@/components/Disclosure.vue'
import Status from '@/components/Status.vue'
import Faq from '@/components/Faq.vue'
import Contact from '@/components/Contact.vue'
import MobileApp from '@/components/MobileApp.vue'

export default {
  name: 'main',
  components: {
    MainVisual,
    Events,
    Qer,
    Notice,
    News,
    Report,
    Financial,
    Disclosure,
    Status,
    Faq,
    Contact,
    MobileApp
  }
}
</script>
<style lang="scss" scoped>
.contents {
padding-top: 202px;
margin: 0 auto;
max-width: 1150px;
}
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
.contents {
    padding: 45px 16px 192px 16px;
  }
  .app-down {
    display:flex;
  }
}
</style>
