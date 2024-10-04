const initialCartState = {
    cartItems: [],
    total: 0,
    selectedItems: [], // Artículos seleccionados
};

// Función para calcular el total de todos los productos en el carrito
const calculateTotal = (cartItems) => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// Función para calcular el total basado en los artículos seleccionados
const calculateSelectedTotal = (cartItems, selectedItems) => {
    return cartItems
        .filter(item => selectedItems.includes(item.id)) // Filtra solo los seleccionados
        .reduce((sum, item) => sum + item.price * item.quantity, 0); // Calcula el total de los seleccionados
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
                .filter(item => item.quantity > 0); // Filtra los artículos cuya cantidad sea mayor a 0

            return {
                ...state,
                cartItems: decrementedCartItems,
                total: calculateTotal(decrementedCartItems),
            };

        case 'TOGGLE_SELECT_ITEM':
            const isSelected = state.selectedItems.includes(action.payload.id);
            const updatedSelectedItems = isSelected
                ? state.selectedItems.filter(id => id !== action.payload.id) // Deselecciona si ya estaba seleccionado
                : [...state.selectedItems, action.payload.id]; // Selecciona si no estaba

            return {
                ...state,
                selectedItems: updatedSelectedItems,
                total: calculateSelectedTotal(state.cartItems, updatedSelectedItems), // Calcula el total basado en los seleccionados
            };

        default:
            return state;
    }
};

export default cartReducer;

