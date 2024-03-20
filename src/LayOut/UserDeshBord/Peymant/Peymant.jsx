import { Elements } from "@stripe/react-stripe-js";
import ChaeckOutFrom from "./ChaeckOutFrom";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Peymant = () => {
    
    return (
        <div>
            <Elements stripe={stripePromise}>
                <ChaeckOutFrom/>
            </Elements>
        </div>
    );
};

export default Peymant;