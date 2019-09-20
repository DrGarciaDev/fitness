/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagen from '../images/exercise.png';

class Card extends React.Component {
    render () {
        // return <h1>Card</h1>
        return (
            <div>
                <div>
                    <img src={imagen} />
                </div>
                <div>
                    <h1>Technique Guides</h1>
                    <p>Learn amazong street</p>
                </div>
            </div>
        );
    }
}

export default Card;