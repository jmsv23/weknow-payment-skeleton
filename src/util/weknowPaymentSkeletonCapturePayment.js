/**
 * @name weknowPaymentSkeletonCapturePayment
 * @method
 * @summary Capture payment for Weknow Payment Skeleton method
 * @param {Object} context an object containing the per-request state
 * @param {Object} payment object containing authorization ID
 * @returns {Object} result for capturing a payment
 * @private
 */
export default function weknowPaymentSkeletonCapturePayment() {
  return { saved: true, response: {} };
}
