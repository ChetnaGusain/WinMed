import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'


export const Nav = styled.div`
height: 100px ;
width: 100% ;
background: #24AEB1 ;
display: flex ;
gap: 40px ;
padding:20px ;
padding-top:22px;

top:0;

`

export const SearchDiv = styled.div`
height:52px;
width:695px;
display: flex;
background: white ;
padding-left:20px;
padding-Top:3px;
border-radius: 7px

`
const Navbar = () => {
  return (
    <>
      <Nav >
          <Link to='/'><img width="198px" style={{marginTop:"8px"}} height='150px' src='https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg'  alt='NetMeds'/></Link>
            <SearchDiv>
              <span style={{paddingTop:"10px",color:"grey"}}>Deliver to <span style={{color:"#24AEB1"}}>411100</span>  |</span>
              <Input variant='styled' width='330px' placeholder='Search for medicine & wellness products…' />
            </SearchDiv>
        
          <Link to='/upload'> 
          <Box color={'white'} pt={3}>
              <img src='' alt=''/>
              <b>Upload</b>
          </Box>
          </Link>

          <Link to='/cart'> 
          <Box color={'white'} pt={3}>
              <img src='' alt=''/>
              <b>Cart</b>
          </Box>
            
          </Link>

          <Link to='/signUp'> 
          <Box color={'white'} pt={3}>
              <img src='' alt=''/>
              <b>Sign in/Sign up</b>
          </Box>
          </Link>

      </Nav>
    </>
  )
}

export default Navbar