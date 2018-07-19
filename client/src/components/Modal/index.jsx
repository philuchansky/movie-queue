import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal'
import { tmdbImgUrl } from '../../helpers'

const Modal = (props) => {
  const { modal, closeModal } = props
  return (
    <div className="Modal">
      <div className={`modal ${modal.active ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          {modal.type === 'image' && (
            <p className="image">
              <img src={tmdbImgUrl(modal.content, 'original')} alt="" />
            </p>
          )}
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ modal }) => ({ modal })
export default connect(mapStateToProps, { closeModal })(Modal)