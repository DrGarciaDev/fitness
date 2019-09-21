/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import imagen from '../images/exercise.png';
import circleImg from '../images/circles.png';

import './styles/Card.css';

class Card extends React.Component {
    render () {
        // return <h1>Card</h1>
        // Haciendo destructuring para evitar escribir en todas las props utilizadas el this.props
        const { title, description, img, leftColor, rigthtColor } = this.props;

        return (
            <div className="card mx-auto Fitness-Card" 
                /* estilos en linea  */
                style={{
                    backgroundImage: `url(${ circleImg }), linear-gradient(to right, ${ leftColor }, ${ rigthtColor })`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={ img } className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{ title }</h1>
                            <p>{ description }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;