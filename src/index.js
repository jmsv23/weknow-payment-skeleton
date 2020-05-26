import pkg from "../package.json";
import i18n from "./i18n/index.js";
import schemas from "./schemas/index.js";
import weknowPaymentSkeletonCapturePayment from "./util/weknowPaymentSkeletonCapturePayment.js";
import weknowPaymentSkeletonCreateAuthorizedPayment from "./util/weknowPaymentSkeletonCreateAuthorizedPayment.js";
import weknowPaymentSkeletonCreateRefund from "./util/weknowPaymentSkeletonCreateRefund.js";
import weknowPaymentSkeletonListRefunds from "./util/weknowPaymentSkeletonListRefunds.js";
import startup from "./startup.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Weknow payment skeleton",
    name: "weknow-payment-skeleton",
    version: pkg.version,
    i18n,
    graphQL: {
      schemas
    },
    functionsByType: {
      startup: [startup]
    },
    paymentMethods: [{
      name: "weknow_payment_skeleton",
      canRefund: true,
      displayName: "Weknow Payment Skeleton",
      functions: {
        capturePayment: weknowPaymentSkeletonCapturePayment,
        createAuthorizedPayment: weknowPaymentSkeletonCreateAuthorizedPayment,
        createRefund: weknowPaymentSkeletonCreateRefund,
        listRefunds: weknowPaymentSkeletonListRefunds
      }
    }]
  });
}
