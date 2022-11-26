import React, { useEffect, useState } from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"

const CheckOutForm = ({payment}) => {
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const {productPrice, userEmail, userName, bookingId } = payment;
    console.log(bookingId);

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch(`http://localhost:5000/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ productPrice }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret)
        });
    }, [productPrice]);


    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!stripe || !elements){
          return;
        }

        const card = elements.getElement(CardElement);
        if(card == null){
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if(error){
          setCardError(error)
        }
        else {
          setCardError("")
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
      if(confirmError){
        setCardError(confirmError.message)
        return;
      };
        
      if (paymentIntent.status === "succeeded") {
        const payment = {
          productPrice,
          transactionId: paymentIntent.id,
          userEmail,
          // bookingId: _id,
        };
        fetch(`http://localhost:5000/payments?id=${bookingId}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              setSuccess("Congrats! your payment completed");
              setTransactionId(paymentIntent.id);
            }
          });
      }

    };



  return (
    <>
    <form className="w-1/2 mx-auto my-3" onSubmit={handleSubmit}>
      <CardElement
      className="border-2 p-2"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary w-full my-2 bg-blue-500 text-white font-bold rounded-md border-none" type="submit" 
      disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
      </form>
      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckOutForm;
