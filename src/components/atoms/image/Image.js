import React from 'react';

const Image = ({ imageData, ...props }) => {
	return (
  <img
			className={ imageData && imageData.className }
			src={ imageData && imageData.src }
			alt={ imageData && imageData.alt }
			onClick={ imageData && imageData.action }
			style={ imageData && imageData.style}
			{ ...props }
		/>
	);
};

export default Image;
