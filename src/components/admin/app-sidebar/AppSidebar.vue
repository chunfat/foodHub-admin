<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>{{ $t('menu.statistics') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'charts' }">
          <span slot="title">
            <span>{{ $t('menu.charts') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'progress-bars' }">
          <span slot="title">
            <span>{{ $t('menu.progressBars') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
          <span>{{ $t('menu.forms') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'form-elements' }">
          <span slot="title">
            <span>{{ $t('menu.formElements') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'form-wizard' }">
          <span slot="title">
            <span>{{ $t('menu.formWizards') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'medium-editor' }">
          <span slot="title">
            <span>{{ $t('menu.mediumEditor') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
    </template>
  </vuestic-sidebar>
</template>

<script>

  import VuesticSidebar from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
  import SidebarLink from './components/SidebarLink'
  import SidebarLinkGroup from './components/SidebarLinkGroup'

  export default {
    name: 'app-sidebar',
    components: {
      VuesticSidebar,
      SidebarLink,
      SidebarLinkGroup
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    }
  }


</script>
