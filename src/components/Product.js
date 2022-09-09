import React from 'react'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal';

function Product({id, title, price, details, img}) {

    const [{basket}, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <>
        <div className='burger_menu'>
            <div className='burger_menu_details'>
                <div className='image'>
                    <img className='menu_img' src={`./images/${img}`}/>
                </div>
                <div className='burger_details'>
                    <div className='details1'>
                        <p className='title1'>{title}</p>
                        <p className='title'>$ {price}</p>
                        <button className='hero_btn4' onClick={removeItem}>Remove</button>
                    </div>
                    
                </div>
            </div>
        </div>
            {
                basket.length > 0 && (
                    <div>
                        <SubTotal />
                    </div>
                        
                )
            }
            
        </>
        
    )
}

export default Product