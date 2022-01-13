import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        <Container>
            <a href="#">Tesla  © 2022</a>
            <a href="#">Privacy & Legal</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Locations</a>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    min-height: 60px;
    // position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 30;
    right: 30;
    z-index: 1;

    a {
        text-decoration: none;
        font-size: 20;
    }
`