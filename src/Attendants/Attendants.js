import React from 'react';

const Attendants = (props) => {
    return (
        <div style={{
            position: 'absolute',
            marginLeft: '40%', 
            }}>
            I can attend to the tasks
            <div style={{textAlign: 'left'}}>
                {props.children}
            </div>
        </div>
    );
};

export default Attendants;