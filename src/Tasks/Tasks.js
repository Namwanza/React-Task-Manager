import React from 'react';
import Button from '@material-ui/core/Button'

const Tasks = (props) => {
    return (
        <div>
            I can see the Tasks
        <div>
            <strong>{props.children}</strong>
            <label>Answer: </label><input type="text" />
            <Button variant="outlined" color="secondary">Submit</Button>
        </div>
        </div>
    );
};

export default Tasks;