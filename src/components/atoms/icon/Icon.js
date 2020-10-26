import React from 'react';

const Icon = props => {
  if (props.type === 'fa')
    return (<i className="fa fa-chevron-right icon" />);
  else
    return (<i className={ `fa ${ props.iconClass } ${ props.iconPosClass }` } aria-hidden="true" />);
}

export default Icon;
