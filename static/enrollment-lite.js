import { getCustomerSession, createEnrollment, getPublicApiKey } from './api.js'

async function initEnrollmentLite() {
  // get customer session from merchan back
  //const { customer_session: customerSession, country: countryCode } = await getCustomerSession()
  const customerSession = "b9553f48-a670-4f55-a8c8-81a00706cf3a"
  const countryCode = "GT"
  const publicApiKey = 'sandbox_gAAAAABjtxiRutGlhcbHOQx77b9Pi5ITWjqRofanb0OlRsCsyUGrJkFTyfE-p_TnWAa5RuU-B4DpPDt69bxHdct3KAmtZoxtTV8DWBOZmzDzfNiPsNw0GDpeVJemoKX734zjDYyLSHdlHY0_6iPF4lrF_greF9JHeKNkMCApivcaKn6FXz2ce34='
  // console.log(":rocket: , file: enrollment-lite.js:6 , initEnrollmentLite , countryCode", countryCode)
  // console.log(":rocket: , file: enrollment-lite.js:6 , initEnrollmentLite , customerSession", customerSession)
  // create enrollment
  // await createEnrollment(customerSession)
  // get api key
  //const publicApiKey = await getPublicApiKey()
  // start Yuno SDK
  const yuno = Yuno.initialize(publicApiKey)
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
    showLoading: false,
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
    card:{
      texts:{
        cardForm:{
          enrollmentSubmitButton:'guardar'
        }
      },
      styles:
      `
      .Yuno-card-form .Yuno-card-form__submit button:after {
        background-color: red;
      }
      `
    },
    /**
     * @param { error: 'CANCELED_BY_USER' | any }
     */
    yunoError: (error) => {
      console.log('There was an error', error)
    },
    /**
     * Call back is called with the following object
     * @param {{
     *  status: 'CREATED'
     *    | 'EXPIRED',
     *    | 'REJECTED',
     *    | 'READY_TO_ENROLL',
     *    | 'ENROLL_IN_PROCESS',
     *    | 'UNENROLL_IN_PROCESS',
     *    | 'ENROLLED',
     *    | 'DECLINED',
     *    | 'CANCELED',
     *    | 'ERROR',
     *    | 'UNENROLLED',
     *  vaultedToken: string,
     * }}
     */
    yunoEnrollmentStatus: ({ status, vaultedToken}) => {
      console.log('status', { status, vaultedToken})
    },
  });
}
window.addEventListener('load', initEnrollmentLite)