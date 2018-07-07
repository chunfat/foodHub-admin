import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'In Stock',
    backgroundColor: utils.hex2rgb(palette.primary, 0.4).css,
    borderColor: palette.transparent,
    data: [60, 59, 40, 54, 59, 60, 74]
  }, {
    label: 'Sold',
    backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
    borderColor: palette.transparent,
    data: [30, 20, 25, 30, 21, 25, 17]
  }]
}
