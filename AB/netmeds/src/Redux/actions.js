import axios from "axios"
import { ADD_TO_CART_SUCCESS, BESTSELLER_SUCCESS, COVIDESSENTIALS_SUCCESS, FETCHFILTERDATA, LOGIN_SUCCESS, LOGOUT_SUCCESS,NEWONNETMEDS_SUCCESS,SUPP_SUCCESS, } from "./actionTypes"


export const login =()=>({
    type: LOGIN_SUCCESS,
})

export const logout =()=>({
    type: LOGOUT_SUCCESS,
    payload:null 
 
})


export const suppSuccess =(data)=>({
    type: SUPP_SUCCESS,
    payload:data 
})

export const newOnNetmeds =(data)=>({
    type: NEWONNETMEDS_SUCCESS,
    payload:data 
})

export const covidEssentialSuccess =(data)=>({
    type: COVIDESSENTIALS_SUCCESS,
    payload:data 
})

export const bestSellerSuccess =(data)=>({
    type: BESTSELLER_SUCCESS,
    payload:data 
})

export const fetchFilterData=(data)=>({
    type: FETCHFILTERDATA,
    payload:data
})

export const addToCart=(data)=>({
    type: ADD_TO_CART_SUCCESS,
    payload:data
})




// FETCH FUNCTIONS

export const fetchSupplement = (payload) => async(dispatch)=>{
    
    axios({
        url: 'http://localhost:3000/data',
        method : "GET",
        params :{
            q: "vitaminsAndSuppliments",
            _limit:10
        }
    })
    .then((res)=>{
        console.log(res.data) ;
        let success = suppSuccess(res.data) ;
        dispatch(success)
        // alert("Success...!!")
    })
    .catch((e)=>{
        console.log(e)
    })
}

export const fetchNewOnNetmeds = (payload) => async(dispatch)=>{
    
    axios({
        url: 'http://localhost:3000/topProducts',
        method : "GET",
        params :{
            q: "newnetmeds",
            _limit:10
        }
    })
    .then((res)=>{
        console.log(res.data) ;
        let success = newOnNetmeds(res.data) ;
        dispatch(success)
    })
    .catch((e)=>{
        console.log(e)   
    })
}

export const fetchCovidEssentials = (payload) => async(dispatch)=>{
    axios({
        url: 'http://localhost:3000/data',
        method : "GET",
        params :{
            q: "covidEssentials",
            _limit:10
        }
    })
    .then((res)=>{
        console.log(res.data) ;
        let success = covidEssentialSuccess(res.data) ;
        dispatch(success)
    })
    .catch((e)=>{
        console.log(e)   
    })
}

export const fetchBestSeller = (payload) => async(dispatch)=>{
    axios({
        url: 'http://localhost:3000/topProducts',
        method : "GET",
        params :{
            q: "bestSeller",
            _limit:10
        }
    })
    .then((res)=>{
        console.log(res.data) ;
        let success = bestSellerSuccess(res.data) ;
        alert("success")
        dispatch(success)
    })
    .catch((e)=>{
        console.log(e)   
    })
}

export const fetchData =(payload,page,q,costOrder)=>{

    return (dispatch)=>{
    
     axios("http://localhost:3000/data",{
        params: {
             ...payload,
            // _page: page,
            // _limit: 20,
             q: q,
            _sort: "salePrice",
            _order:`${costOrder}`,
        },
       
    }
)
    .then((r)=>{
        dispatch(fetchFilterData(r.data))
        console.log(r.data)
    })
    .catch((e)=> console.log(e))
  };
};


export const postToCart =(dispatch,data)=>{
        console.log(data)
    axios.post('http://localhost:3000/cart',data)
    .then((res)=>{
        alert('post success')
       
    })
    .catch((e)=>{
        alert('post failed')
        console.log(e)
    })

}




