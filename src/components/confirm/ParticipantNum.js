import React from 'react';

class ParticipantNum extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
    }
render(){
    return(
        <div>
            <p>人数{this.props.participant_num}人</p>
        </div>
    );
}
}

export default ParticipantNum;