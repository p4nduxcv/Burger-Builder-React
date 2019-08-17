import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';


const control = [
    {label: 'සලාද ', type:'salad'},
    {label: 'හරක් මස්', type:'bacon'},
    {label: 'චීස් ', type:'cheese'},
    {label: 'කුකුල් මස්', type:'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {control.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
    
);
export default buildControls;