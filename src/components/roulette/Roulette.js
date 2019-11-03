import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class Roulette extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            animation_run: false
        }
    }

    imgStop = () => {
        this.setState({
            animation_run: false,
            result: true,
            modalIsOpen: true
        });
    }

    imgClick = (e) => {
        if (this.state.animation_run) { return }
        /* TODO: <img>にstyle id: spin-ban を付与　*/
        this.setState({
            animation_run: true,
            result: false,
        });
        setTimeout(this.imgStop, 3000)
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    afterOpenModal = () => {
        this.subtitle.style.color = '#f00';
    }
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    render(){
        return(
            <div style={{ textAlign: 'center' }}>
                <h1>roulette</h1>
                {/* <img style={{}} src='' alt='hari' /> */}
                <img id={this.state.animation_run ? "do" : ""} onClick={this.imgClick} style={{width: '80%'}} src='image/ban2.png' alt="img"/>
                {/* <img id="do" onClick={this.imgClick} style={{width: '80%'}} src='image/ban2.png' alt="img"/> */}
                <div className={this.state.result ? "" : "result"}>
                    <Link to='./'
                    >ホームへ</Link>
                </div>
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <h2 ref={subtitle => this.subtitle = subtitle}>ModalWindow</h2>
                <div>Opend</div>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </div>
        );
    }
}

export default Roulette;