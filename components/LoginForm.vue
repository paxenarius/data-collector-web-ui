<template>
    <v-layout>
        <v-flex text-xs-center xs12 sm6 offset-sm3>
            <h1>Sign In With Google</h1>
            <v-btn color="error" dark large @click.native="googleSignUp">Google</v-btn>
            <!--<v-btn color="info" dark large>Facebook</v-btn>-->
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
      name: 'LoginForm',
      methods: {
        googleSignUp () {
          this.$store.dispatch('signInWithGoogle').then(() => {
            console.log('inside then statement on login')
          }).catch((e) => {
            console.log(e.message)
          })
        }
      }
    }
</script>

<style scoped>

</style>