<template>
  <section class="new-products wrapper smb">
    <div class="section-title">
      <h3>NOUVEAUX PRODUITS</h3>
      <NuxtLink to="/">VOIR TOUT</NuxtLink>
    </div>
    <div class="new-products__grid">
      <div class="new-products__grid__big new-products__grid__big--lt">
        <nuxt-img
          src="/images/hygiene-et-cosmetiques.jpg"
          format="webp"
          alt="hygiène et cosmétiques"
          width="1200"
          height="800"
          sizes="sm:100vw md:300px xxl:500px"
        />
        <div class="new-products__grid__big__info">
          <h4>hygiène et cosmétiques</h4>
          <button class="button-blue">
            <NuxtLink to="/">VOIR TOUT</NuxtLink>
          </button>
        </div>
      </div>
      <div class="new-products__grid__small new-products__grid__small--lb1">
        <nuxt-img
          src="/images/huile-d-olive.jpg"
          format="webp"
          alt="hygiène et cosmétiques"
          width="1200"
          height="800"
          sizes="sm:100vw md:300px xxl:500px"
        />
        <div class="new-products__grid__small__info">
          <h6>Huile d'olive</h6>
          <p>Eco produit</p>
        </div>
      </div>
      <div class="new-products__grid__small new-products__grid__small--lb2">
        <nuxt-img
          src="/images/huile-d-olive.jpg"
          format="webp"
          alt="hygiène et cosmétiques"
          width="1200"
          height="800"
          sizes="sm:100vw md:300px xxl:500px"
        />
        <div class="new-products__grid__small__info">
          <h6>Huile d'olive</h6>
          <p>Eco produit</p>
        </div>
      </div>
      <div class="new-products__grid__small new-products__grid__small--rt1">
        <nuxt-img
          src="/images/huile-d-olive.jpg"
          format="webp"
          alt="hygiène et cosmétiques"
          width="1200"
          height="800"
          sizes="sm:100vw md:300px xxl:500px"
        />
        <div class="new-products__grid__small__info">
          <h6>Huile d'olive</h6>
          <p>Eco produit</p>
        </div>
      </div>
      <div class="new-products__grid__small new-products__grid__small--rt2">
        <nuxt-img
          src="/images/huile-d-olive.jpg"
          format="webp"
          alt="hygiène et cosmétiques"
          width="1200"
          height="800"
          sizes="sm:100vw md:300px xxl:500px"
        />
        <div class="new-products__grid__small__info">
          <h6>Huile d'olive</h6>
          <p>Eco produit</p>
        </div>
      </div>
      <div class="new-products__grid__big new-products__grid__big--rb">
        <nuxt-img
          src="/images/ecoproduits.jpg"
          format="webp"
          alt="hygiène et cosmétiques"
          width="1200"
          height="800"
          sizes="sm:100vw md:300px xxl:500px"
        />
        <div class="new-products__grid__big__info">
          <h4>écoproduits</h4>
          <button class="button-blue">
            <NuxtLink to="/">VOIR TOUT</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
