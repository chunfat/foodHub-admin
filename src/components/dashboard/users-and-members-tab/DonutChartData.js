import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Sold', 'In stock'],
  datasets: [{
    label: 'Percentage of units',
    backgroundColor: [palette.info, palette.warning, palette.primary],
    data: [33, 67]
  }]
}
