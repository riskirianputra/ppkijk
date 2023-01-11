<template>
  
  <section id="" class="d-flex align-items-center topbar bg-efektifpro">
    <div class="container d-flex justify-content-center justify-content-md-between showcase-fade">
      <div class="contact-info d-flex align-items-center">
        <a class="align-items-center ms-4 text-white"><i class="bi bi-envelope"></i> asosiasi@ppk-ijk.or.id</a>
        <a class="d-flex align-items-center ms-4 text-white">
          <i class="bi bi-telephone-fill"></i>&nbsp; &nbsp;(62-21)2277-3238
        </a>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a class="d-flex align-items-center ms-4 text-white">
          <i class="bi bi-telephone-fill"></i>&nbsp; &nbsp;(62-21)2277-3238
        </a>
        &nbsp; &nbsp;
        <i class="bi bi-facebook"><a href="/router"></a></i>&nbsp; &nbsp; &nbsp; 
          <i class="bi bi-twitter"></i>&nbsp; &nbsp; &nbsp;
        <i class="bi bi-instagram"></i>&nbsp; &nbsp; &nbsp;
        <i class="bi bi-linkedin"></i>        
      </div>
    </div>
  </section>
  
  <nav class="navbar navbar-expand-lg fixed-nav">
    <div class="container-fluid">
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a class="navbar-brand" href="#"><img style="width: auto; height: 90px" src="/../assets/img/logo/Logo_PPK-IJK.png" alt=""/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">          
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">          
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-center mx-3 nav-active" to="/" style="font-size: 18px">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-center mx-3 nav-active" to="/profile" style="font-size:   18px">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-center mx-3 nav-active" to="/member" style="font-size: 18px">Member</router-link>
          </li>         
          <li class="nav-item dropdown">            
            <a href="" class="nav-link text-center dropdown-toggle nav-active" key="" style="font-size: 18px" data-bs-toggle="dropdown" aria-expanded="false" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true">Informasi</a>
              <div class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdownMenuLink">
                <li> <router-link  class="nav-link " to="/artikel" style="font-size: 18px">Artikel </router-link></li>
                <li><router-link  class="nav-link " to="/berita" style="font-size: 18px"> Berita</router-link></li>              
                <li><router-link  class="nav-link " to="/member" style="font-size: 18px"> Publikasi </router-link></li>
              </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-center mx-3 nav-active" to="/gallery" style="font-size: 18px">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-center mx-3 nav-active" to="/agenda" style="font-size: 18px">Agenda</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-center mx-3 nav-active" to="/contact" style="font-size: 18px">Contact us</router-link>
          </li>
       </ul>
      </div>
    </div>
  </nav>

  <div
    class="modal fade bd-example-modal-sm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mySmallModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <form action="" method="GET">
          <div class="form-group p-2 m-0">
            <div class="container p-0 m-0">
              <h4
                for="recipient-name"
                class="col-form-label bg-efektifpro text-white"
              >
                <strong>Cari</strong> <i class="fa fa-search text-white"></i>
              </h4>
              <input
                type="text"
                name="cari"
                class="form-control mt-1"
                id="recipient-name"
                placeholder="Masukkan Kata Kunci yang Ingin di Cari.."
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <a href="#" id="toTopBtn" class="cd-top text-replace js-cd-top cd-top--is-visible cd-top--fade-out" data-abc="true"></a>
</template>
    
    <script>
export default {
  name: "Navbar",
   data(){
    
   }
};
</script>
    
<style>

</style>
    
    
