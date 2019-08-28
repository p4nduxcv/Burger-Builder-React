import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';


const control = [
    { label: 'salad ', type: 'salad' },
    { label: 'bacon', type: 'bacon' },
    { label: 'cheese', type: 'cheese' },
    { label: 'meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p className={classes.price}>Current Price : <strong>{props.price.toFixed(2)} LKR</strong></p>
        {control.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientsAdded(ctrl.type)}
                removed={() => props.ingredientsRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>
    </div>

);
export default buildControls;