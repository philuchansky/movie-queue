import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal'
import { tmdbImgUrl } from '../../helpers'

const Modal = (props) => {
  const { modal, closeModal } = props
  return (
    <div className="Modal">
      <div className={`modal ${modal.active ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-content">
            <p className="image">
              {modal.type === 'image' && (
                <img src={tmdbImgUrl(modal.content, 'original')} alt={modal.title} />
              )}
              {modal.type === 'trailer' && (
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${modal.content}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              )}
            </p>
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