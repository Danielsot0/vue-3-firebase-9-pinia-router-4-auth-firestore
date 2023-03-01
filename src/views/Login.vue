<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">
                Acceder</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
//import { useRouter } from 'vue-router';
//const router = useRouter();
const userStore = useUserStore();
const email = ref('dani@gmail.com');
const password = ref('123123');
const handleSubmit = async () => {
    if (!email.value || !password.value.length > 6) {
        return alert('Ingrese todos los campos');


    }
    await userStore.loginUser(email.value, password.value);
    //router.push('/');

}

</script>

<style scoped></style>