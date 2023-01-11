<template>
  
    <Navbar />
    <Dashboard />
  
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Dashboard from '@/components/Dashboard.vue';

export default {
  name: 'HomeView',
  components: {  
    Navbar,
    Dashboard,
}, 
}
</script>
