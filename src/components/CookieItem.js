import React from 'react';

const CookieItem = (props) => {
  const cookie = props.cookie;
  return (
    <div className="product">
      <img className="productImage" alt={cookie.name} src={cookie.image} />
      <p className="text">{cookie.name}</p>
      <p className="text">{cookie.price} KD</p>
    </div>
  );
};

export default CookieItem;
