import { getCheckoutSession, createPayment, getPublicApiKey } from "./api.js"

const myAPI = (time)=> new Promise((resolve)=> {
  window.setTimeout(()=> {
    resolve('payment done')
  },time * 1000)
})



async function initCheckoutLite() {
  // get checkout session from merchan back
  //const { checkout_session: checkoutSession, country: countryCode } = await getCheckoutSession()
  const checkoutSession="9974ff34-94dc-4422-8f5a-c723edcdfba2"
  const countryCode='GT'
  const publicApiKey = 'sandbox_gAAAAABjtxiRutGlhcbHOQx77b9Pi5ITWjqRofanb0OlRsCsyUGrJkFTyfE-p_TnWAa5RuU-B4DpPDt69bxHdct3KAmtZoxtTV8DWBOZmzDzfNiPsNw0GDpeVJemoKX734zjDYyLSHdlHY0_6iPF4lrF_greF9JHeKNkMCApivcaKn6FXz2ce34='

  const yuno = Yuno.initialize(publicApiKey)
  yuno.startCheckout({ 
    checkoutSession,
    elementSelector: '#root', 
    countryCode,
    showLoading: true,
    language: 'es',

    async yunoCreatePayment(oneTimeToken) {
      console.log("🚀 , file: checkout-lite.js:40 , yunoCreatePayment , oneTimeToken:", oneTimeToken)
      //await createPayment({ oneTimeToken, checkoutSession })
      //await myAPI(30)
      //yuno.continuePayment()
    },

    yunoPaymentResult(data) {
      console.log('yunoPaymentResult', data)
      window.location.replace('https://www.google.com/')
      // if we enter here its most likely due to there was no challenge 
      // ans we should redirect when DATA is PENDING
    },

    yunoError: (error) => {
      console.log('There was an error, yunoError, pls redirect', error)
      window.location.replace('https://www.youtube.com/')
    },
  })

  yuno.mountCheckoutLite({
    paymentMethodType: 'CARD',
    vaultedToken: '2fb94590-eb13-4f7f-9978-95102dcd44ec',
  })
}

window.addEventListener('load', initCheckoutLite)

// NO CHALLENGE TOKEN 2fb94590-eb13-4f7f-9978-95102dcd44ec
// Challenge 2803d769-19a9-470c-9de6-0a9b16fa41ab