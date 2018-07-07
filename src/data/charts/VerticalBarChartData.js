import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Saved',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [50, 30, 52, 39, 40, 44, 39, 60, 42, 25, 32, 31]
    },
    {
      label: 'Disposed',
      backgroundColor: palette.info,
      borderColor: palette.transparent,
      data: [10, 5, 32, 19, 25, 20, 15, 32, 20, 10, 20, 20]
    }
  ]
}
