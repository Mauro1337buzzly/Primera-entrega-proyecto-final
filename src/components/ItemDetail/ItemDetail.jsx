import React from 'react';
import Item from '../Item/Item';


export const ItemDetail = ({item}) => {
  return (
   <>
    <div>{Item.nombre}</div>
    <div>{Item.precio}</div>
    <div>{Item.detail}</div>

   </>
  )
}

export default ItemDetail;