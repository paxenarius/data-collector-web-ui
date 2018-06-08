<template>
  <section class="container">
  <div>
    <h1>Search Itunes</h1>

    <br/>

    <form @submit.prevent="submit">

      <input placeholder="Enter Artist Name" v-model="search" autofocus/>

    </form>

  </div>
  </section>
</template>

<script>

export default {

  components: {

  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`);
    }
  }

}
</script>

<style>

  * {
    text-align: center;
  }

  h1 {
    padding: 20px;
  }

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
