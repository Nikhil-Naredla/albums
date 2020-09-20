import {GET_ALBUMS,GET_USERS,SET_LOADING,GET_ALBUMPHOTOS} from './types'
import axios from 'axios'

export const getAlbums = () => async dispatch => {
    
      setLoading();
      const res = await axios.get('https://jsonplaceholder.typicode.com/albums/');
      const data = await res.data;  
      dispatch({
        type: GET_ALBUMS,
        payload: data
      })
    
  };

  export const getUsers = () => async dispatch => {
    
    setLoading();
    const res = await axios.get('http://jsonplaceholder.typicode.com/users');
    const data = await res.data

    dispatch({
      type: GET_USERS,
      payload: data
    })
  
};

export const getAlbumPhotos = (id) => async dispatch => {
    
    setLoading();
    const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    const data = await res.data;

    dispatch({
      type: GET_ALBUMPHOTOS,
      payload: data
    })
  
};



export const setLoading = () => {
    return {
      type: SET_LOADING
    }
}



