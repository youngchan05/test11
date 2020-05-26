<template>
     <div class="board-wrap">
        <div class="board-header">
            <p>재무정보 <span>Financial Statements</span></p>
            <div class="select" :class="{active:isActive}" v-on:click="onToggle">
                <span class="selectd">2019.4Q</span>
                <ul>
                    <li class="active"><span>20</span>19.2Q</li>
                    <li><span>20</span>19.1Q</li>
                    <li><span>20</span>18.4Q</li>
                    <li><span>20</span>18.3Q</li>
                    <li><span>20</span>18.2Q</li>
                </ul>
                <!-- <ul></ul> -->
            </div>
        </div>
        <ul class="board-list">
            <li>
                재무상태표
                <button type="button" class="pdf">PDF</button>
            </li>
            <li>
                손익계산서
                <button type="button" class="pdf">PDF</button>
            </li>
            <li>
                현금흐름표
                <button type="button" class="pdf">PDF</button>
            </li>
        </ul>
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
@media screen and (max-width: 768px) {
}
</style>
