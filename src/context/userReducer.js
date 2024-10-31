const initialUserState = {
  username: '',
  email: '',
  dateOfBirth: '',
  address: '',
  photo: '', // Agrega la propiedad de la foto
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload,
      };
      
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          photo: action.payload.photo || '', // Asegúrate de que sea una cadena
        },
      };

    default:
      return state;
  }
};

