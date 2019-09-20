/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imagen from '../images/exercise.png';
import './styles/Card.css';

class Card extends React.Component {
    render () {
        // return <h1>Card</h1>
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={imagen} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazong street</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;