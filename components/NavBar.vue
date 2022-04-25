<template>
  <header>
    <nav class="navbar">
      <div class="navbar__top">
        <p>Bienvenue à Locitera, votre epicerie vrac et locale à Gimont !</p>
      </div>
      <ul class="navbar__menu">
        <div class="navbar__menu__left" v-show="!mobile">
          <li><NuxtLink to="/epicerie-la-boutique">LA BOUTIQUE</NuxtLink></li>
          <li><NuxtLink to="/epicerie-les-produits">LES PRODUITS</NuxtLink></li>
          <li><NuxtLink to="/epicerie-actualites">ACTUALITÉS</NuxtLink></li>
        </div>
        <div>
          <NuxtLink to="/"
            ><img src="@/static/images/logo.svg" alt="logo"
          /></NuxtLink>
        </div>
        <div class="navbar__menu__right" v-show="!mobile">
          <li><NuxtLink to="/epicerie-contact">CONTACT</NuxtLink></li>
          <li><NuxtLink to="/">POUR LES PROS</NuxtLink></li>
          <li @click="toggleSearch"><i class="far fa-search"></i></li>
        </div>
        <div class="navbar__menu__hamburger" v-show="mobile">
          <i
            @click="toggleMobileNav"
            class="far fa-bars"
            v-show="!mobileNav"
          ></i>
          <i
            class="far fa-times"
            v-show="mobileNav"
            @click="toggleMobileNav"
          ></i>
        </div>
      </ul>
      <ul v-show="mobileNav" class="navbar__menu__dropdown slideInLeft">
        <NuxtLink to="/"><li @click="toggleMobileNav">ACCUEIL</li></NuxtLink>
        <NuxtLink to="/epicerie-la-boutique"
          ><li @click="toggleMobileNav">LA BOUTIQUE</li></NuxtLink
        >
        <NuxtLink to="/epicerie-les-produits">
          <li @click="toggleMobileNav">LES PRODUITS</li></NuxtLink
        >
        <NuxtLink to="/epicerie-actualites"
          ><li @click="toggleMobileNav">ACTUALITÉS</li></NuxtLink
        >
        <NuxtLink to="/epicerie-contact"
          ><li @click="toggleMobileNav">CONTACT</li></NuxtLink
        >
        <NuxtLink to="/">
          <li class="navbar__menu__dropdown" @click="toggleMobileNav">POUR LES PROS</li></NuxtLink
        >
        <li @click="toggleSearch"><i class="far fa-search"></i></li>
      </ul>
      <div v-show="searchNav" class="navbar__menu__search slideInRight">
        <input type="text" name="search" id="search" placeholder="Chercher un article..." />
        <div v-show="dataActualitiesArray" v-for="(actu, i) in dataActualitiesArray" :key="i">
          {{actu.titleA}}
        </div>
      </div>
   
    </nav>
  </header>
</template>

<script>
// import { actualitiesMixin } from "@/mixins/actualitiesMixin"

export default {
  data() {
    return {
      mobileNav: null,
      mobile: null,
      windowWidth: null,
      searchNav:null,
      // dataActualitiesArray: null,
    }
  },
  // mixins: [actualitiesMixin],
  mounted() {
    window.addEventListener("resize", this.checkScreen)
    this.$nextTick(function () {
      this.checkScreen()
    })
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
      this.searchNav = false

    },
    toggleSearch(){
      this.searchNav = !this.searchNav
      this.dataActualitiesArray = JSON.parse(sessionStorage.getItem("dataActualitiesArray"));
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 767) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
  },
}
</script>

<style></style>
