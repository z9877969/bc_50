import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

// = ({ modalData, closeModal }) =>
class Modal extends Component {
  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleCloseByEscape = (e) => {
    if (e.code === "Escape") {
      console.log("Escape");
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByEscape);
  }

  render() {
    const { urlToNews, title } = this.props.modalData;
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <h1 className={s.title}>
          <a href={urlToNews} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
