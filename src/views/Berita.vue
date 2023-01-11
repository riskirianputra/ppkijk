<template>
  <Navbar />
      <div class="d-flex align-items-center" style="background-image:linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url('/../assets/img/sunset-beach-edit.jpg');background-size:cover; background-position: center; height:384px">
        <div class="container">
          <h4 class="text-efektifpro mb-0 pb-0"><strong>BERITA</strong></h4>
          <h2 class="">Informasi Analisis</h2>  
        </div>
      </div>
  <br>
  <br>
  <br>
    <h2 class="text-center text-efektifpro"> DATA TIDAK DI TEMUKAN...</h2>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from "axios";

export default {  
    components: { 
        Navbar 
    },
    data() {
    return {
      info: null, 
     
    }
  },
  
  mounted () {
    axios
      .get("http://admin-ppkijk.tukangketik.my.id/api/information")
      .then((response) => {this.info = response.data.data;})      
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}
</script>

<style>

</style>