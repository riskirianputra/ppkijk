<template>
    <navbar />
        <div class="d-flex align-items-center" style="background-image:linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url('/../assets/img/sunset-beach-edit.jpg');background-size:cover; background-position: center; height:200px">
            <div class="container">
                <h4 class="text-light "><strong>_Galeri</strong></h4>
                <h2 class="text-efektifpro mb-0 pb-0">GALLERY</h2>  
            </div>
        </div>
<br>
<br>
        <div class="container">
            <div class="row">
                <div class="col-md-12" v-for="gallery in info" :key="gallery.id">            
                    <div class="row">
                         <div class="col-sm-6 col-md-4 col-lg-4 mb-4 mb-lg-0 item">
                            <a  href="http://admin-ppkijk.tukangketik.my.id/asset/admin/gallery/1665563057.jpg" target="blank" style="width: 626px; height: 417px;">                      
                                <img :src=" '../assets/img/' + gallery.image " class="thumb" style="max-width:100%; max-height:250px" alt=""/>
                            </a>
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
        .get("http://admin-ppkijk.tukangketik.my.id/api/gallery")
        .then((response) => {this.info = response.data.gallery;})      
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
  }
}
</script>

<style>
        .mainwrapper {
            background: #fefefe;
            display: flex;
            width: 100%;
            height: 650px;
            justify-content: center;
            align-items: center;
        }

        img.imgthumb {
            width: 150px;
            border-radius: 10px;
        }        

        .overlay {
            width: 0;
            height: 0;
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0);
            z-index: 9999;
            transition: .8s;
            text-align: center;
            padding: 100px 0;
        }

        .overlay:target {
            width: auto;
            height: auto;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, .7);
        }

        .overlay img {
            max-height: 100%;
            box-shadow: 2px 2px 7px rgba(0, 0, 0, .5);
        }

        .overlay:target img {
            animation: zoomDanFade 1s;
        }

        .overlay .close {
            position: absolute;
            top: 2%;
            left: 2%;
            margin-left: -20px;
            color: white;
            text-decoration: none;
            line-height: 14px;
            padding: 5px;
            opacity: 0;
        }

        .overlay:target .close {
            animation: slideDownFade .5s .5s forwards;
        }


       
</style>