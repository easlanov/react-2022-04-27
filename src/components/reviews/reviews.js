import React from 'react';

import Rate from '../rate';

const Reviews = ({reviews}) => {
    return (
        <>
            {reviews.map(({id, user, text, rating}) => (
                <div key={id}>
                    <p>{user}</p>
                    <p>{text}</p>
                    <p>
                        <Rate value={rating} />
                    </p>
                </div>
            ))}
        </>
    );
};

export default Reviews;
