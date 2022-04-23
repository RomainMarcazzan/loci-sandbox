<template>
  <div class="article-page wrapper">
    <div class="article-page__title">
      <h2>{{ ws_data_details.titleA }}</h2>
    </div>
    <div class="article-page__subtitle">
      <h3>{{ ws_data_details.titleSubA }}</h3>
    </div>
    <div class="article-page__photo-container">
      <nuxt-img
        v-if="ws_data_details.pictureThumbA"
        :src="imageUrl(ws_data_details.idA, ws_data_details.pictureThumbA)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
      <nuxt-img
        v-if="ws_data_details.picture01A"
        :src="imageUrl(ws_data_details.idA, ws_data_details.picture01A)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
      <nuxt-img
        v-if="ws_data_details.picture02A"
        :src="imageUrl(ws_data_details.idA, ws_data_details.picture02A)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
      <nuxt-img
        v-if="ws_data_details.picture03A"
        :src="imageUrl(ws_data_details.idA, ws_data_details.picture03A)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
      <nuxt-img
        v-if="ws_data_details.picture05A"
        :src="imageUrl(ws_data_details.idA, ws_data_details.picture05A)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
      <nuxt-img
        v-if="ws_data_details.picture05A"
        :src="imageUrl(ws_data_details.idA, ws_data_details.picture05A)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
      <nuxt-img
        v-if="ws_data_details.picture06A"
        :src="imageUrl(ws_data_details.idA, ws_data_details.picture06A)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
      <nuxt-img
        v-if="ws_data_details.picture07A"
        :src="imageUrl(ws_data_details.idA, ws_data_details.picture07A)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
      <nuxt-img
        v-if="ws_data_details.picture08A"
        :src="imageUrl(ws_data_details.idA, ws_data_details.picture08A)"
        :alt="ws_data_details.titleA"
        format="webp"
      />
    </div>
    <div class="article-page__text" v-html="ws_data_details.describeA"></div>
    <div class="article-page__change-article">
      <NuxtLink v-if="previousLink" :to="previousLink" class="previousLink"
        ><i class="fas fa-chevron-left"></i> Actualité précédente</NuxtLink
      >
      <NuxtLink v-if="nextLink" :to="nextLink" class="nextLink"
        >Actualité suivante <i class="fas fa-chevron-right"></i
      ></NuxtLink>
    </div>
  </div>
</template>

<script>
import { actualitiesMixin } from "@/mixins/actualitiesMixin"
// import headFunction from "@/mixins/headFunction.vue"
export default {
  mixins: [actualitiesMixin],
  data() {
    return {
      referenceArray: "",
      id: "",
      title: "",
      currentArticle: null,
      nextLink: null,
      previousLink: null,
    }
  },
  //   head() {
  //     let objectData = {
  //       description:
  //         "Mathias Gunzel - joueur professionel de golf. Ma détermination, ma rigueur dans l’entraînement, mon amour de toujours pour ce sport, et, ma philosophie de vie de me dire que lorsqu’on veut aller quelque part en s’en donnant tous les moyens possibles, on peut y arriver.",
  //       img: this.imageUrlMeta(
  //         this.ws_data_details.idA,
  //         this.ws_data_details.pictureThumbA
  //       ),
  //       keywords: "Mathias Gunzel, professionel, golf",
  //       title: this.ws_data_details.titleA + " - Mathias Gunzel",
  //       path: `${this.$store.state.globalData.url}${this.$route.fullPath}`,
  //     }
  //     return this.fillSEO(objectData)
  //   },
  async asyncData(context) {
    // console.log("PAGE PortraitDetail ASYNC DATA");
    let idFiche
    // console.log(context.route.params);
    if (context.route.params.slug && context.route.params.slug.includes("-")) {
      //   console.log(context.route.params.slug);
      let query_id = context.route.params.slug
      let foundId = query_id.split("-")
      foundId = foundId[foundId.length - 1]
      // let foundTitle = query_id.split('_').join(' ');
      // foundTitle = foundTitle.split('-').join(' ');
      // foundTitle = foundTitle.substring(0, foundTitle.lastIndexOf(" "));
      // this.title = foundTitle.toUpperCase()
      //   console.log(this.title);
      idFiche = foundId
    } else {
      idFiche = 1
    }
    let ws_data
    let ws_data_details = []
    try {
      const datas = await context.$axios
        .post(
          "https://ws-gbbu02.graphibox.eu/WebService.asmx/GetArticles",
          {
            pKey: context.store.state.apiKey,
            pId: 0,
            pIdCat: 0,
            pNbItems: 0,
          },
          {
            headers: {
              "content-type": "application/json; charset=utf-8",
              referer: process.env.PUBLIC_SITE_PATH,
            },
          }
        )
        .then((response) => {
          ws_data = response.data.d
          ws_data = JSON.parse(ws_data)
          for (let i = 0; i < ws_data.length; i++) {
            if (idFiche == ws_data[i].idA) {
              ws_data_details.push(ws_data[i])
            }
          }
          ws_data_details = ws_data_details[0]
        })
        .catch((error) => {
          console.log(error)
        })
      return {
        ws_data,
        ws_data_details,
        idFiche,
      }
    } catch (error) {
      console.log(error)
      // Redirect to error page or 404 depending on server response
    }
  },
  // computed: {
  // 	detailsActu: function() {
  // 		let detailsActuArray = [];
  // 		for (let i = 0; i < this.dataArray.length; i++) {
  // 			if (this.id == this.dataArray[i].idA) {
  // 				detailsActuArray.push(this.dataArray[i]);
  // 			}
  // 		}
  // 		this.referenceArray = detailsActuArray;
  // 		return detailsActuArray;
  // 	},
  // },
  // beforeMount() {
  //     this.searchIdFiche();
  // },
  mounted() {
    this.searchCurrentArticle()
    console.log(this.$route.fullPath)
  },
  methods: {
    //     searchIdFiche() {
    //         if (this.$route.params.slug && this.$route.params.slug.includes("-")) {
    //             let query_id = this.$route.params.slug;
    //             let foundId = query_id.split("-");
    //             foundId = foundId[foundId.length - 1];
    //             let foundTitle = query_id.split('_').join(' ');
    //             foundTitle = foundTitle.split('-').join(' ');
    //             foundTitle = foundTitle.substring(0, foundTitle.lastIndexOf(" "));
    //             this.title = foundTitle.toUpperCase()
    //             this.id = foundId;
    //         } else {
    //             idFiche = 1;
    //         }
    //     },
    searchCurrentArticle() {
      for (let i = 0; i < this.ws_data.length; i++) {
        if (this.idFiche == this.ws_data[i].idA) {
          this.currentArticle = i
        }
      }
      if (
        this.ws_data[this.currentArticle + 1] != null &&
        this.ws_data[this.currentArticle + 1] != undefined
      ) {
        this.nextLink = this.getLinkPortrait(
          this.ws_data[this.currentArticle + 1].titleA,
          this.ws_data[this.currentArticle + 1].idA
        )
      }
      if (
        this.ws_data[this.currentArticle - 1] != null &&
        this.ws_data[this.currentArticle - 1] != undefined
      ) {
        this.previousLink = this.getLinkPortrait(
          this.ws_data[this.currentArticle - 1].titleA,
          this.ws_data[this.currentArticle - 1].idA
        )
      }
    },
  },
}
</script>
