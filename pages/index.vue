<template>
  <v-container>
    <v-layout text-xs-center>
      <v-flex xs12 md8 offset-md2>
        <div class="wrapper">
          <div v-if="!$store.state.user">
            <login-form></login-form>
             <!--<v-btn outline large flat nuxt @click="$router.push('/login')" primary>Sign In</v-btn>-->
          </div>
          <div v-else >
            <div>
              <h4 class="black--text">Welcome to the Ajira GIS Data Collector</h4>
            </div>
            <!--<v-btn icon class="blue white&#45;&#45;text">-->
              <!--<v-icon>thumb_up</v-icon>-->
            <!--</v-btn>-->
            <div>
              <nuxt-link to="/collect">Start Collecting</nuxt-link>
            </div>
          </div>
          <br/>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from '~/components/LoginForm'

export default {
components: {
  LoginForm
  }
}
</script>

<style scoped>
.fake {
  background: blue;
}
.wrapper {
  margin-top: -7.5em;
}
.flexWrapper {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
.container {
  height: calc(100vh - 100px);
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
}
.title {
  font-size: 2.5em !important;
  /*margin-top: -5em;*/
}

@media (min-width: 750px) {
  .title {
    font-size: 3.5em !important;
  }
}
</style>
