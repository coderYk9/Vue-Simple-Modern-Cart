<script>
export default {
	props:{
		initialTags:Array,
		currentTag:String
	},
	computed:{
      tags(){
      	return ['all',... new Set(this.initialTags)];
      }
	},
}
</script>

<template>
	
	<div class="flex gap-2">
      <button 
       v-for="tag in tags" 
       @click="$emit('update:currentTag',tag)"   
       class="border rounded px-1 py-px text-xs"
       :class="(tag == currentTag)? 'border-blue-500 text-blue-500':'border-gray-400'"
     	>{{tag}}</button> 
    </div>
</template>