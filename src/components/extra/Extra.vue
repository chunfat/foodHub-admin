<template>
  <div class="extra">
    <vuestic-widget :headerText="'extra.tabs.title' | translate" class="no-v-padding">
      <vuestic-tabs class="tabs" :names="[$t('extra.tabs.maps'), $t('extra.tabs.setupProfile'), $t('extra.tabs.overview')]">
        <div :slot="'extra.tabs.overview' | translate" class="d-flex justify-content-center">
          <overview-tab></overview-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
  .tabs {
    .overview-tab {
      .explore-row {
        display: none !important;
      }
    }

    .maps-tab {
      height: 500px;
    }
  }
</style>
