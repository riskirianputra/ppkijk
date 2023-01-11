<template>
  <Navbar />

  <section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.1593412677553!2d106.7810975!3d-6.2427208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11768911619%3A0x70d80dcb6eab1da3!2sGandaria%208%20Office%20Tower!5e0!3m2!1sid!2sid!4v1613959473083!5m2!1sid!2sid"
      width="100%"
      height="600"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </section>

  <section style="margin: 75px 0px 100px 0px">
    <div class="container">
      <div class="row card-contact">
        <div class="col-12">
          <div>
            <i class="bi bi-geo-alt-fill" style="margin-right: 20px"></i>
            Gandaria 8 Office Tower, 19th floor Unit A1, Jalan Sultan Iskandar
            Muda No.10
          </div>
        </div>
        <div class="col-12">
          <div>
            <i class="bi bi-phone-fill" style="margin-right: 20px"></i
            >(62-21)1234-4321
          </div>
        </div>
        <div class="col-12">
          <div>
            <i class="bi bi-telephone-fill" style="margin-right: 20px"></i
            >(62-21)2277-3238
          </div>
        </div>
        <div class="col-12">
          <div>
            <i class="bi bi-envelope-open-fill" style="margin-right: 20px"></i
            >asosiasi@ppk-ijk.or.id
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <article class="contact-us">
        <div class="my-3">
          <h3 class="text-efektifpro">HUBUNGI KAMI</h3>
        </div>
        <form action="">
          <div class="form-row">
            <div class="col-md-4 mb-2 col-sm-12">
              <input type="text" class="form-control" placeholder="Name" />
            </div>
            <div class="col-md-4 mb-2 col-sm-12">
              <input type="text" class="form-control" placeholder="Email" />
            </div>
            <div class="col-md-4 mb-2 col-sm-12">
              <input type="text" class="form-control" placeholder="Phone" />
            </div>
            <div class="col-12 my-2">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button class="btn btn-lg btn-efektifpro ml-1">SUBMIT</button>
          </div>
        </form>
      </article>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
</style>