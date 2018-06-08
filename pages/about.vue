<template>
  <section>
    <div>
      <h1 class="title">About</h1>
      <p>If you are not logged in then you should be redirected to login when clicking this link to the Admin page</p>
      <p class="title">Test Me </p>
      <ul>
        <li>
          Collect:  <nuxt-link to="/collect">Collect</nuxt-link>
        </li>
        <li>
          Admin Subroute:  <nuxt-link to="/collect/settings">Settings</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
}
</script>
