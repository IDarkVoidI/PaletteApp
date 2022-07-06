import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PaletteCard from '../../Components/Cards/PaletteCard'
import { HStack } from '@chakra-ui/react';

function Palette() {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false)

    const fetchPalettes = async () => {
        setLoading(true)
        const response = await fetch("http://localhost:8000/api/palette");
        const result = await response.json();
        setData(result);
        setLoading(false)
    };

    useEffect(() => {
        fetchPalettes()
    }, []);

    return (
        <div className="App">
            <div>
                <HStack justifyContent={"space-evenly"} mt={16}>
                    {data.map((palette) => (
                        <Link to={String(palette.id)} key={palette.id}>
                            <PaletteCard loading={loading} title={palette.title} color1={palette.color1} color2={palette.color1} color3={palette.color1} color4={palette.color1} />
                        </Link>

                    ))}
                    <h1 color={'black'}>Palette</h1>
                </HStack>
            </div>
        </div >
    )
}

export default Palette