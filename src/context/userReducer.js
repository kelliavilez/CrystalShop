const initialUserState = {
  username: '',
  email: '',
  dateOfBirth: '',
  address: '',
  photo: null, 
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
          username: action.payload.username, 
          email: action.payload.email || state.email,
          photo: action.payload.photo || '', 
        };

    default:
      return state;
  }
};

