const initialCartState = {
    cartItems: [],
    total: 0,
    selectedItems: [], 
};

const calculateTotal = (cartItems) => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const calculateSelectedTotal = (cartItems, selectedItems) => {
    return cartItems
        .filter(item => selectedItems.includes(item.id)) 
        .reduce((sum, item) => sum + item.price * item.quantity, 0); 
};

export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);

            if (itemInCart) {
                const updatedItems = state.cartItems.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
                return {
                    ...state,
                    cartItems: updatedItems,
                    total: calculateTotal(updatedItems),
                };
            } else {
                const newCartItems = [...state.cartItems, action.payload];
                return {
                    ...state,
                    cartItems: newCartItems,
                    total: calculateTotal(newCartItems),
                };
            }

        case 'INCREMENT_QUANTITY':
            const incrementedCartItems = state.cartItems.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            return {
                ...state,
                cartItems: incrementedCartItems,
                total: calculateTotal(incrementedCartItems),
            };

        case 'DECREMENT_QUANTITY':
            const decrementedCartItems = state.cartItems
                .map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0); 

            return {
                ...state,
                cartItems: decrementedCartItems,
                total: calculateTotal(decrementedCartItems),
            };

        case 'TOGGLE_SELECT_ITEM':
            const isSelected = state.selectedItems.includes(action.payload.id);
            const updatedSelectedItems = isSelected
                ? state.selectedItems.filter(id => id !== action.payload.id)
                : [...state.selectedItems, action.payload.id]; 

            return {
                ...state,
                selectedItems: updatedSelectedItems,
                total: calculateSelectedTotal(state.cartItems, updatedSelectedItems), 
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                selectedItems: [],
                total: 0,
            };

        default:
            return state;
    }
};

export default cartReducer;

