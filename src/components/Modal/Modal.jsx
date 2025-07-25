import { Component, useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ handleCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscapeClose);
  }, []);

  useEffect(()=>{
    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  })

  const onEscapeClose = e => {
    if (e.key === 'Escape') { 
      handleCloseModal();
    }
  };

  const onClose = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div onClick={onClose} className={css.backdrop}>
      <div className={css.module}>{children}</div>
    </div>
  );
};
