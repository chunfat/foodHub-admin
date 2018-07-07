<template>
  <div class="row bottom-widgets">
    <div class="col-md-6 d-flex">
      <vuestic-widget class="no-h-padding no-v-padding">
        <vuestic-feed :initialPosts="posts"></vuestic-feed>
      </vuestic-widget>
    </div>
    <div class="col-md-6 d-flex">
      <vuestic-widget class="business-posts">
        <vuestic-social-news class="vuestic-social-news" :news="news" :url="'http://instagram.com/smartapant'"></vuestic-social-news>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard-bottom-widgets',

    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
