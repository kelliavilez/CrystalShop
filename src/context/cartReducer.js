const initialCartState = {
    cartItems: [],
    total: 0,
};

const calculateTotal = (cartItems) => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
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

        case 'REMOVE_FROM_CART':
            const filteredItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                cartItems: filteredItems,
                total: calculateTotal(filteredItems),
            };

        case 'UPDATE_CART_ITEM_QUANTITY':
            const updatedCartItems = state.cartItems.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
            return {
                ...state,
                cartItems: updatedCartItems,
                total: calculateTotal(updatedCartItems),
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                total: 0,
            };
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems
                    .map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0), // Filtra los artículos cuya cantidad sea mayor a 0
            };
        default:
            return state;
    }
};
export default cartReducer;