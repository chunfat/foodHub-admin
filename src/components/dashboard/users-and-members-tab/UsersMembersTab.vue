<template>
  <div class="users-member-tab dashboard-tab">
    <div class="row">
      <div class="col-md-6">
        <img src="https://i.imgur.com/jMb3tzo.png" style="width:500px;height:500px;">
      </div>
    </div>
  </div>
</template>
<script>
  import DRChartData from 'data/charts/disposed_recycled'

  export default {
    name: 'users-members-tb',

    data() {
      return {
        drChartData: DRChartData,
        apiMode: false,
        onEachSide: 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }
  .col-md-6 {
    margin: auto;
  }


</style>
