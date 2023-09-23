<script >

 export default {
    props:{
        assignement:Object,
    },
 	 	
 }

</script >
<template >

<li>
	<label class="p-2 flex justify-between items-center">
		{{assignement.name}} <input type="checkbox"  v-model="assignement.status" class="ml-3">
	</label>
</li>

</template >
