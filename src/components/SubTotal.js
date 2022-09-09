import React from "react"
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();

    const getCartTotal = (basket) => 
    basket.reduce((amount, items) => items.price + amount, 0);

    return (
        <div className="subTotal">
                        <hr></hr>
                        <CurrencyFormat
                            renderText = {(value) => (
                                <div className="total">
                                    <p>
                                        SubTotal
                                    </p>
                                        <p><strong>{`${value}`}</strong></p>
                                </div>
                            )}
                            decimalScale={2}
                            value={getCartTotal(basket)}
                            displayType = {"text"}
                            thousandSeperator={true}
                            prefix={'$'}
                        />
                        <button className='hero_btn6'>Continue to checkout</button>
                    </div>
    )
}

export default SubTotal