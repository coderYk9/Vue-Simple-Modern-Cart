<script >

import assignements_list from './assaingments_list.vue';
import assignmentCreate from './assignmentCreate.vue';

 export default {
    components : {assignements_list,assignmentCreate},
 	data(){
 		return {
 			  assignements:[
             	{name:'Task 1 ',status: true,tag:'math', id:1},
                {name:'Task 2 ',status: true,tag:'science', id:2},
             	{name:'Finished #CoderYk coures ',status: false,tag:'programming', id:4},
             	{name:'Task 3 ',status: true,tag:'math', id:3},],
              NewAssignment:"",
              closed:false,
 			};
 	},

 	computed:{
 		filters(){return {
            complate:this.assignements.filter((e)=>!e.status),
            inProgress:this.assignements.filter((e)=>e.status),
            }   },
 	},
    methods:{
      addNew(NewAssignment){
        this.assignements.push(
            {name:NewAssignment,
             status:true,
            id:this.assignements.length+1
                });
      }, 
    },
 	
 }

</script >

<template >

    <div class="flex gap-8" >
        <assignements_list title="inProgress" :assignements="filters.inProgress">
                <assignment-create @add="addNew" />
            </assignements_list>
        <div v-show="!closed">
            <assignements_list title="Complated" :assignements="filters.complate" can-close @hide="closed=true" />
        </div>
    </div>

</template >
