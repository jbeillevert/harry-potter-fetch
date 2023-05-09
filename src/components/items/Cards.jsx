import React from 'react';
import HarryPotterCard from './HarryPotterCard';

const Cards = ({ data }) => {
    return (
        <div className='cards' >
            {
                data.map((e) => {
                    return (
                        <HarryPotterCard key={e.id} name={e.name} img={e.image} />
                    )
                })
            }
            
        </div>
    );
};

export default Cards;