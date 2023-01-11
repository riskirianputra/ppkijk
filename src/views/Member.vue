<template>
  <Navbar/>
  <br>
<br>
<br>
<br>
  <div class="container" style="margin-top: 100px; margin-bottom: 100px">
    <h4 class="text-center text-efektifpro text-center" style="margin-bottom: 50px">LOGIN</h4>
    <div class="row">
        <div class="col-lg-6 col-12">                     
                <div class="form-group mb-5">
                    <label for="email" class="text-efektifpro"> E-mail Address</label>
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="" required autocomplete="email" autofocus>
                        <span class="invalid-feedback" role="alert">
                            <strong></strong>
                        </span>                   
                </div>         
                <label class="text-efektifpro"> Password</label>                                      
                    <div class="input-group mb-2">                                            
                        <input type="password" id="myInput" name="password" equired autocomplete="new-password" class="form-control  @error('password') is-invalid @enderror    " aria-label="Amount (to the nearest dollar)">
                        <button class="btn btn-outline-danger" type="button" id="button-addon2"><i class="bi bi-eye-slash" id="togglePassword"   onclick="myFunction()"></i></button>
                    </div>
                <div class="form-group">
                    <div class="">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" >
                                <label class="form-check-label" for="remember"> 
                                Remember Me                               
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group  mb-0">
                    <div class="">
                        <button type="submit" class="btn btn-ppkijk btn-block">  
                         Login                  
                        </button>
                    </div>
                </div>           
        </div>
        <div class="col-lg-6 col-12" style="padding-left: 100px">
            <img src='/../assets/img/vektor-ppkijk.png' alt="" style="width: 100%; height:250px; object-fit:contain">
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    components: { 
        Navbar 
    }
}

    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

</script>

<style>

</style>