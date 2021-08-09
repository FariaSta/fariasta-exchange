<template>
   <header class="shadow w-screen">
       <nav>
           <nav class="flex items-center justify-between flex-wrap bg-black p-4">
               <div class="flex items-center flex-shrink-0 text-white mr-6">
                   <router-link to="/"><img src="../../public/logo.png" alt="FariaSta Exchange" width="170px"></router-link>
                   <div class="ml-6 text-sm lg:flex-grow">
                        <router-link v-for="l in links" :to="l.to" :key="l.title" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
                            {{ l.title }}
                        </router-link>
                   </div>
               </div>

           </nav>
       </nav>
    </header> 
</template>
<script>

import PxIcon from '@/components/PxIcon'

export default {
    name: 'PxHeader',
    components: {
        PxIcon
    },
    props: {
        links: {
            type: Array,
            default: () => []
        }
    }
}
</script>