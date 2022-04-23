<template>
  <main class="shop-page wrapper">
    <section class="shop-page__hero smb">
      <div class="shop-page__hero__left">
        <div>
          <nuxt-img src="/images/title.svg" alt="loci terra" />
        </div>
        <div>
          <nuxt-img
            src="/images/sepia-portrait.jpg"
            format="webp"
            alt="loci terra"
          />
        </div>
      </div>
      <div class="shop-page__hero__right">
        <h1>Le vrac est le commerce d'aujourd'hui et de demain !</h1>
        <p>
          Loci Terra, situé 110A rue Nationale à Gimont près de Toulouse est
          ouvert depuis le 11 juin 2021. La boutique vous propose plusieurs
          produits alimentaires et non alimentaires, la plupart en vrac. Tous
          ces produits ont été sélectionnés avec soin et passion selon 3
          critères:
        </p>
        <p>La qualité, la localisation et leurs emballages.</p>
        <p>
          Nous vous emmenons dans un monde de consommation respectueux pour
          vous, pour l'environnement et surtout sans contraintes !
        </p>
        <p>
          Loci Terra, c'est <span>Johanna</span> (dites la brune) et
          <span>Jessica</span> (dites la blonde).
        </p>
        <p>
          L'une est locale, un pur produit Gersois et l'autre a décidé de poser
          son bocal Toulousain dans cette belle région pour monter une épicerie
          vrac, produits locaux et fruits et légumes.
        </p>
        <p>
          Dans notre boutique 80% des produits sont d'origine biologique. Nous
          favorisons les producteurs locaux également.
        </p>
      </div>
    </section>
    <section class="shop-page__why smb">
      <h2>POURQUOI LE VRAC ?</h2>
      <div class="shop-page__why__container">
        <p>C'est économique !</p>
        <p>Permet de réduire les déchets</p>
        <p>Acheter la juste quantité, pas de gaspillages !</p>
        <p>Aliments de meilleure qualité !</p>
        <p>Retour à l'essentiel !</p>
        <p>C'est interactif et amusant !</p>
      </div>
    </section>
    <Tuto />
    <Actualities />
  </main>
</template>

<script>
export default {}
</script>

<style></style>
