<template>
    <div>
        <h1>Home Ruta protegida</h1>
        <p>{{ userStore.userData?.email }}</p>

        <add-form></add-form>

        <p v-if="databaseStore.loadingDoc">loading docs...</p>

        <a-space direction="vertical" v-if="!databaseStore.loadingDoc" style="width: 100%">
            <a-card v-for="item of databaseStore.documents" :key="item.id" :title="item.short">
                <template #extra>
                    <a-space>
                        <a-popconfirm title="¿Estás seguro que deseas eliminar?" ok-text="Sí" cancel-text="No"
                            @confirm="confirm(item.id)" @cancel="cancel">
                            <a-button danger :loading="databaseStore.loading"
                                :disabled="databaseStore.loading">Eliminar</a-button>
                        </a-popconfirm>
                        <a-button type="primary" @click="router.push(`/editar/${item.id}`)">Editar</a-button>
                        <a-button @click="copiarPortapapeles(item.id)">Copiar</a-button>
                    </a-space>
                </template>
                <p>{{ item.name }}</p>
            </a-card>
        </a-space>
    </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { useDatabaseStore } from "../stores/database";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
const router = useRouter();

databaseStore.getUrls();

const confirm = async (id) => {
    const error = await databaseStore.deleteUrl(id);
    if (!error) return message.success("Se eliminó con éxito 💋");
    return message.error(error);
};

const cancel = () => {
    message.error("no se eliminó 💋");
};

const copiarPortapapeles = async(id) => {
    if (!navigator.clipboard) {
        return message.error('NO se pudo copiar al portapapeles');
    }
    const path = `${window.location.href}${id}`;
    console.log(path)

    const err = await navigator.clipboard.writeText(path);
    if (err) {
        message.error('No se pudo copiar al portapapeles');
    }else{
        message.success("Texto copiado al portapapeles");
    }

    // navigator.clipboard.writeText(path)
    //         .then(() => {
    //         message.success("texto copiado al portapapeles")
    //     })
    //         .catch(err => {
    //         message.error('No se pudo copiar al portapapeles');
    //         })
}
</script>
