import { Button, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { keyframes } from "@emotion/react";
import { Input } from '@chakra-ui/react';

const Header = () => {
  const popout = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
  return (
  <HStack p = {"4"} shadow={"base"} backgroundColor={"blackAlpha.800"} >

    <Button variant={"unstyled"} color = {"white"}  _hover={{ animation: `${popout} 0.3s ease-out forwards` }}>

        <Link to ="/">Home</Link>
    </Button>

    <Button variant={"unstyled"} color = {"white"} _hover={{ animation: `${popout} 0.3s ease-out forwards` }}>

<Link to ="/exchanges">Exchanges</Link>
</Button>

<Button variant={"unstyled"} color = {"white"} _hover={{ animation: `${popout} 0.3s ease-out forwards` }}>

<Link to ="/coins">Coins</Link>
</Button>


  </HStack>
  
  
  )
};

export default Header
