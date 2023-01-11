<template>
  
  <Navbar />

<br>
<br>
<br>
<br>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src='/../assets/img/bg-page/bg-page-merah.png' width="2000" />
            </div>           
        </div>      
    </div>
    <div class="section my-5">
        <div class="container">
            <h3 class="text-efektifpro text-center" style="font-weight: bolder">
                ARTI LAMBANG PPK-IJK
            </h3>
            <p class="text-center my-5">
                <img style="width: auto;max-height:250px" class="text-center"  src='/../assets/img/logo/Logo_ppk-ijk.png' alt="">
            </p>
            <div class="row arti-logo" style="margin-top: 150px">
                <div class="col-lg-4 col-12">
                    <div class="d-flex align-items-center card-arti-logo">
                        <img src='/../assets/img/logo/logo-huruf/p-biru.png' alt="" style=" width:90px"> &nbsp; &nbsp;
                            <h5>Warna Biru <br>Melambangkan Pengetahuan</h5>
                    </div>
                </div>                   
                <div class="col-lg-4 col-12">
                            <div class="d-flex align-items-center card-arti-logo">
                                <img src='/../assets/img/logo/logo-huruf/p-jingga.png' alt="" style="width:90px"> &nbsp; &nbsp;
                                <h5>Warna Jingga <br>Melambangkan Keterampilan</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12">
                            <div class="d-flex align-items-center card-arti-logo">
                                <img src='/../assets/img/logo/logo-huruf/k-ungu.png' alt="" style="width:90px"> &nbsp; &nbsp;
                                <h5>Warna Ungu <br>Melambangkan Perilaku</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row arti-logo" style="margin-top: 50px">
                        <div class="col-lg-4 col-12">
                            <div class="d-flex align-items-center card-arti-logo">
                                <img src='/../assets/img/logo/logo-huruf/i-hijau.png' alt="" style="width:90px"> &nbsp; &nbsp;
                                <h5>Warna Hijau <br>Melambangkan Tujuan</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12">
                            <div class="d-flex align-items-center card-arti-logo">
                                <img src='/../assets/img/logo/logo-huruf/j-gold.png' alt="" style="width:90px"> &nbsp; &nbsp;
                                <h5>Warna Gold <br>Melambangkan Kinerja</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12">
                            <div class="d-flex align-items-center card-arti-logo">
                                <img src='/../assets/img/logo/logo-huruf/k-perak.png' alt="" style="width:90px"> &nbsp; &nbsp;
                                <h5>Warna Perak <br>Melambangkan Pengalaman</h5>
                            </div>
                        </div>
                    </div>

                    <hr style="margin-top: 70px">
                
                    <div class="row justify-content-md-center text-center" >
                        <div class="col-lg-5 col-12" style="margin-top: 70px">
                            <h4 style="font-weight: bolder; color:#ec6643; font-size: 30px">Visi</h4>
                            <i class="bi bi-eye" style="font-weight: 15px; font-size: 70px; color:#ec6643; margin: 40px 0px"></i><br>
                            <p>Menjadi wadah perkumpulan para profesional dan penggiat di sektor jasa keuangan di Indonesia yang berkontribusi terhadap pengembangan kompetensi sumberdaya manusia sebagai modal insani (human capital) dalam rangka peningkatan kesehatan industri jasa keuangan dan pembangunan sektor keuangan nasional.</p>
                        </div>
                        <div class="col-lg-5 col-12" style="margin-top: 70px">
                            <h4 style="font-weight: bolder; color:#ec6643; font-size: 30px">Misi</h4>
                            <i class="bi bi-bullseye" style="font-weight: 15px; font-size: 70px; color:#ec6643; margin: 40px 0px"></i> <br>
                            <p>Meningkatkan kompetensi sumberdaya manusia (human capital), mendorong kerjasama di kalangan profesional pelaku dan penggiat, dan mengembangkan arus informasi dan komunikasi yang positif di antara seluruh stakeholders di sektor jasa keuangan.</p>
                        </div>
                    </div>
        </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
    components: { 
         Navbar ,

    }
}
</script>

<style>

</style>