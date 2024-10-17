<template>
    <div>
        <table>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Category</th>
                <th>Password</th>
            </tr>
          
            <tr v-for="info in data" :key="info.ID">
                <th>{{ info.Username }}</th>
                <th>{{ info.Email }}</th>
                <th>{{ info.Category }}</th>
                <th>{{ info.Password }}</th>
            </tr>
        </table>

    </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted,computed } from 'vue'
const store = useStore()
const data = computed(
    () => store.state.Data
)
onMounted(()=>{
    store.dispatch('fetchData')
})
</script>

<style scoped>

</style>