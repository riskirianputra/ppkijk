<template>
  <Navbar />
  <a href="http://admin-ppkijk.tukangketik.my.id/api/information" target="blank">Klik  </a>
    <div class="d-flex align-items-center" style="background-image:linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url('/../assets/img/sunset-beach-edit.jpg');background-size:cover; background-position: center; height:384px">
      <div class="container">
        <h4 class="text-efektifpro mb-0 pb-0"><strong>BERITA</strong></h4>
        <h2 class="">Informasi Umum</h2>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-4 mt-4" v-for="informasis in informasi" :key="informasis.id">         
      </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from "axios";


export default {
    components: {
    Navbar,
},
data() {
    return {
      informasi: [],
      info: {},
    };
  },
  methods: {
    setInfomasi(data) {
      this.info = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/artikel")
      .then((response) => this.setInfomasi(response.data))
      .catch((error) => console.log(error))
  },

}
</script>

<style>

</style>