        
<template>
    <div>
        <h1>Home - </h1>
        <p>{{ userStore.userData?.email }}</p>
        
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';
const userStore = useUserStore;
console.log(userStore.userData?.email);
</script>