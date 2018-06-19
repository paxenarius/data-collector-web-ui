<template>
    <div>
        <div v-if="!$store.state.user">
            <div class="text-xs-center">
                <img src="/logo.png" alt="logo" class="mb-5" />
            </div>
            <login-form></login-form>
        </div>
        <div style="max-width: 100%; margin: auto;" v-else>
            <v-layout row justify-center align-center mt-2>
                <v-flex xs12 sm8 md6>
                    <v-card dark color="grey lighten-1" pl-2>
                        <v-card-title class="headline">Enter text to contribute</v-card-title>
                        <v-card-text>
                            <div>
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

                                <div
                                        v-if="alert"
                                        transition="scale-transition"
                                >
                                    Please fill all fields
                                </div>

                                <div v-if="uploading">Uploading...</div>
                            </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-on:click="submitFiles()" color="blue">Submit</v-btn>
                            <v-btn @click="clear" color="red">clear</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
        <v-dialog v-model="dialog"  max-width="500">
            <v-card dark color="red darken-2">
                <v-card-text>Your contribution has been uploaded and is under review</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue"  @click.native="dialog = false">Contribute More</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import axios from 'axios'
    import LoginForm from '~/components/LoginForm'
    export default {
      asyncData ({params}) {
        return axios.get(`${process.env.API}/api/v1/languages/`)
          .then((res) => {
            console.log(res)
            return {languages: res.data}
          })
      },
      components: {
        LoginForm
      },
      data () {
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
        addFiles () {
          this.$refs.files.click()
        },
        /*
              Submits files to the server
            */
        submitFiles () {
          /*
                  Initialize the form data
                */
          let formData = new FormData()

          console.log(this.files[0])
          if (this.language.id == null || this.language.id == null) {
            this.alert = true
            return
          }
          // if (this.text == null) {
          //   this.alert = true
          //   return
          // }
          // if (!this.files[0]) {
          //   this.alert = true
          //   return
          // }

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
          axios.post(`${process.env.API}/api/v1/contributions/`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then(function (res) {
            console.log('SUCCESS!!')
            mine.language = {}
            mine.text = null
            mine.alert = false
            mine.dialog = true
            mine.uploading = false
            mine.files.splice(0, 0)
          })
            .catch(function (err) {
              console.log(err)
              console.log('FAILURE!!')
            })
    },
        /*
              Handles the uploading of files
            */
        handleFilesUpload () {
          let uploadedFiles = this.$refs.files.files
          /*
              Adds the uploaded file to the files array
            */
          for (var i = 0; i < uploadedFiles.length; i++) {
            this.files.push(uploadedFiles[i])
          }
        },
        /*
              Removes a select file the user has uploaded
            */
        removeFile (key) {
          this.files.splice(key, 1)
    },
        submit () {
          console.log('Submit')
        },
        clear () {
          this.language = {}
          this.text = null
          this.alert = false
          this.uploading = false
        }
      }
    }
</script>

<style>

</style>