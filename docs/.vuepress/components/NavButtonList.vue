<template>
  <div class="nav-button-list">
    <ul class="btn-list">
      <li class="btn-item"><router-link class="router-link" to="/成语俗话/中华名言.html">成语俗语</router-link></li>
      <li class="btn-item"><router-link class="router-link" to="/文摘语录/楹联巧对.html">文摘语录</router-link></li>
      <li class="btn-item"><router-link class="router-link" to="/诗词歌赋/企业家宣言.html">诗词歌赋</router-link></li>
      <li class="btn-item"><router-link class="router-link" to="/兴趣作品/论学习.html">兴趣作品</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.btn-list
  list-style none
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  .btn-item
    width 300px
    margin-bottom 10px
    text-align center
    line-height 40px
    border 1px solid green
    border-radius 20px
    cursor pointer
    &:hover
      background lightgreen
    .router-link
      display block
</style>