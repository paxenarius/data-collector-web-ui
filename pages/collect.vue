<template>
  <!--<section class="">-->
    <!--&lt;!&ndash;<h1 class="title">Admin Dashboard</h1>&ndash;&gt;-->
    <!--&lt;!&ndash;<h2 class="subheading">The routes below are are using <code>nuxt-child</code></h2>&ndash;&gt;-->
    <!--&lt;!&ndash;<v-flex xs12 id="adminNav">&ndash;&gt;-->
      <!--&lt;!&ndash;<nuxt-link class="adminNavRoute" to="/collect">Dashboard Home</nuxt-link>&ndash;&gt;-->
      <!--&lt;!&ndash;<nuxt-link class="adminNavRoute" to="/collect/settings">Settings</nuxt-link>&ndash;&gt;-->
      <!--&lt;!&ndash;<nuxt-link class="adminNavRoute" to="/collect/items">Database Example</nuxt-link>&ndash;&gt;-->
    <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->

    <!--<div-->
      <!--id="e3"-->
      <!--style="max-width: 100%; margin: auto;"-->
      <!--class="red"-->
    <!--&gt;-->
          <!--<v-flex xs12>-->
            <!--<v-card color="error" class="white&#45;&#45;text">-->
              <!--<v-card-title primary-title>-->
                <!--<div class="headline">Unlimited music now</div>-->
                <!--<div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>-->
              <!--</v-card-title>-->
              <!--<v-card-actions>-->
                <!--<v-btn flat dark>Listen now</v-btn>-->
              <!--</v-card-actions>-->
            <!--</v-card>-->
          <!--</v-flex>-->

    <!--</div>-->

    <!--<v-divider></v-divider>-->
    <!--<v-flex id="adminChild" xs12>-->
      <!--<nuxt-child :key="$router.fullPath"></nuxt-child>-->
    <!--</v-flex>-->

  <!--</section>-->
  <div
    id="e3"
    style="max-width: 100%; margin: auto;"
    class="grey lighten-3"
  >

        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12>
                    <div>
                      <div class="headline">Enter text to contribute</div>
                      <v-form ref="form" lazy-validation>

                        <v-select
                          :items="languages"
                          item-text="name"
                          v-model="language"
                          label="Select"
                          single-line
                        ></v-select>

                        <v-text-field
                          v-model="text"
                          label="Text"
                        ></v-text-field>


                      </v-form>
                      <br>
                      <div class="large-12 medium-12 small-12 cell">
                      <label>Files
                        <input type="file" id="files" ref="files"  v-on:change="handleFilesUpload()"/>
                      </label>
                    </div>
                    <!--<div class="large-12 medium-12 small-12 cell">-->
                      <!--<div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>-->
                    <!--</div>-->
                    <br>
                    <div class="large-12 medium-12 small-12 cell">
                      <v-btn v-on:click="submitFiles()">Submit</v-btn>
                      <v-btn @click="clear">clear</v-btn>
                    </div>

                      <div
                        v-if="alert"
                        transition="scale-transition"
                      >
                        Please fill all fields
                      </div>

                      <div v-if="uploading">Uploading...</div>

                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-text>Your contribution has been uploaded and is under review</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"  @click.native="dialog = false">Contribute More</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-layout>

  </div>
</template>

<script>
  import axios from 'axios'
  import UploadButton from '~/components/UploadButton'
export default {
    asyncData ({params}) {
      return axios.get('http://146.185.131.213/api/v1/languages/')
        .then((res) => {
          console.log(res)
          return {languages: res.data}
        })
    },
    components: {
      UploadButton
    },
    data(){
      return {
        files: [],
        text: null,
        languages: [],
        language: {},
        alert: false,
        dialog: false,
        uploading: false
      }
    },
    methods: {
      onFileChanged (e) {
        e.preventDefault()
        var files = e.target.files
      },

      /*
        Adds a file
      */
      addFiles(){
        this.$refs.files.click();
      },
      /*
        Submits files to the server
      */
      submitFiles(){
        /*
          Initialize the form data
        */
        let formData = new FormData();

        console.log(this.files[0])
        if (this.language.id == null || this.language.id == null) {
          this.alert = true
          return
        }
        if (this.text == null) {
          this.alert = true
          return
        }
        if (!this.files[0]) {
          this.alert = true
          return
        }

        formData.append('user', 1)
        formData.append('language', this.language.id)
        formData.append('text', this.text)
        formData.append('file', this.files[0])
        this.uploading = true
        /*
          Iteate over any file sent over appending the files
          to the form data.
        */
        // for( var i = 0; i < this.files.length; i++ ){
        //   let file = this.files[i];
        //   formData.append('files[' + i + ']', file);
        // }
        /*
          Make the request to the POST /select-files URL
        */
        var mine = this
        axios.post('http://146.185.131.213/api/v1/contributions/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(res){
          console.log('SUCCESS!!');
          mine.language = {}
          mine.text = null
          mine.alert = false
          mine.dialog = true
          mine.uploading = false
          mine.files.splice(0, 0)
        })
          .catch(function(err){
            console.log(err)
            console.log('FAILURE!!');
          });
      },
      /*
        Handles the uploading of files
      */
      handleFilesUpload(){
        let uploadedFiles = this.$refs.files.files;
        /*
          Adds the uploaded file to the files array
        */
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
      },
      /*
        Removes a select file the user has uploaded
      */
      removeFile( key ){
        this.files.splice( key, 1 );
      },
      submit () {
        console.log('Submit')
      },
      clear() {
        this.language = {}
        this.text = null
        this.alert = false
        this.uploading = false
      }
    }
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
