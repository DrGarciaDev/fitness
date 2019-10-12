import React from 'react';

class ExercisesNew extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('CLICKED');
        console.log(this);
    }

    render() {
        return (
            <button onClick={ this.handleClick }>
                SEND
            </button>
        );
    }
}

export default ExercisesNew;