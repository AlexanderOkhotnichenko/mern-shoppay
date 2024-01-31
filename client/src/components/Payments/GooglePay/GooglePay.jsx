import React from "react";
import Swal from 'sweetalert2'
import GooglePayButton from "@google-pay/button-react";

export function GooglePay({ total }) {
  const paymentRequest = {
    apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: import.meta.env.VITE_GOOGLEPAY_SELLER_ID,
          merchantName: import.meta.env.VITE_GOOGLEPAY_SELLER_NAME,
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: total,
          currencyCode: "USD",
          countryCode: "US",
        },
        shippingAddressRequired: true,
        callbackIntents: ["PAYMENT_AUTHORIZATION"],
  }

  const handlePaymentAuthorized = (paymentData) => {
    Swal.fire({
      title: 'Payment Authorised Success!',
      icon: 'success',
      confirmButtonText: 'Ok',
      customClass: {
        container: 'payments-success-swal2-container',
      }
    });
    return { transactionState: "SUCCESS" };
  };

  const handleLoadPaymentData = (paymentRequest) => {console.log(paymentRequest);};

  const handlePaymentError = (paymentError) => {
    Swal.fire({
      title: "The payment is not authorised. Try again later!",
      icon: "error",
      confirmButtonText: "Ok",
      customClass: {
        container: 'payments-error-swal2-container',
      }
    });
  }

  return (
    <GooglePayButton
      environment="TEST"
      buttonColor="white"
      buttonType="plain"
      paymentRequest={paymentRequest}
      onLoadPaymentData={handleLoadPaymentData}
      onPaymentAuthorized={handlePaymentAuthorized}
      onError={handlePaymentError}
      existingPaymentMethodRequired="true"
    />
  );
}