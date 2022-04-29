import { useState, useMemo } from 'react';
import Restaurant from './restaurant';
import Tabs from './tabs';

export default function Restaurants({ restaurants }) {
    const [activeId, setActiveId] = useState(restaurants[0].id);

    const tabs = useMemo(
        () => restaurants.map(({ id, name }) => ({ id, label: name })),
        [restaurants]
    );

    const activeRestaurant = useMemo(
        () => restaurants.find((restaurant) => restaurant.id === activeId),
        [activeId, restaurants]
    );

    const rate = useMemo(() => {
        const total = activeRestaurant.reviews.reduce((acc, { rating }) => acc + rating, 0);
        return Math.round(total / activeRestaurant.reviews.length);
    }, [activeRestaurant.reviews]);

    return (
        <div>
            <Tabs tabs={tabs} onChange={setActiveId} />
            <Restaurant menu={activeRestaurant.menu} reviews={activeRestaurant.reviews} rate={rate} />
        </div>
    );
}
