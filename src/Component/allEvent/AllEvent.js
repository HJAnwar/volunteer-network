import React from 'react';

const AllEvent = (props) => {
    console.log(props);
    const { name } = props.singleJob
    return (
        <div>
           <>
            <td>{name}</td>
            
           </>
        </div>
    );
};

export default AllEvent;