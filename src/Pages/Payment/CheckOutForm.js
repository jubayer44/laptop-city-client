import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

const CheckOutForm = ({ payment }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { productPrice, userEmail, userName, bookingId } = payment;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({ productPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [productPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      toast.error(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setSuccess("Congrats! your payment completed")
      setTransactionId(paymentIntent.id)
      const payment = {
        productPrice,
        transactionId: paymentIntent.id,
        userEmail,
        // bookingId: _id,
      };
      fetch(`${process.env.REACT_APP_URL}/payments?id=${bookingId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setSuccess("Congrats! your payment completed");
          setTransactionId(paymentIntent.id);
          toast.success("Congrats! your payment completed")
        });
    }
  };


  return (
    <div className="w-1/2 mx-auto my-3">
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border-2 p-2"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary w-full my-2 bg-blue-500 text-white font-bold rounded-md border-none"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {
        success ? <><h2 className="text-green-500">{success}</h2>
        <h2 className="">Your transaction id: <strong>{transactionId}</strong></h2>
        </> : null
      }
    </div>
  );
};

export default CheckOutForm;
