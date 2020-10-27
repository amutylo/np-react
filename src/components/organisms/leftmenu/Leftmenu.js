import React, { useEffect, useState } from 'react';
import Menuitem from '../../atoms/menuitem/Menuitem';
import Api from '../../logic/Api';

const Leftmenu = props => {
  const[items, setItems] = useState();

  useEffect(() => {
    Api.getMenuItems()
    .then(
      res => {
        const links =
          res.data.data && res.data.data.menuByName && res.data.data.menuByName.links
            ? res.data.data.menuByName.links
            : [];
        setItems(links);
		});
    }, []
  );

  return (

  <ul className="aside-menu reset-list">
    {

    items && items.map((item, index) => {
      return <Menuitem
									url={ item.url.path }
									label={ item.label }
                  key={ index }
									path={ item.url.path }
                  type="fa"
								/>
    })}
  </ul>);
};

export default Leftmenu;
