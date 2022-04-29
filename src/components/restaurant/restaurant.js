import React from 'react';

import Menu from '../menu';
import Reviews from '../reviews';
import Rate from '../rate';


const Restaurant = ({menu, reviews, rate}) => (
    <>
        <Rate value={rate} />
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
    </>
);

export default Restaurant;
