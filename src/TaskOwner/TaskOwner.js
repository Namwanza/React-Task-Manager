import React from 'react';

const styles = {
    borderColor: 'black',
    borderRadius: '5px'
}

const TaskOwner = (props) => {
    return (
        <div>
           <h4>I'm the task owner</h4>
            <label>Name: </label>
            <input 
                type="text" 
                value = {props.name}  
                style = {styles} 
                onChange = {props.changed}
            />
            <label>Task: </label>
            <input 
                type="text" 
                value = {props.task} 
                style={styles} 
                onChange = {props.change}
            />
        </div>
    );
}

export default TaskOwner;