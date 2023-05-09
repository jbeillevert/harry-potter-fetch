import React, { useEffect, useState } from 'react';
import Cards from '../items/Cards';
import Filter from '../items/Filter';

const HomePage = () => {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")


    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
            .then((response) => response.json())
            .then((character) => setData(character))
            .catch((err) => console.error(err))
    },[])

    function handleChangeValue(e) {
        setSearchValue(e.target.value)
    }

    return (
        <div className='home-page'>
            <div className='container-home-page'>
                <Filter onInputChange={handleChangeValue} />
                <Cards data={data.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()))}  />
            </div>
        </div>
    );
};

export default HomePage;