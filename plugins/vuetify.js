import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VAvatar,
  VMenu,
  VDivider,
  VForm,
  VSelect,
  vTextField,
  VDialog
} from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#FAFAFA',
    secondary: '#3D5AFE',
    accent: '#03A9F4',
    error: '#FF5722',
    warning: '#ffeb3b',
    info: '#00B0FF',
    success: '#4caf50'
  },
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VAvatar,
    VMenu,
    VDivider,
    VForm,
    VSelect,
    vTextField,
    VDialog
  }
})
