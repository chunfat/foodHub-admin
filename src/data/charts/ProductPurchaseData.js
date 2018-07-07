import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Dairy',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [25, 30, 52, 39, 40, 44, 39, 60, 42, 25, 32, 31]
    },
    {
      label: 'Meat',
      backgroundColor: palette.danger,
      borderColor: palette.transparent,
      data: [10, 5, 32, 19, 25, 20, 15, 32, 20, 10, 20, 20]
    },
    {
      label: 'Fruits',
      backgroundColor: palette.warning,
      borderColor: palette.transparent,
      data: [14, 10, 22, 39, 45, 30, 45, 33, 54, 12, 24, 28]
    },
    {
      label: 'Vegetables',
      backgroundColor: palette.dark,
      borderColor: palette.transparent,
      data: [18, 9, 24, 39, 45, 23, 55, 62, 30, 24, 29, 24]
    },
    {
      label: 'Protein',
      backgroundColor: palette.success,
      borderColor: palette.transparent,
      data: [13, 15, 42, 49, 55, 30, 45, 52, 20, 30, 60, 20]
    },
    {
      label: 'Grains',
      backgroundColor: '#000',
      borderColor: palette.transparent,
      data: [15, 13, 32, 19, 25, 30, 15, 34, 35, 13, 25, 24]
    },
    {
      label: 'Oils',
      backgroundColor: palette.info,
      borderColor: palette.transparent,
      data: [35, 25, 25, 39, 55, 41, 35, 22, 24, 25, 29, 10]
    }
  ]
}
