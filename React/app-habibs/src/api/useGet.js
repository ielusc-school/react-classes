import {useReducer, useEffect} from 'react';
import axios from 'axios';

const useGet = url => {
  // criando nosso data e setando o valores para o nosso useState
   const [data, dispatch] = useReducer(reducer, {
     loading: true, 
     data: {}
   });
 
    // consumindo nossa API
    useEffect(() => { // https://pt-br.reactjs.org/docs/hooks-effect.html
     dispatch({type: 'REQUEST'});
     axios.get(url)
     .then(response => {
       dispatch({ type: 'SUCCESS', data: response.data });
       // console.log(response.data);
     }).catch((err) => {
       console.error(err);
     });
   },[]);
   return data;
 }
 
   // função puro
 const reducer = (state, action) => {
   console.log('state', state, 'action', action);
   if(action.type === 'REQUEST') {
     return {
       ...state,
       loading:true
     }
   }
   if(action.type === 'SUCCESS') {
     return {
       ...state,
       loading: false,
       data: action.data
     }
   }
   return state;
 }
 
 export default useGet;