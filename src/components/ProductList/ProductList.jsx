import React, { useState } from 'react';
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../hooks/useTelegram';

const products = [
    {id: '1', title: 'Poops', price: 100, description: 'someones poop'},
    {id: '2', title: 'Waifu', price: 1200, description: 'waifu'},
    {id: '3', title: 'manga', price: 500, description: 'One Piece'},
    {id: '4', title: 'manga2', price: 1040, description: 'Naruto'},
    {id: '5', title: 'manga3', price: 1040, description: 'Slime reborn'},
    {id: '6', title: 'hat', price: 2100, description: 'Luffy hat'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price

    }, 0)

}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);


    const {tg} = useTelegram();



    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) 
        {
            newItems = addedItems.filter(item => item.id !== product.id);
          
    
            }  else {
                newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: "Buy ${getTotalPrice(newItems)}"
            })
        }

    }

  return (
    <div className = {"list"}>
    {products.map (item => (
        <ProductItem
        product={item}
        onAdd={onAdd}
        className={'item'}
        />
    ))}
    </div>
  );
};

export default ProductList