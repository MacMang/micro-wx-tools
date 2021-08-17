<template>
  <div>
    <div>首页</div>
    <Sidebar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Sidebar from '@/components/Sidebar.vue'

@Options({
  components: {
    Sidebar
  },
})
export default class Home extends Vue {
  
}
</script>