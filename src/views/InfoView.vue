<template>
    <div class="dashboard">
        <div class="buttons">
            <button class="btn btn-primary" @click="showAddModal = true">Add</button>
        </div>
        <table class="data-table">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Category</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="info in data" :key="info.ID">
                    <td>{{ info.Username }}</td>
                    <td>{{ info.Email }}</td>
                    <td>{{ info.Category }}</td>
                    <td>{{ info.Password }}</td>
                    <td>
                        <button class="btn btn-secondary"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-secondary" @click="deleteData(data.ID)"><i class="bi bi-trash2"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>

        <addModal :visible="showAddModal" @update:visible="showAddModal = false" @add-data="handleAdddata"/>
    </div>
</template>

<script>
import addModal from '@/components/addModal.vue';
export default {
    components: {
        addModal
    },
    data(){
        return{
            showAddModal:false
        }
    },
    computed: {
        data() {
            return this.$store.state.data;
        }
    },
    methods:{
        handleAdddata(info){
            this.$store.dispatch('addData', info)
        },
        async deleteData(dataID){
            await  this.$store.dispatch('deleteData', dataID)

        }
    },
    mounted() {
        this.$store.dispatch('fetchData');
    }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
.dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f8ff;
}

.buttons {
    margin-bottom: 20px;
}

.data-table {
    border-collapse: collapse;
    width: 80%; /*e ta*/
    max-width: 800px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
}

.data-table th, .data-table td {
    border: 1px solid #ddd;  padding: 12px;
    text-align: left;
}

.data-table th {
    background-color: #3f51b5;
    color: white;
}

.btn {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
}

.btn-primary {
    background-color: #3f51b5;
    color: white;
}
</style>
