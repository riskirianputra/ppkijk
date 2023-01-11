
<template>    
    <section class="bg-section">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src='/../assets/img/banner/asuransi.png' width="2000" />
                </div>
                <div class="carousel-item">
                    <img cclass="d-block w-100" src='/../assets/img/banner/emoney.png' width="2000" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src='/../assets/img/banner/fintech.png' width="2000" />
                </div>
                <div class="carousel-item"> 
                    <img class="d-block w-100" src='/../assets/img/banner/industri.png' width="2000" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src='/../assets/img/banner/moneychanger.png' width="2000" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src='/../assets/img/banner/multi.png' width="2000" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src='/../assets/img/banner/sekuritas.png' width="2000" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>   
    <main role="main" class="mt-3 mb-5">
        <section id="welcome" style="margin-bottom: 100px; margin-top: 150px">
            <div class="container">
                <h5 class="text-efektifpro" style="font-weight: bolder; font-size:30px; text-align:center">SELAMAT DATANG DI PPK-IJK</h5>
                <h5 style="text-align: center; margin-bottom: 30px">PERKUMPULAN PENGEMBANGAN KOMPETENSI INDUSTRI JASA KEUANGAN</h5>
                <p>PPK-IJK adalah Perkumpulan Pengembangan Kompetensi Industri Jasa Keuangan. Salah satu tujuan didirikannya PPK-IJK yaitu menjadi wadah bagi para praktisi finansial di Indonesia agar dapat berkompetisi secara sehat dan maju bersama dengan selalu mengikuti kaidah-kaidah yang berlaku di Indonesia dan internasional.</p>
            </div>
        </section>

        <section id="news" class=" py-5">
            <div class="container">
                <div>
                    <h3 class="text-efektifpro">
                        Informasi Umum
                    </h3>
                    <div>                        
                        <div class="card-artikel">
                            <div class="">
                                <img src="" alt="" style="">
                            </div>
                            <div class="info justify-content-center">
                                <p class="kategori"></p>
                                <a class="judul" href=""></a>                                                                                              
                            </div>
                        </div>                       
                    </div> 
                    <div class="d-flex justify-content-center my-5">                       
                        Informasi Umum belum tersedia
                    </div>
                </div>
                <hr class="my-5">
                <div>
                    <h3 class="text-efektifpro">
                        Informasi Analisis
                    </h3>
                    <div>                       
                        <div class="card-artikel">
                            <div class="phone-hide">
                                <img src='' alt="" >
                            </div>
                            <div class="info justify-content-center">
                                <p class="kategori"></p>
                                <a class="judul" href=''>{{judul}}</a>                                                                                    > 
                            </div>
                        </div>                      
                    </div>
                    <div class="d-flex justify-content-center">                        
                        Informasi Analisis belum tersedia
                    </div>
                </div>
                <hr class="my-5">
            </div>
        </section>

        <section id="services" style="margin-bottom: 150px; margin-top: 50px">

            <div class="container">
                <h3 class="text-efektifpro ">
                    Informasi
                </h3>
                <div class="row card-informasi justify-content-center">
                    <div class="col-lg-4 mt-5 text-center">
                        <div class="align-items-center">
                            <i class="bi bi-laptop text-efektifpro" style="font-size: 75px"></i>
                            <div class="info" style="margin-top: 25px">
                                <h5 class="judul">Seminar / Workshop</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-5 text-center">
                        <div class="align-items-center">
                            <i class="bi bi-pencil-square text-efektifpro" style="font-size: 75px"></i>
                            <div class="info" style="margin-top: 25px">
                                <h5 class="judul">Pelatihan</h5>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row card-informasi mt-5">
                    <div class="col-lg-4 mt-5 text-center">
                        <div class="align-items-center">
                            <i class="bi bi-pass text-efektifpro" style="font-size: 75px"></i>
                            <div class="info" style="margin-top: 25px">
                                <h5 class="judul">Berita</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-5 text-center">
                        <div class="align-items-center">
                            <i class="bi bi-chat-left-dots text-efektifpro" style="font-size: 75px"></i>
                            <div class="info" style="margin-top: 25px">
                                <h5 class="judul">Publikasi</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-5 text-center">
                        <div class="align-items-center">
                            <i class="bi bi-calendar4-week text-efektifpro" style="font-size: 75px"></i>
                            <div class="info" style="margin-top: 25px">
                                <h5 class="judul">Agenda</h5>
                            </div>
                        </div>
                    </div>                    
                </div>

            </div>
        </section>

        <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
            <h5 class="text-center text-efektifpro showcase-top">PARTNER</h5>
            <div class="carousel-inner">            
                <div class="carousel-item active text-center">
                    <img class="" src='/../assets/img/logo/logo-epro.png' style="max-height:90px!important; width:170px; object-fit:contain;"/>
                </div>
                <div class="carousel-item text-center">
                    <img cclass="" src='/../assets/img/logo/irpa.png' style="max-height:90px!important; width:120px; object-fit:contain;"/>
                </div>
                <div class="carousel-item text-center">
                    <img class="" src='/../assets/img/logo/ipsgrc.png' style="max-height:90px!important; width:140px; object-fit:contain;" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="">Next</span>
            </button>
        </div>
    </main><!-- /.container -->
</template>

<script>
export default {
name: "Navbar",

}
</script>

<style>

</style>