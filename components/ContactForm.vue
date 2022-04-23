<template>
  <section class="contact-form wrapper">
    <div class="contact-form__left">
      <nuxt-img
        src="/images/plan.jpg"
        alt="contact photo"
        format="webp"
        width="852"
        height="725"
        sizes="sm:100vw md:600px xxl:800px"
      />
    </div>
    <div class="contact-form__right">
      <!-- <h4>Envoyez-nous un message</h4> -->
      <div class="contact-form__errors" v-if="errors.length">
        <ul>
          <li v-for="(error, index) in errors" :key="'error' + index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="contact-form__success" v-if="success.length">
        <p>{{ success[0] }}</p>
      </div>
      <div class="contact-form__right__subgrid-two-col">
        <div>
          <!-- <label for="lastname">Nom</label> -->
          <input
            type="text"
            name="lastname"
            id="lastname"
            v-model="lastname"
            placeholder="Nom"
          />
        </div>
        <div>
          <!-- <label for="firstname">Prénom</label> -->
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Prénom"
            v-model="firstname"
          />
        </div>
      </div>
      <div class="contact-form__right__subgrid-two-col">
        <div>
          <!-- <label for="phone">Téléphone</label> -->
          <input
            type="phone"
            placeholder="Téléphone"
            name="phone"
            id="phone"
            v-model="phone"
          />
        </div>
        <div>
          <!-- <label for="email">Email</label> -->
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            v-model="email"
          />
        </div>
      </div>
      <!-- <div class="contact-form__right__subgrid-one-col">
        <label for="company">Nom d'entreprise (optionel)</label>
        <input
          type="text"
          placeholder="Nom d'entreprise (optionel)"
          name="company"
          id="company"
          v-model="company"
        />
      </div> -->
      <div class="contact-form__right__subgrid-one-col">
        <!-- <label for="message">Message</label> -->
        <textarea
          name="message"
          placeholder="Message"
          id="message"
          cols="30"
          rows="6"
          v-model="message"
        />
      </div>
      <div class="container_checkbox">
        <input
          class="the_checkbox"
          type="checkbox"
          name="acceptInfosConditionUse"
          id="acceptInfosConditionUse"
          v-model="acceptInfosConditionUse"
        />
        <label for="acceptInfosConditionUse"
          >J’ai pris connaissance des
          <NuxtLink
            to="/mentions-legales"
            class="checkboxLink"
            title="Conditions générales d'utilisation"
            >CGU</NuxtLink
          >
          que j’accepte <span class="purple">(obligatoire)</span></label
        >
      </div>
      <button
        class="button-blue"
        data-aos="flip-up"
        data-aos-duration="2000"
        @click="coForm()"
      >
        ENVOYER
      </button>
    </div>
  </section>
</template>
<script>
import sendEmail from "@/mixins/sendEmail.vue"
export default {
  mixins: [sendEmail],
  data() {
    return {
      lastname: "",
      firstname: "",
      position: "",
      company: "",
      address: "",
      zipcode: "",
      city: "",
      county: "",
      subject: "",
      phone: "",
      email: "",
      message: "",
      country: "",
      acceptInfosCommercialUse: 0,
      acceptInfosConditionUse: 0,
      errors: [],
      success: [],
    }
  },
  methods: {
    coForm() {
      if (
        // this.company &&
        this.lastname &&
        this.firstname &&
        this.email &&
        this.validEmail(this.email) &&
        this.message &&
        this.acceptInfosConditionUse
      ) {
        let myApiKey = this.apiKey
        console.log("API-KEY", myApiKey)
        let myStr =
          this.company +
          "|" +
          this.lastname +
          "|" +
          this.firstname +
          "|" +
          this.phone +
          "|" +
          this.email +
          "|" +
          this.address +
          "|" +
          this.city +
          "|" +
          this.zipcode +
          "|" +
          this.county +
          "|" +
          this.country +
          "|" +
          this.subject +
          "|" +
          this.message +
          "|" +
          this.acceptInfosCommercialUse +
          "|" +
          this.acceptInfosConditionUse +
          "|" +
          this.infosBrowser +
          "|" +
          this.infosIp +
          "|" +
          this.siteID
        let success = this.success
        this.company = ""
        this.lastname = ""
        this.firstname = ""
        this.email = ""
        this.phone = ""
        this.message = ""
        this.acceptInfosConditionUse = 0
        this.errors = []
        // console.log(myStr);
        fetch(
          "https://ws-gbbu02.graphibox.eu/WebService.asmx/ToolsSymetricEncrypt",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              referer: process.env.PUBLIC_SITE_PATH,
            },
            body: JSON.stringify({
              pKey: myApiKey,
              pDatas: myStr,
            }),
          }
        )
          .then(function (r) {
            return r.json()
          })
          .then(function (r) {
            let data = JSON.parse(r.d)
            console.log("success : ")
            console.log(data)
            let myStrEncrypt = data.replace(/"/g, "")
            console.log(myStrEncrypt)
            if (myStrEncrypt != "") {
              fetch(
                "https://ws-gbbu02.graphibox.eu/WebService.asmx/SendContact",
                {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    referer: process.env.PUBLIC_SITE_PATH,
                  },
                  body: JSON.stringify({
                    pKey: myApiKey,
                    pType: "web-contact",
                    pDatas: myStrEncrypt,
                  }),
                }
              )
                .then(function (res) {
                  return res.json()
                })
                .then(function (res) {
                  console.log("res.d")
                  // console.log(res.d);
                  success.push("Votre demande a bien été envoyée.")
                  // console.log(success);
                })
            }
          })
      } else {
        this.errors = []
        let errors = this.errors
        if (this.lastname === "") {
          errors.push("Veuillez renseigner votre nom.")
        }
        if (this.firstname === "") {
          errors.push("Veuillez renseigner votre prénom.")
        }
        if (this.message === "") {
          errors.push("Veuillez écrire un message.")
        }
        if (this.email === "") {
          errors.push("Veuillez renseigner votre email")
        } else if (!this.validEmail(this.email)) {
          errors.push("Veuillez renseigner un email valide.")
        }
        if (this.acceptInfosConditionUse === 0) {
          errors.push("Veuillez accepter les conditions d'utilisations")
        }
        // console.log(this.errors);
      }
    },
  },
}
</script>

<style></style>
