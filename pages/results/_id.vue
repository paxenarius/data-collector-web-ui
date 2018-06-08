<template>
 <div>
   <h1>Results for {{$route.params.id}}</h1>



   <div v-if="albumExists">
     <div v-for="(album, index) in albumData">
       <card
        :title="album.collectionCensoredName"
        :image="album.artworkUrl100"
        :artistName="album.artistNAME"
        :url="album.artistViewUrl"
        :color="picker(index)"
       >

       </card>
     </div>
     {{albumData}}
   </div>

   <div v-else>
     Does Not Exist
   </div>

 </div>
</template>

<script>

  import axios from 'axios'
  import Card from '~/components/Card.vue'

    export default {
      asyncData({params}) {
        return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
          .then((response) => {
            return {albumData: response.data.results}
          })
      },
      components: {
        Card
      },
        middleware: 'search',
      computed: {
        albumExists() {
          return this.albumData.length > 0
        }
      },
      methods: {
        picker(index) {
          return index % 2 == 0 ? 'red' : 'blue'
        }
      }
    }
</script>

<style scoped>

</style>
