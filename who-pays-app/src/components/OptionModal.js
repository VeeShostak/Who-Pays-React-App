import React from 'react';
import Modal from 'react-modal';

// implicit return
const OptionModal = (props) => (
    <Modal
        isOpen={props.selectedOption ? true : false}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={2000}
        className="modal" //modal will use these styles instead
      >
      <h3 className="modal__title">Selected Person</h3>
      {props.selectedOption && <p className= "modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleClearSelectedOption}>Alright!</button>
    </Modal>
  )


export default OptionModal;
