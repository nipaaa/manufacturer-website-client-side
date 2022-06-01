import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ myOrder }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);

    const { _id, price, name, email, treatment } = myOrder;

    useEffect(() => {
        fetch("https://rocky-stream-44489.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        //for get cardelement info
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        //error
        setCardError(error?.message || "");
        setSuccess("");
        setProcessing(true);

        // confirm card payment
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            setSuccess("Congrats! Your payment is completed.");
            console.log(paymentIntent);

            const payment = {
                myOrder: _id,
                transactionId: paymentIntent.id,
                for: treatment,
                status: "paid",
            };
            fetch(` https://shrouded-badlands-19612.herokuapp.com/order/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify({ paymentId: payment }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    console.log(data);
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
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
                    className="btn btn-success btn-sm mt-4"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {success && (
                <div className="text-green-500">
                    <p>{success} </p>
                    <p>
                        Transaction Id:{" "}
                        <span className="text-red-500 font-bold">
                            <i>{transactionId}</i>
                        </span>{" "}
                    </p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;