import {GET_ALBUMS,GET_USERS,SET_LOADING,GET_ALBUMPHOTOS} from '../actions/types'

const initialState = {
    albums :null,
    users  :null,
    albumPhotos: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALBUMS:
        return {
          ...state,
          albums: [...action.payload],
          loading : false
          
        };
        case GET_USERS:
            return {
              ...state,
              users: [...action.payload],
              loading : false
              
            };

        case GET_ALBUMPHOTOS:
            return {
              ...state,
              albumPhotos: [...action.payload],
              loading : false
              
            };
        case SET_LOADING:
            return {
        ...state,
        loading: true
      };
     
      default:
        return state;
    }
  };