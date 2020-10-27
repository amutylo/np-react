import React from 'react';
import Icon from '../icon/Icon';

const Menuitem = props => (
    <li>
      <Icon type={props.type} iconClass={ props.iconClass} />
      <a
        href={ `/app/page${ props.url }` }
        data-drupal-link-system-path={ props.path }
        onClick={ props.onClick }
      >
        {props.label}
        </a>
    </li>
);

export default Menuitem;
