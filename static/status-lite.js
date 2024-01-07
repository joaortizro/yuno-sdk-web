import { getPublicApiKey } from './api.js'

async function initStatus() {
  // get api key
  //const publicApiKey = await getPublicApiKey()
  const publicApiKey = 'sandbox_gAAAAABjtxiRutGlhcbHOQx77b9Pi5ITWjqRofanb0OlRsCsyUGrJkFTyfE-p_TnWAa5RuU-B4DpPDt69bxHdct3KAmtZoxtTV8DWBOZmzDzfNiPsNw0GDpeVJemoKX734zjDYyLSHdlHY0_6iPF4lrF_greF9JHeKNkMCApivcaKn6FXz2ce34='
  // start Yuno SDK
  const yuno = Yuno.initialize(publicApiKey)

  const checkoutSession = '49ea4084-6e8d-4086-8ac1-c6eac4ac40ed'
  
  /**
   * Call method that returns status
   * 
   * @return {'READY_TO_PAY' | 'CREATED' | 'PAYED' | 'REJECTED' | 'CANCELLED' | 'ERROR' | 'DECLINED' | 'PENDING' | 'EXPIRED' | 'VERIFIED' | 'REFUNDED'}
   */
  const status = await yuno.yunoPaymentResult(checkoutSession)

  document.write(`Payment Status: ${status}`)
}

window.addEventListener('load', initStatus)