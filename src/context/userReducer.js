const initialUserState = {
  username: '',
  email: '',
  dateOfBirth: '',
  address: '',
  photo: null, // Agrega la propiedad de la foto
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
          username: action.payload.username, // No anidar aquí, ya que no hay un objeto 'user'
          photo: action.payload.photo || '', // Asegúrate de que sea una cadena
        };

    default:
      return state;
  }
};

