import React from 'react'

const Modal = (props) => {
  return (
    <div className="Modal">
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <p className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
          </p>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  )
}

export default Modal