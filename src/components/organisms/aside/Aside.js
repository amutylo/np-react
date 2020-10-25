import React from 'react';

const Aside = props => (
  <div className="footer-aside-nav">
    <aside>
      { props.children }
    </aside>
  </div>
);

export default Aside;
