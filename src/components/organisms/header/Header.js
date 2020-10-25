import React from 'react';

const Header = (props) => (
  <header className={ props.componentClass }>
    { props.children }
  </header>
);

export default Header;
