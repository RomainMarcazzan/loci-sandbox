export const actualitiesMixin = {
  data() {
    return {
      dataActualitiesArray: "",
      sessionData: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.refresh()
    })
  },
  async fetch() {
    if (process.browser) {
      this.sessionData = sessionStorage.getItem("dataActualitiesArray")

      if (this.sessionData === null) {
        fetch("https://ws-gbbu02.graphibox.eu/WebService.asmx/GetArticles", {
          method: "POST",
          headers: {
            "content-type": "application/json; charset=utf-8",
            referer: process.env.PUBLIC_SITE_PATH,
          },
          body: JSON.stringify({
            pKey: this.$store.state.apiKey,
            pId: 0,
            pIdCat: 0,
            pNbItems: 0,
          }),
        })
          .then(function (res) {
            // console.log(res);
            return res.json()
          })
          .then((res) => {
            let response = JSON.parse(res.d)
            // console.log(response);
            this.dataActualitiesArray = response
            sessionStorage.setItem(
              "dataActualitiesArray",
              JSON.stringify(response)
            )
          })
      } else {
        this.dataActualitiesArray = JSON.parse(this.sessionData)
      }
    }
  },
  methods: {
    getLinkPortrait(title, id) {
      return "/epicerie-actualites/" + this.deleteSpace(title) + "-" + id
    },
    imageUrl(id, imageName) {
      return (
        "gbbu/pub/" +
        this.$store.state.siteId +
        "/medias/articles/" +
        id +
        "/" +
        imageName
      ) // 14 -> SITE ID TEST
    },
    imageUrlMeta(id, imageName) {
      return (
        "https://cdn-gbbu02.graphibox.eu/pub/" +
        this.$store.state.siteId +
        "/medias/articles/" +
        id +
        "/" +
        imageName
      ) // 14 -> SITE ID TEST
    },
    deleteSpace(b) {
      if (b != "") {
        b = b.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        b = b.toLowerCase()
        b.trim()
        b = b.split(" ").join("_")
      }
      return b
    },
  },
}
