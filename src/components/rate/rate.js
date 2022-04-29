import React from 'react';
import classnames from 'classnames';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';


const Rate = ({ value }) => {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <Star key={index} className={classnames(styles.star, {
                    [styles.checked]: index < value
                })} />
            ))}
        </>
    );
};

export default Rate;
