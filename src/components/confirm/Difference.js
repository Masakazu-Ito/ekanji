import React from 'react';

class Difference extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
render(){
    return(
        <div>
            <p>差額(一人分){this.props.difference}¥</p>
        </div>
    );
}
}

export default Difference;