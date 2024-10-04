import React, { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { boughtsReducer } from './boughtsReducer';

const AppContext = createContext();

const initialState = {
    user: {
        username: '',
        email: '',
        dateOfBirth: '',
        address: '',
        photo: null,
    },
    cart: {
        cartItems: [],
        total: 0,
        selectedItems: [],  
    },
    boughts: {
        boughtsItems: []
    }
};

const appReducer = (state, action) => ({
    user: userReducer(state.user, action),
    cart: cartReducer(state.cart, action),
    boughts: boughtsReducer(state.boughts, action)
});

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };

