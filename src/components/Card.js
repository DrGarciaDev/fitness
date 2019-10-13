/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import imagen from '../images/exercise.png';
import circleImg from '../images/circles.png';
// importacion de estilos
import './styles/Card.css';

class Card extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         image: ''
    //     }
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState ({
    //             image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
    //         })
    //     }, 5000);
    // }

    render () {
        // return <h1>Card</h1>
        // Haciendo destructuring para evitar escribir en todas las props utilizadas el this.props
        const { title, description, img, leftColor, rightColor } = this.props;

        return (
            <div className="card mx-auto Fitness-Card" 
                /* estilos en linea  */
                style={{
                    backgroundImage: `url(${ circleImg }), linear-gradient(to right, ${ leftColor }, ${ rightColor })`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            {/* <img src={ img } className="float-right" /> */}
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