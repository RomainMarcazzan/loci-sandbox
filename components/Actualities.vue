<template>
  <section class="actualities wrapper">
    <div class="actualities__title">
      <div class="actualities__title__container">
        <h2>ACTUALITÉS</h2>
        <img src="/images/title-decoration.svg" alt="" />
      </div>
    </div>
    <div class="actualities__grid">
      <div
        class="actuality-card"
        v-for="(actu, i) in dataActualitiesArray.slice(0, 3)"
        :key="i"
      >
        <nuxt-img
          :src="imageUrl(actu.idA, actu.pictureThumbA)"
          :alt="actu.titleA"
          format="webp"
        />
        <div class="actuality-card__info">
          <h5 class="actuality-card__info__title">
            {{ actu.titleA.toUpperCase() }}
          </h5>
          <p class="actuality-card__info__date">
            {{ new Date(actu.upDateA).toLocaleString().split(",")[0] }}
          </p>
          <p class="actuality-card__info__subtitle">
            {{ actu.titleSubA }}
          </p>
          <NuxtLink
            class="actuality-card__info__link"
            :to="getLinkPortrait(actu.titleA, actu.idA)"
            :title="actu.titleA"
            >LIRE LA SUITE</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="actualities__button-container">
      <button class="button-blue button-blue--big">
        <NuxtLink to="/epicerie-actualites">VOIR TOUT</NuxtLink>
      </button>
    </div>
  </section>
</template>

<script>
import { actualitiesMixin } from "@/mixins/actualitiesMixin"

export default { mixins: [actualitiesMixin] }
</script>

<style></style>
