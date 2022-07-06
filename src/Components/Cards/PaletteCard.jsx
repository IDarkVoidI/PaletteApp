import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const PaletteCard = (props) => {
    return (
        <div>
            <Box display={'flex'}>
                <Heading as='h2' ml={10}>{props.title}</Heading>
            </Box>
        </div>
    )
}

export default PaletteCard