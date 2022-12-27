import React, { Component } from 'react'
import { Container, ContainerWrapper, Nav, NavCenter, Navleft, NavRight } from './style';

class Navbar extends Component {
    render() {
        return (
            <Nav>
                Navbar
            </Nav>
            // <Container>
            //     <ContainerWrapper>
            //         <Nav>
            //             <Navleft></Navleft>
            //             <NavCenter></NavCenter>
            //             <NavRight></NavRight>
            //         </Nav>
            //     </ContainerWrapper>
            // </Container>
        )
    }
}

export default Navbar;