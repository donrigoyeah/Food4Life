import React from 'react';
import ReactDOM from 'react-dom';
import Data from './json/recipes_2.json'

const Modal = ({ isShowing, hide, value }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
      <h3>{Data[value].name}</h3> <br></br>
        <div className="modal-header">        
          <button type="button_recipe" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            close
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
          <ul>
          <li>Grundlage: {Data[value].base} </li>
          <li>Zutaten: {Data[value].ingredients} </li>
          <li>{Data[value].description}</li>
          </ul>
          <img src={Data[value].picture} style={{width:"100", height:"100"}}></img>
        
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;