import React from 'react'
import { connect } from 'react-redux'

const Modal = (props) => {
  const { modal: { active } } = props
  return (
    <div className="Modal">
      <div className={`modal ${active ? 'is-active' : ''}`}>
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

const mapStateToProps = ({ modal }) => ({ modal })
export default connect(mapStateToProps)(Modal)