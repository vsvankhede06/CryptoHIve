import { Box, Image, Text} from '@chakra-ui/react'
import React from 'react'
import cryptosrc from "../assets/crypto.png"
import {motion} from "framer-motion"

const Home = () => {
  return (
   <Box bgColor={"blackAlpha.900"} w={"full"} h ={"85vh"}>

    <motion.div style={{
      height: "80vh",
    }}
    animate={{
      translateY:"20px"
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    
    
    >
    <Image 
    w={"full"} 
    h={"full"} 
    objectFit={"contain"} 
    src={cryptosrc}
    />
    </motion.div>


      <Text 
      fontSize={"6xl"} 
      textAlign={"center"} 
      fontWeight={"thin"} 
      color={"blue.700"} 
      mt={"-20"}>
      CryptoHive</Text>
   </Box>
  )
}

export default Home
