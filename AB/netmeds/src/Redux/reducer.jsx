import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SUPLLEMENTS_REQUEST,SUPLLEMENTS_SUCCESS,SUPLLEMENTS_FAILURE, SUPP_REQ, SUPP_SUCCESS, SUPP_FAILURE, NEWONNETMEDS_SUCCESS, COVIDESSENTIALS_SUCCESS, BESTSELLER_SUCCESS, FETCHFILTERDATA, ADD_TO_CART_SUCCESS, CART_SUCCESS } from "./actionTypes"


export const initState = {
    isAuth : false,
    supplementData: [],
    newOnNetmeds : [],
    covidEssentials : [],
    bestSeller: [] ,
    filteredData: [],
    cart: [],
}

export const AuthReducer = (state=initState,action)=>{
    switch(action.type) {
        
        case LOGIN_SUCCESS :{
            return {
                ...state,
                isAuth: true ,
            }
        }
        
        case LOGOUT_SUCCESS :{
            return {
                ...state,
                isAuth: false ,
            }
        }

        case SUPP_SUCCESS:{
            return {
                ...state,
                supplementData:action.payload 
            }
        }

        case NEWONNETMEDS_SUCCESS:{
            return {
                ...state,
                newOnNetmeds:action.payload 
            }
        }

        case COVIDESSENTIALS_SUCCESS:{
            return {
                ...state,
                covidEssentials:action.payload 
            }
        }

        case BESTSELLER_SUCCESS:{
            return {
                ...state,
                bestSeller:action.payload 
            }
        }

        case FETCHFILTERDATA :{
            return {
                ...state,
                filteredData:action.payload 
            }

        }

        case CART_SUCCESS :{
            return {
                ...state,
                cart:action.payload 
            }
        }


        default: {
            return state
    }       
}  
} 