import React from 'react';
import Aux from '../../hoc/Auxi'
import styled from 'styled-components'

const Main = styled.main`
  font-size:45px;
`;

const layout = (props) => (
    <React.Fragment>
        <Main>
            {props.children} 
        </Main>
    </React.Fragment>
);

export default layout;