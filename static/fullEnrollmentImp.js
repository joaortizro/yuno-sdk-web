import { getPublicApiKey } from "./api.js"


async function initFullEnrollmentImp () {
  const publicApiKey = 'sandbox_gAAAAABjtxiRutGlhcbHOQx77b9Pi5ITWjqRofanb0OlRsCsyUGrJkFTyfE-p_TnWAa5RuU-B4DpPDt69bxHdct3KAmtZoxtTV8DWBOZmzDzfNiPsNw0GDpeVJemoKX734zjDYyLSHdlHY0_6iPF4lrF_greF9JHeKNkMCApivcaKn6FXz2ce34='
  // start Yuno SDK
  const yuno = Yuno.initialize(publicApiKey)

  const customerSession = 'fe873268-499f-4b36-9f62-68cdcd567ab0'
  const countryCode='CO'
  
  yuno.mountEnrollmentLite({
    customerSession,
    /**
     * language can be one of es, en, pt
     */
    language: "en",
    /**
     * country can be one of CO, BR, CL, PE, EC, UR, MX
     */
    countryCode,
    /**
     *  Hide or show the Yuno loading/spinner page
     *  default is true
     */
    showLoading: true,
    /**
     * 
     * @param { isLoading: boolean, type: 'DOCUMENT' | 'ONE_TIME_TOKEN'  } data
     */
    onLoading: (args) => {
      console.log(args);
    },
    /**
     * Where the forms a shown
     * default { type: 'modal' }
     */
    renderMode: {
      /**
       * type can be one of `modal` or `element`
       * default modal
       */
      type: 'modal',
      /**
       * element where the form will be rendered
       * only needed if type is element
       */
      elementSelector: '#form-element',
    },
    /**
     * @param { error: 'CANCELED_BY_USER' | any }
     */
    yunoError: () => {
      console.log('There was an error', error)
    },
  });
}

window.addEventListener('load', initFullEnrollmentImp)