import React from 'react';
import Aux from '../../../hoc/Auxi'

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li><span>{igKey}</span>: {props.ingredients[igKey]}</li>
            
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Amazing burger with following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout </p>
            <button>CANCEL</button>
            <button>CONTINUES</button>
        </Aux>
    );
};

export default OrderSummary;