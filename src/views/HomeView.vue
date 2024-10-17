<template>
  <div class="home">
    <div class="header">
      <button class="btn btn-primary" @click="showLogin = true">Login</button>
      
    </div>

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  }
}
</script>
<style scoped>

  
.header .btn {
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