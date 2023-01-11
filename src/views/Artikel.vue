<template>
  <Navbar />

    <div class="d-flex align-items-center" style="background-image:linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url('/../assets/img/sunset-beach-edit.jpg');background-size:cover; background-position: center; height:300px">
      <div class="container">
        <h4 class="text-efektifpro mb-0 pb-0"><strong>BERITA</strong></h4>
        <h2 class="">Informasi Umum</h2>  
      </div>
    </div>

<div class="row mb-3">  
  <div class="col-md-3 mt-4" v-for="data in info" :key="data.id">
    <div style=" margin-right: 50px; margin-left: 50px;">
      <div class="card border-0">
        <div class="card-header border-0">
          <h3 class="text-efektifpro">{{ data.title }}</h3>         
        </div>
        <div class="card-body" style="height: 260px">
          <img :src=" '../assets/img/' + data.thumbnail " class="img-fluid shadow" style="max-width:100%; max-height:250px" alt=""/>
        </div>
          <div class="card-footer border-0">
            <p>
              {{ data.body.Ispast }}
              <a href="http://ppk-ijk.or.id/information/sejarah-mata-uang-indonesia" target="blank" class="text-efektifpro"><i>... Read More</i></a>
            </p>
              <hr>
              <small><em> Publish : {{ data.updated_at}} </em></small>
          </div>
      </div>      
    </div>   
  </div>  
  <div class="col-md-2 mt-4">
    <div class="margin-top: 50px;  margin-right: 50%;">            
        <div class="card">
            <div class="card-header">
              <h3 class="text-efektifpro">Category</h3>
            </div>
            <div class="card-body border-0">
              <p class="badge badge-info bg-efektifpro" style="font-size: 14px;"> ARTIKEL </p>
              <br>
              <p class="badge badge-info bg-efektifpro" style="font-size: 14px;"> SEMINAR/WORKSHOP </p>
              <br><p class="badge badge-info bg-efektifpro" style="font-size: 14px;"> BERITA </p>
              <br>
              <p class="badge badge-info bg-efektifpro" style="font-size: 14px;"> PELATIHAN </p>
              <br>            
            </div>
        </div>  
    </div>
  </div>
</div>
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