<script>
export default {
	props : {
    darkMode:Boolean,
  },
}
</script>

<template>
  <div class="border rounded-lg p-4"
  :class="darkMode?'bg-gray-700 border-gray-600':'bg-gray-100 border-gray-300 text-black'">
  	<h2 v-if="$slots.title" class="mb-2 font-bold"><slot name="title" /></h2>
       
  	<slot />

  	<footer v-if="$slots.footer" class="mt-2 pt-4 text-sm border-t border-gray-500">
  		<slot name="footer" />
  	</footer>
  </div>
</template>