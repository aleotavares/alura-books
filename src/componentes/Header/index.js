import React from 'react';
import IconesHeader from './IconesHeader';
import OpcoesHeader from './OpcoesHeader';
import Logo from '../Logo';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`;

function Header() {

    return (
        <HeaderContainer>
            <Logo />
            { <OpcoesHeader /> }
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;