<template>

  <vuestic-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span slot="logo" class="i-vuestic"></span>
    <span slot="center">
      
    </span>
    <message-dropdown/>
    <notification-dropdown/>
    <language-dropdown/>
    <profile-dropdown>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/PICA.jpg/768px-PICA.jpg"/>
    </profile-dropdown>
  </vuestic-navbar>

</template>

<script>
  import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
  import HeaderSelector from './components/HeaderSelector'
  import LanguageDropdown from './components/dropdowns/LanguageDropdown'
  import ProfileDropdown from './components/dropdowns/ProfileDropdown'
  import NotificationDropdown from './components/dropdowns/NotificationDropdown'
  
  export default {
    name: 'app-navbar',

    components: {
      VuesticNavbar,
      HeaderSelector,
      NotificationDropdown,
      LanguageDropdown,
      ProfileDropdown
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      valueProxy: {
        get () {
          return this.isOpen
        },
        set (opened) {
          this.$emit('toggle-menu', opened)
        },
      },
    },
  }
</script>
