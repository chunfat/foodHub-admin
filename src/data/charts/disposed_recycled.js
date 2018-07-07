import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Disposed',
    backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
    borderColor: palette.transparent,
    data: [40, 30, 23, 39, 22, 23, 10]
  }, {
    label: 'Recycled',
    backgroundColor: utils.hex2rgb(palette.warning, 0.8).css,
    borderColor: palette.transparent,
    data: [10, 21, 25, 16, 20, 15, 19]
  }],
}
