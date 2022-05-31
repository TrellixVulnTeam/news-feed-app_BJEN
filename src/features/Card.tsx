import React from 'react';
import './Cards.scss';

export const Card = () => {
    return (
        <div className='cardWrapper'>
            <div className='imageWrap'>
                <div className='image'>
                    1
                </div>
            </div>
            <div className='textField'>
                <span className='textHeader'>
                    По стандарту РБК заголовок материала должен содержать не более 73 знаков
                </span>
                По стандарту РБК заголовок материала должен содержать не более 73 знаков
            </div>
            <div className='topic'>
                Топик
            </div>
        </div>
    );
};
