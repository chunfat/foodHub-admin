import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
      borderColor: palette.transparent,
      data: [40, 39, 30, 34, 29, 50, 44]
    },
    {
      label: 'Returned Customer',
      backgroundColor: utils.hex2rgb(palette.info, 0.8).css,
      borderColor: palette.transparent,
      data: [30, 20, 25, 30, 21, 25, 20]
    }
  ],
}
