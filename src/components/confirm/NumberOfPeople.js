import React from 'react';

class NumberOfPeople extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
render(){
    return(
        <div>
            <p>人数{this.props.numberOfPeople}人</p>
        </div>
    );
}
}

export default NumberOfPeople;