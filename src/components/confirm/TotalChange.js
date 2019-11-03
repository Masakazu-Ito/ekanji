import React from 'react';

class TotalChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
render(){
    return(
        <div>
            <p>あまり:{this.props.total_change}¥</p>
        </div>
    );
}
}

export default TotalChange;