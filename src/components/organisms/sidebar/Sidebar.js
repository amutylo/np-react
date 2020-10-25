import React from 'react';

const Sidebar = (props) => (
    <div className="sidebar">
      <div className="scroll-wrapper">
        { props.children }
      </div>
    </div>
);

export default Sidebar;
