export const initialState = {
    basket : [],
    user: null
};

//selector
export const getBasaketTotal =(basket)=>
 basket.reduce((amount,item)=> item.price + amount,0);

const reducer = (state, action) => {
    switch(action.type){
        case "ADD TO CART":
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
             
            case "Remove from Cart":
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id == action.id
                );
                let newBasket = [...state.basket];

                if(index >=0){
                  newBasket.splice(index, 1);
                }else {
                    console.warn(`can't remove the product {id: ${action.id}} as its not
                     in the Cart`)
                }
                return {
                    ...state,
                    basket: newBasket,
                }

                case "SET_USER":
                    return{
                        ...state,
                        user:action.user
                    }
            default:
                return state;
    }
};

export default reducer;