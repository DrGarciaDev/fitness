import React from 'react';
// importacion de estilos
import './styles/Welcome.css';

function Welcome (props) {
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>
                    Hello { props.username }
                </h1>
                <p>
                    Lets go..
                </p>
            </div>
        </div>
    );
}

export default Welcome;