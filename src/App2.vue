<script setup>
import {ref,onMounted} from "vue";
 
    const name =ref("mounir")
    const status = ref("active")
    const tasks = ref(["php","js","python"]) 
    const link = ref("https://google.com")
    const newtask = ref("")
    
    const togglestatus = ()=>{
      if (status.value==="active"){
        status.value="pending"
      }
      else if(status.value==="pending"){
        status.value="unactive"
      }
      else{
        status.value="active"
      }
    }
    const addtask = ()=>{
      if(newtask.value.trim()!==''){
        tasks.value.push(newtask.value)
        newtask.value="";
      }
    }
const deletetask = (index)=>{
  tasks.value.splice(index,1)
}


onMounted(
  async ()=>{
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json();
      tasks.value = data.map((task)=> task.title )
      
    }catch(error){
      console.log("error fetching task")
    }
  }
)
</script>
<template>
<h1>{{ name }}</h1>
<br>
<p v-if="status==='active'">user is active</p>
<p v-else-if="status ==='pending'">user is pending</p>
<p v-else>user is unactive</p>
<br>
<form @submit.prevent="addtask">
  <label for="newtask">add task</label>
  <input type="text" v-model="newtask">
  <button type="submit">add</button>
</form>

<br>
<h2>Tasks:</h2>
<ul>
  <li v-for="(task,index) in tasks" :key="task">{{ task}} 
    <span ><button @click="deletetask(index)">x</button></span>
  </li>
</ul>
<br>
<a :href="link">Google</a>
<br>
<button v-on:click="togglestatus">change the status</button>

</template>

<style scoped>

</style>
