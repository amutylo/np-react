import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../organisms/header/Header';
import Sidebar from '../organisms/sidebar/Sidebar';
import Wrapper from '../organisms/wrapper/Wrapper';
import Content from '../organisms/content/Content';
import Logo from '../organisms/logo/Logo';
import Image from '../atoms/image/Image';
import logo from '../../assets/logo.png';
import CategoryMenu from '../organisms/categoryMenu/CategoryMenu';
import Aside from '../organisms/aside/Aside';
import Footer from '../organisms/footer/Footer';
import Menu from '../organisms/menu/Menu';
import Button from '../atoms/button/Button';
import '../../App.css';
import Leftmenu from '../organisms/leftmenu/Leftmenu';




const logoData = {
  src: logo
};

const layout = (props) => (
    <Aux>
      <Sidebar>
        <Logo>
          <Image imageData={ logoData } />
        </Logo>
        <CategoryMenu />
        <Aside>
          <Footer>
            <Menu>
              <Leftmenu />
            </Menu>
            © 2020{' '}
            <Button as="a" href={ '/app' } >
              News Portal
            </Button>
            . All rights reserved.
          </Footer>
        </Aside>
      </Sidebar>
      <Wrapper>
        <Header>

        </Header>
        <Content>

        </Content>
      </Wrapper>

    </Aux>

);

export default layout;
