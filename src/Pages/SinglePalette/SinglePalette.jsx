import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/api'
import { Box, Heading } from '@chakra-ui/react';

function SinglePalette() {
    const [palette, setPalette] = useState({})

    const params = useParams();

    const fetchPaletteId = async () => {
        const response = await fetch(`${BASE_URL}/api/palette/${params.id}`)
        const result = await response.json()
        setPalette(result)
    }

    useEffect(() => {
        fetchPaletteId()
    })


    return (
        <div>
            <Box as='main' mt={50} padding={'10px 10%'}>
                <Box display={'flex'}>
                    <Heading as='h2' ml={10}>{palette.title}</Heading>
                </Box>
            </Box>
        </div>
    )
}

export default SinglePalette