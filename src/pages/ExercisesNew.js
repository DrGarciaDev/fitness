import React from 'react';
import ExercisesFrom from '../components/ExerciseForm';
import Card from '../components/Card';

class ExercisesNew extends React.Component {
    state = {
        form: {
            title: '', 
            description: '', 
            img: '', 
            leftColor: '', 
            rightColor: ''
        }
    }

    // On Change controller
    handleChange = (e) => {
        // console.log(`${e.target.name} : ${e.target.value}`);
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div className = "row">
                <div className = "col-sm">
                    <Card 
                        { ...this.state.form }
                    />
                </div>
                <div className = "col-sm">
                    <ExercisesFrom 
                        onChange = { this.handleChange }
                        form = { this.state.form }
                    />
                </div>
            </div>
        );
    }
}

export default ExercisesNew;