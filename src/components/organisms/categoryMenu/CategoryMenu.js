import React, { useEffect, useState } from 'react';
import Api from '../../logic/Api';
import Menuitem from '../../atoms/menuitem/Menuitem';

const homeCategory = {
	entityLabel: 'Home Feed',
	entityId: 0,
	entityUrl: {
		path: '',
	},
	fieldIcon: 'fa-home',
	fieldVisible: 1,
};

const CategoryMenu = props => {
  const[items, setItems] = useState();

  useEffect(
    () => {
    Api.getCategoryMenuItems()
    .then(
      res => {
        const categoryItems = res.data.data && res.data.data.taxonomyTermQuery && res.data.data.taxonomyTermQuery.entities;

				categoryItems.unshift(homeCategory);
				setItems(categoryItems);
		});
    }, []
  );

  return (
    <div className="main-nav">
      <ul className="nav-list reset-list">
        {
          items && items.map((item, index) => {
            return <Menuitem
                        url={ item.entityUrl.path }
                        label={ item.entityLabel }
                        iconClass={ item.fieldIcon }
                        iconPosClass="left-icon"
                        key={ index }
                        path={ item.entityUrl.path }
                      />
          })
        }
      </ul>
    </div>
  );
}

export default CategoryMenu;
