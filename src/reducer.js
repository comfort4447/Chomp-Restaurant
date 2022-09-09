export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    // console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >= 0){
                newCart.splice(index,1)
            }else{
                console.log('There were errors while removing product from cart')
            }
            return {...state, basket: newCart}
    }
}
export default reducer