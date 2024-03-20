import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useBaseUrl from "../../../Hook/BaseUrl/useBaseUrl";
import useCarts from "../../../Hook/getCarts/useCarts";
import useAuth from "../../../Hook/Auth/useAuth";
import Swal from "sweetalert2";


const ChaeckOutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {user}= useAuth();
    const [error, setError] = useState('');
    const [clientSecret, setclientSecret] = useState('');
    const [trantionId, settrantionId] = useState('');
    const baseUrl = useBaseUrl();
    const [cart, refetch] = useCarts();
    const totalprice = cart.reduce((total, item)=>total+item.price,0)
    // console.log({cart})
    // console.log({totalprice})
    useEffect(()=>{
        if (totalprice > 0) {
            baseUrl.post("/create-payment-intent", {price: totalprice})
        .then(res=>{
            // console.log('ChacOut page ',res.data);
            setclientSecret(res.data.clientSecret);
        })
        }
    },[baseUrl, totalprice])

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error)
            setError(error.message)
        } else {
            console.log(paymentMethod)
            setError('');
        }
        // confirm Payment ----
        const {paymentIntent, error:confirmErorr} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmErorr) {
            console.log("confirmErorr", confirmErorr)
        } else {
            if (paymentIntent.status === "succeeded") {
                // console.log("paymentIntent", paymentIntent.id)
                settrantionId(paymentIntent.id);
                const payment = {
                    email: user?.email,
                    price:totalprice,
                    transationId:paymentIntent.id,
                    date:new Date(), //TODO: UTC date convert 
                    CartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status:'Pending'
                }
              const res = await baseUrl.post('/cardpayment', payment)
              console.log(res.data)
              if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
              }
              refetch();
            }
            
        }
    }
    return (
        <div className="w-[50%] m-auto mt-8">
            <form onSubmit={handleSubmit}>
                <CardElement
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
                

                <button className="mt-4 btn btn-outline" disabled={!stripe || !clientSecret}>Submit</button>
            <p className="text-red-800">{error}</p>
            </form>
            {trantionId && <p className="text-green-700">{trantionId}</p>}
        </div>
    );
};

export default ChaeckOutFrom;