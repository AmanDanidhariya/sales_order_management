import { Box, Button, Container } from '@chakra-ui/react'
import React from 'react'
import Buttons from '../../components/Buttons'

const Home = () => {
  return (
    <Container>
        {/* buttons start */}
        <Box>
            <Box>
                    active/completed
            </Box>
            <Box>
                <Buttons color="yellow" text="+ sale order"/>
            </Box>
            
        </Box>
        {/* buttons end */}
    </Container>
  )
}

export default Home