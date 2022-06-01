import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(
    "pk_test_51L5txrJ9WIr7BVcmN2bp2D1tHs2WhvYesd2z4TXBcI1XAIJs9Mu1qdvUefQuwSnnxxzWdCnBpzi7DxG1UwyEFYLm00pAxmFUK4"
);

const Payment = () => {
    const { id } = useParams();
    const url = ` https://shrouded-badlands-19612.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(["order", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="w-fit text-center">
            <div className="card bg-base-100 shadow-xl my-12 flex justify-center">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order.displayName}</p>
                    <h2 className="text-center card-title">
                        Please Pay for {order.name}
                    </h2>
                    <p>Please pay: $ {order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;