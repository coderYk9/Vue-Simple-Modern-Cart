<script >

 export default {
    data(){
        return {
         NewAssignment:"",
        };
    },
    methods:{
    	add(){
    	this.$emit("add",this.NewAssignment);
    	this.NewAssignment="";
    	}
    },
 }
</script >

<template >
  <form @submit.prevent="add"> 
    <div class="flex border border-gray-600 text-black">
      <input type="text" placeholder="New assignement" v-model="NewAssignment" class="p-2">
      <button type="submit" class="bg-white p-2">Add</button>
    </div>   
   </form>
</template >
