 import  {ALL_DATA}from '../action/actionTypes'

  export const datared=(state=[],action)=>{

     if(action.type==ALL_DATA)
     {
        return{

            state,
            ...action.payload
        }

     }


 }

