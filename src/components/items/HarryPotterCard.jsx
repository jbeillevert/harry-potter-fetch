import React from 'react';

const HarryPotterCard = ({ name, img }) => {
    return (
        <div className='harry-potter-card'>
            {
                
                img ? <img src={img} className='img-harry-potter-card' alt="" /> : <img src="https://static.posters.cz/image/750webp/104622.webp" className='img-harry-potter-card' alt="" />
                
            }
            <h3 className='h3-harry-potter-card'>{name}</h3>
        </div>
    );
};

export default HarryPotterCard;