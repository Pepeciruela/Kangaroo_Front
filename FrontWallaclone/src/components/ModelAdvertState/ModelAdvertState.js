import React from 'react';
import Button from '../Button/Button';
import './ModelAdvertState.scss';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function ModelAdvertState({ title, onChangeState, onClose, advertState }) {
  const changeState = (state) => {
    onChangeState(state);
  };

  return (
    <div id="model-advert-state">
      <div className="content">
        <div className="header">
          {/* <AiOutlineInfoCircle className="icon" /> */}
          <h3>{title}</h3>
        </div>
        <div className="buttons">
          {advertState === 'ForSale' ? (
            <Button disabled onClick={() => onChangeState('ForSale')}>
              <CheckCircleIcon />
              ForSale
            </Button>
          ) : (
            <Button primary onClick={() => onChangeState('ForSale')}>
              <CheckCircleIcon />
              ForSale
            </Button>
          )}

          {advertState === 'Inactive' ? (
            <Button disabled onClick={() => onChangeState('Inactive')}>
              <DoDisturbAltIcon />
              Inactive
            </Button>
          ) : (
            <Button primary onClick={() => onChangeState('Inactive')}>
              <DoDisturbAltIcon />
              Inactive
            </Button>
          )}

          {advertState === 'Finished' ? (
            <Button disabled onClick={() => onChangeState('Finished')}>
              <ShoppingBagIcon />
              Finished
            </Button>
          ) : (
            <Button primary onClick={() => onChangeState('Finished')}>
              <ShoppingBagIcon />
              Finished
            </Button>
          )}

          <Button primaryOutline onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModelAdvertState;
