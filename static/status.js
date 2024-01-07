import { getPublicApiKey } from './api.js'

async function initStatus() {
  // get api key
  //const publicApiKey = await getPublicApiKey()
  const publicApiKey = 'sandbox_gAAAAABjtxiRutGlhcbHOQx77b9Pi5ITWjqRofanb0OlRsCsyUGrJkFTyfE-p_TnWAa5RuU-B4DpPDt69bxHdct3KAmtZoxtTV8DWBOZmzDzfNiPsNw0GDpeVJemoKX734zjDYyLSHdlHY0_6iPF4lrF_greF9JHeKNkMCApivcaKn6FXz2ce34='
  const accountId = 'daa8dc84-b0e9-4053-8ac9-f71a1e6e5e4b'
  const setupId = "6d52b8a2-57e2-4ddc-be6d-66983238e16c"
  // start Yuno SDK
  const yuno = Yuno.initialize(publicApiKey)
  /**
   * Mount status in the DOM
   */
  
  yuno.mountStatusPayment({
    checkoutSession: 'dbe1f35f-b9f7-4939-8a43-c98bd59f5f6d',
    /**
     * country can be one of CO, BR, CL, PE, EC, UR, MX
     */
    countryCode: 'GT',
    /**
    * language can be one of es, en, pt
    */
    language: 'es',
    /**
     * 
     * @param {'READY_TO_PAY' | 'CREATED' | 'PAYED' | 'REJECTED' | 'CANCELLED' | 'ERROR' | 'DECLINED' | 'PENDING' | 'EXPIRED' | 'VERIFIED' | 'REFUNDED'} data
     */
    yunoPaymentResult(data) {
      console.log('yunoPaymentResult', data)
      if(data==='SUCCEEDED'){
        window.location.replace("https://www.youtube.com/")
      }
    }
  })
}

window.addEventListener('load', initStatus)