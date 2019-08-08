import React from 'react';
import Aux from '../../hoc/Auxi'
import styled from 'styled-components'

const Main = styled.main`
  font-size:45px;
`;

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Main>
            {props.children} 
        </Main>
    </Aux>
);

export default layout;