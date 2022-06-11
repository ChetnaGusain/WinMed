
import * as React from "react";
import { OTPInput } from "chakra-otp-input";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
  
  export default function SignUp() {

    const [flag,setFlag] = React.useState(false);
    const [otp,setOtp] = React.useState("")

    const navigate = useNavigate() ;

    const handleOTP =()=>{

        setFlag(true)

    }

    const handleVerify =()=>{

      if(otp === "123456")
      {
        alert("Verification Successful...!!")
        setOtp("")
        navigate('/home')
      }
      else{
          alert("Failed,try again")
      }

    }

  

    // handleChange = (otp) => this.setState({ otp });
    return (
        <>

        <Box m={100} rounded={20} p={20} pl={0} boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" display="flex" gap={100}>

        <Box>

              <img style={{marginTop:"-60px"}} width="548px" height="748px" src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt=""/>


        </Box>

        <Box>

        <Flex 
        mt={-230}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
      >
        <Stack spacing={8} mt={40} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack>
            <Heading  fontSize={'4xl'}>Sign In /Sign Up</Heading>
            <Text fontSize={'lg'} mb={80} color={'gray.600'}>
              Sign up or Sign in to access your orders, special offers, health tips and more!
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            >
            <Box spacing={4}>
              <FormControl id="number">
                <FormLabel mb={-4} ml={0} color='#24AEB1' fontSize={'small'}  >PHONE NUMBER</FormLabel> <br></br>
                <b>+91</b><Input mb={18} mt={-200} autoFocus textDecoration="none" border="none" boxShadow='base' placeholder='Enter your mobile no' width={367} type="number" ></Input>
              </FormControl>
            {!flag ? <Stack spacing={10}>
                        <Button
                        width={400}
                          onClick={handleOTP}
                          bg={'#24AEB1'}
                          color={'white'}
                          _hover={{
                            bg: '#24AEB1.500',
                          }}>
                          USE OTP
                        </Button>
                      </Stack>
              
              :   
              <>

              <Flex  justify="center" align="center" w="full">
                    <FormControl w="60">
                       <Text mt={8} ml={-18}>We have sent 6 digit OTP</Text>
                      <OTPInput ml={-18} noInputs={6} onChange={(value) => setOtp(value)} />
                    </FormControl>
                </Flex>

                <Button width={380} mt={30} bg={'#24AEB1'} color={'white'} onClick={handleVerify}>Verify</Button>
                  
                

                 
          
                 
              </>}
                  <Box mt={100} display='flex'>
                        <Button border='1px solid lightgrey'  ml={10} mr={20} width={155} height="50px" bg={'white'}> <img style={{marginRight:"20px"}} width='20px' height='20px' src="https://toppng.com/uploads/preview/google-g-logo-icon-11609362962anodywxeaz.png" alt='google'/><b>     </b> Google</Button>
                        <Button border='1px solid lightgrey' width={155} height="50px" bg={'white'} >  <img style={{marginRight:"20px"}} width='20px' height='20px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" alt='fb'/>Facebook</Button>
                        </Box>
                  </Box>
          </Box>
        </Stack>
      </Flex>


        </Box>
        </Box>
       
      <Text textAlign='center'>By continuing you agree to our Terms of service <br></br>
and Privacy & Legal Policy.

</Text>

 
      </>
    );
  }