import React from 'react';

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div>
      {/* image */}
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default CartItem;
