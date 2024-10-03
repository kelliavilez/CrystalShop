import React, { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer'; 
import { userReducer } from './userReducer'; 
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
  },
};

const appReducer = (state, action) => ({
  user: userReducer(state.user, action),
  cart: cartReducer(state.cart, action),
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


/*import React, { createContext, useReducer } from 'react';
import cartReducer from './cartReducer'   // Reducer del carrito
import userReducer from './userReducer';   // Reducer del usuario

// Estado inicial
const initialState = {
    cart: {
        cartItems: [],
        total: 0,
    },
    user: {
        username: '',
        email: '',
        dateOfBirth: '',
        address: '',
    }
};

// Función combinada para manejar múltiples reducers
const combinedReducers = ({ cart, user }, action) => ({
    cart: cartReducer(cart, action),      // Delegamos al reducer del carrito
    user: userReducer(user, action),      // Delegamos al reducer del usuario
});

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(combinedReducers, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
/*import React, { createContext, useReducer } from 'react';

// Estado inicial que incluye tanto el carrito como los datos del usuario
const initialState = {
    cartItems: [],
    user: {
        username: '',
        email: '',
        dateOfBirth: '',
        address: '',
    },
};

// Reducer para manejar las acciones sobre el estado
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': // Acción para agregar productos al carrito
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload, // Almacena la información del usuario en el estado
            };
        default:
            return state;
    }
};

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};*/
