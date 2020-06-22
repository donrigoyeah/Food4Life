import React from "react";
import ReactDOM from "react-dom";
import FormRecipe from "./Form.js";

// +++++
// Delete Recipe
// ++++++
const Loeschung = (value) => () => {
  localStorage.removeItem(`${value}`);
};

// +++++++
// Form OnChange event handler
// ++++++

// ++++
// Create Modal for Edit site
//+++++

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
                <h2>Rezept Bearbeiten</h2>
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
                <h4>Zutaten:</h4>
                {recipe.ingredients.map((ingredients) => (
                  <ul>
                    <li>
                      <input type="text" value={ingredients} />
                    </li>
                  </ul>
                ))}
                <ul>
                  <li>
                    <input type="text" placeholder="Zutat hinzufügen" />
                  </li>
                </ul>
              </div>
              <div className="SingleRezeptItem">
                <h4>Zubereitung:</h4>
                {recipe.description.map((description) => (
                  <ul>
                    <li>
                      <input type="text" value={description} />
                    </li>
                  </ul>
                ))}
                <ul>
                  <li>
                    <input
                      type="text"
                      placeholder="Arbeitsschritt hinzufügen"
                    />
                  </li>
                </ul>
              </div>
              <div className="SingleRezeptItem">
                <h4>Bewertung:</h4>
                <input type="text" value={recipe.rating} />
              </div>
              <div className="SingleRezeptItem">
                <h4>Severity:</h4>
                <input type="text" value={recipe.severity} />
              </div>
              <div className="SingleRezeptItem">
                <h4>Zeit:</h4>
                <input type="text" value={recipe.time} />
              </div>

              <FormRecipe recipe={recipe}></FormRecipe>

              <div style={{ padding: "50px" }}>
                <button className="button-default">Speichern</button>

                <button
                  className="button-default"
                  onClick={Loeschung(`${recipe.name}`)}
                >
                  Löschen
                </button>

                <button
                  className="button-default"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  Zurück
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
