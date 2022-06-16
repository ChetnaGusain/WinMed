 

 import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
 import {useState} from "react";
import { useDispatch } from "react-redux";
import ProductPage from "../Pages/ProductPage";
import { postToCart } from "../Redux/actions";
 
 
 // keep the add to cart component here
 const AddCart =(id) => {

  console.log(id)
    const [flag,setFlag] = useState(false)
    const [data,setData] =useState(null)
    const dispatch = useDispatch()
 
   const [count,setCount] = React.useState(1)
     //manage state of the count 
 
     const handleIncrement = (value)=>
     {
         setCount(count+value)
     }
 
     const handleDecrement = (value)=>
     {     
          count>1
           ? setCount(count-value)
           : setFlag(false)
     }

     const handleButton =(id)=>{

      console.log(id,"ab")
      setFlag(true)   
      axios({
        url: `http://localhost:3000/data/1`,
        method: 'GET',
    })
    .then(res=>{
        setData(res.data)
        console.log(data)
        dispatch(postToCart(data))
    })
    .catch(e=>{
        console.log(e)
    })



    }
   return <>

   <Box>
            {flag ? <Box >
                        <Button  width={10} height={10} mt={2} mr={5} rounded={'50%'} onClick={()=>handleDecrement(1)}> - </Button>
                            <b style={{marginTop:'20px'}}>{count}</b>
                        <Button width={10} height={10} mt={2} ml={5} rounded={'50%'} onClick={()=>handleIncrement(1)}> + </Button>
                    </Box>
                  : <Button color={'white'} bg={'#24AEB1'} onClick={()=>handleButton(id)} mt={2} width={180}>ADD TO CART</Button> }
            </Box>
   </>
 }
 export default AddCart