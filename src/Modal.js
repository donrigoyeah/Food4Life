import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, recipe }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h3
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px",
                }}
              >
                {recipe.name}{" "}
              </h3>
              <div className="SingleRezeptItem">
                <p>Zutaten:</p>
                <p>{recipe.ingredients}</p>
              </div>
              <div className="SingleRezeptItem">
                <p>Zubereitung</p>
                <p>{recipe.description}</p>
              </div>
              <div className="SingleRezeptItem">
                <p>Bewertung:</p>
                <p>{recipe.rating}/5</p>
              </div>
              <div className="SingleRezeptItem">
                <p>Severity:</p>
                <p>{recipe.severity}/5</p>
              </div>
              <div className="SingleRezeptItem">
                <p>Time:</p>
                <p>{recipe.time}</p>
              </div>
              <div className="FormForEdit">
                <form>
                  <input type="text" />
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
