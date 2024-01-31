import React from "react";
import Swal from "sweetalert2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export function PayPal({ total }) {
  const styles = {
    color: "black",
    height: 40,
    tagline: false,
    shape: "pill",
  };

  const options = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    components: "buttons",
    vault: true,
  };

  const handleApprove = async (data, actions) => {
    const order = await actions.order.capture();

    Swal.fire({
      title: 'Payment Authorised Success!',
      icon: 'success',
      confirmButtonText: 'Ok',
      customClass: {
        container: 'payments-success-swal2-container',
      }
    });

    const messageApprove = (orderId) => {
      return orderId;
    };
    messageApprove();
  };

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const handleError = (error) => {
    Swal.fire({
      title: "The payment is not authorised. Try again later!",
      icon: "error",
      confirmButtonText: "Ok",
      customClass: {
        container: 'payments-error-swal2-container',
      }
    });

    setErrorOrder(error);
  };

  return (
    <PayPalScriptProvider options={options}>
      <PayPalButtons
        style={styles}
        className="paypal-button"
        createOrder={handleCreateOrder}
        onApprove={handleApprove}
        onError={handleError}
      />
    </PayPalScriptProvider>
  );
}
