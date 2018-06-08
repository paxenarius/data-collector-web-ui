<template>
  <section class="">
    <!--<h1 class="title">Admin Dashboard</h1>-->
    <!--<h2 class="subheading">The routes below are are using <code>nuxt-child</code></h2>-->
    <!--<v-flex xs12 id="adminNav">-->
      <!--<nuxt-link class="adminNavRoute" to="/collect">Dashboard Home</nuxt-link>-->
      <!--<nuxt-link class="adminNavRoute" to="/collect/settings">Settings</nuxt-link>-->
      <!--<nuxt-link class="adminNavRoute" to="/collect/items">Database Example</nuxt-link>-->
    <!--</v-flex>-->

    <div
      id="e3"
      style="max-width: 100%; margin: auto;"
      class="red"
    >
          <v-flex xs12>
            <v-card color="error" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

    </div>

    <v-divider></v-divider>
    <v-flex id="adminChild" xs12>
      <nuxt-child :key="$router.fullPath"></nuxt-child>
    </v-flex>

  </section>
</template>

<script>
export default {
}
</script>

<style>
#adminNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.adminNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#adminChild {
  margin-top: 1em;
}
</style>
<!--  -->
