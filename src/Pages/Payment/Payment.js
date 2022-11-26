import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();

  return (
    <div className="my-4 px-4">
      <h2 className="text-2xl text-center font-semibold">
        Payment for "{data?.productName}"
      </h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm payment={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
