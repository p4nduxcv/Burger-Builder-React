import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    console.log(props.ingredients)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {   //Reduce array with current element  arr = previouse value el = current value
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Add Ingredients</p>
    }
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;