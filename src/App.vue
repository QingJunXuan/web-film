<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  components:{
    TopBar
  }
}
</script>