<template >
<div >
    <simple-cart v-show="assignements.length" dark-mode class="w-61">
    	<div class="flex items-start justify-between">
          <h2 class="font-bold mb-2">{{title}}<span> ({{assignements.length}}) </span> </h2>
          <button v-if="canClose" @click="$emit('hide')">&times;</button>   
        </div>
        <assignment-tag 
        :initialTags="assignements.map((e)=>e.tag)"
        v-model:currentTag="currentTag"
         />
    	<ul class="border border-gray-600 divide-y divide-gray-600 mt-6" >
    	   <assignements_list_item
             v-for="assignement in assignementsPerTag" 
             :key="assignement.id"
             :assignement="assignement" />
    	</ul>
        <slot></slot>
    </simple-cart>
</div>

</template >

<script >
import assignements_list_item from "./assaingments_list_item.vue";
import AssignmentTag from "./AssignmentTag.vue";
import SimpleCart from './SimpleCart.vue';

 export default {
    components:{assignements_list_item,AssignmentTag,SimpleCart},
    data(){
        return {
            currentTag:'all'
        }
    },
    props:{
        title:String,
        assignements:Array,
        canClose:{type:Boolean,default:false }
    },
    computed:{
        assignementsPerTag(){
            return this.currentTag === 'all' ? this.assignements :
            this.assignements.filter((e)=>e.tag == this.currentTag );
        }
    },
}

</script >