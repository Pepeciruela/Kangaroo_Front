import React from 'react';
import './ModalDelete.scss';
import Button from '../Button/Button';

function ModalDelete({ title, onConfirm, onClose }) {
  return (
    <div id="confirm-dialog">
      <div className="content">
        <div className="header">
          {/* <AiOutlineInfoCircle className="icon" /> */}
          <h3>{title}</h3>
        </div>
        <div className="buttons">
          <Button primaryOutline onClick={onConfirm}>
            Accept
          </Button>
          <Button secondary onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
