<template>
    <div
      id="e3"
      style="max-width: 400px; margin: auto;"
      class="grey lighten-3">

      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card target="_blank" :href="url" :color="color" class="white--text">
              <v-card-title primary-title>
                <div class="headline">{{title}}</div>
                <div>Listen  artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs5>
            <v-card-media
              :src="image"
              height="100px"
              contain>

            </v-card-media>
          </v-flex>
        </v-layout>
      </v-container>

    </div>
</template>

<script>
    export default {
        props: ['title', 'image', 'artistName', 'url', 'color']
    }
</script>

<style scoped>

</style>
