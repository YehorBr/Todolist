import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {

    componentDidMount(){
          window.addEventListener('keydown', this.onEscapeClose)
    }

    componentWillUnmount(){
      window.removeEventListener('keydown', this.onEscapeClose)
    }

    onEscapeClose = (e)=>{
      if(e.key === 'Escape'){
          this.props.handleCloseModal()
      }
  }

  onClose = (e) =>{
    if(e.target === e.currentTarget){
      this.props.handleCloseModal()
    }
  }

  render() {
    return (
      <div onClick={this.onClose}  className={css.backdrop}>
        <div className={css.module}>{this.props.children}</div>
      </div>
    );
  }
}
