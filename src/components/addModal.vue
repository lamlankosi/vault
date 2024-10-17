<template>
    <div class="login" v-if="visible">
        <form @submit.prevent="submitForm">
            <h2>Add New</h2>
            <div>
                <label for="Username">Username</label>
                <input type="text" v-model="newData.Username" required>
            </div>
            <div>
                <label for="Email">Email</label>
                <input type="text" v-model="newData.Email">
            </div>
            <div>
                <label for="Category">Category</label>
                <input type="text" v-model="newData.Category">
            </div>
            <div>
                <label for="Password">Password</label>
                <input type="text" v-model="newData.Password">
            </div>
            <button type="submit" class="btn btn-primary">Add Product</button>
            <button type="button" @click="$emit('update:visible', false)" class="btn btn-secondary">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        visible: {
      type: Boolean,
      required: true
    }
    },
    data(){
        return{
            newData:{
                Username: '',
                Email:'',
                Category:'',
                Password:'',
            }
        }
    },
    methods:{
        submitForm(){
            this.$emit('add-data', this.newData)
            this.$emit('update:visible', false)
        }
    }
}
</script>

<style scoped>

</style>