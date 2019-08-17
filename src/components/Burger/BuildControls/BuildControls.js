import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';


const control = [
    {label: 'salad ', type:'salad'},
    {label: 'bacon', type:'bacon'},
    {label: 'cheese', type:'cheese'},
    {label: 'meat', type:'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {control.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
    
);
export default buildControls;