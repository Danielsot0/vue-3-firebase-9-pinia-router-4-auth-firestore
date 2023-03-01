    
    <script setup>
    import { useUserStore } from './stores/user';
    const userStore = useUserStore();
    </script>

<template>
  <div>
    <nav v-if="userStore.loadingSession">
      <RouterLink to="/" v-if="userStore.userData">Home</RouterLink>
      <RouterLink to="/login" v-if="!userStore.userData">Login</RouterLink>
      <RouterLink to="/register" v-if="!userStore.userData" >Register</RouterLink>
      <button @click="userStore.logOutUser">Logout</button>
    </nav>
    <div v-else> Loading user...</div>
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>

</style>