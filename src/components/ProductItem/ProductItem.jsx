import React from 'react'
import Button from '../Button/Button'



const ProductItem = () => {
  return (
    <div className={'product' + className}>
        <div className={'img'}/>
        <div className={'title'}>{product.title}</div>
        <div className={'description'}>{product.description}</div>
        <div className={'price'}>
             <span>Price: <b>{product.price}</b></span>
        </div>

        <Button className={'add-btn'}>Add to bin</Button>
    </div>
  )
}