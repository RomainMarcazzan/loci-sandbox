<script>
export default {
  data() {
    return {
      infosIp: "",
      infosBrowser: "",
      // siteID: 14, // ID TEST
      // apiKey: "VrPndaEzxehPS7f63ZEr8vVdK2HtGDfD", // API TEST
      siteID: this.$store.state.siteId,
      apiKey: this.$store.state.apiKey,
    }
  },
  created: function () {},
  mounted() {
    this.getIPAdress()
  },
  methods: {
    validEmail(email) {
      var regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regEmail.test(email)
    },
    validPhone(phone) {
      phone.trim()
      phone = phone.split(" ").join("")
      var regPhone = /^0[1-9][0-9]{8}$/
      return regPhone.test(phone)
    },
    validInteger(zipcode) {
      var regInteger = /[0-9]{2,5}/
      return regInteger.test(zipcode)
    },
    validMessage(message) {
      var regMessage = /\b(?:(?!http)\w)+\b/
      return regMessage.test(message)
    },
    getIPAdress() {
      fetch("https://ws-gbbu02.graphibox.eu/GetIP.aspx")
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          this.infosIp = res.IP
          this.infosBrowser = res.BROWSER
        })
    },
  },
}
</script>
