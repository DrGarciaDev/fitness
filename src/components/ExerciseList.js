import React from 'react';
import Card from './Card';

function ExerciseList(props) {
    return(
            <div>
            {/* las llaves indicane que se colocará una expresion */}
            {
                props.exercises.map((exercise) => {
                    return(
                        <Card
                            title = { exercise.title }
                            description = { exercise.description }
                            img = { exercise.img }
                            leftColor = { exercise.leftColor }
                            rigthtColor = { exercise.rightColor }
                        />
                    );
                })
            }
        </div>
    );
}

export default ExerciseList;