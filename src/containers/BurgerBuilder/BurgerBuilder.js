import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 20, //key value pairs
    bacon: 50,
    cheese: 30,
    meat: 30
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    state = {
        ingredients: {
            salad: 0, //key value pairs
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 150
    }


    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const udatedIngredients = {
            ...this.state.ingredients
        };
        udatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: udatedIngredients });
    }

    removeIngredientsHandler = (type) => {

    }


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientsAdded={this.addIngredientsHandler} />
            </Aux>

        );
    }
}
export default BurgerBuilder;