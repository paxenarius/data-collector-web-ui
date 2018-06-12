<template>
  <v-app dark class="red lighten-1">
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      class="red darken-1"
      v-if="user"
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            fixed
            app
            :clipped-left="clipped"
            class="red darken-1"
           >
      <v-toolbar-side-icon
              @click="drawer = !drawer"  v-if="user">
      </v-toolbar-side-icon>
      <img class="logo" src="@/static/logo.png" alt="logo"/>
      <v-spacer></v-spacer>
      <div v-if="user" id="user" class="text-xs-center">
        <v-menu
                offset-x
                :close-on-content-click="false"
                :nudge-top="200"
                v-model="menu">
          <v-btn icon slot="activator"><v-icon medium>more_vert</v-icon></v-btn>
          <v-card dark color="red darken-1">
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="$store.state.user.photoURL" alt="John">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-if="user.displayName">{{user.displayName}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>

              <v-list-tile>
                <v-spacer></v-spacer>
                <v-list-tile-action>
                  <v-btn primary class="mt-2" color="red darken-2" @click.native="logout">
                    Logout
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>

      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' }
          // { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        menu: false
      }
    },
    computed: {
      user () {
        return this.$store.getters.activeUser
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('signOut').then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>


<style>
  .logo {
    width: 100px;
  }
</style>