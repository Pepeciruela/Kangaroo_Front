import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdvertImage from '../AdvertImage/AdvertImage';
import { useDispatch, useSelector } from 'react-redux';
import './AdvertCardAccount.scss';
import { deleteAdvert, updateAdvert } from '../../store/actions';
import ModalDelete from '../ModalDelete/ModalDelete';
import ModalAdvertState from '../ModelAdvertState/ModelAdvertState';
import Button from '../Button/Button';
import ModelAdvertState from '../ModelAdvertState/ModelAdvertState';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const { formatDistanceToNow } = require('date-fns');

const AdvertCardAccount = ({ advert, ...props }) => {
  const dispatch = useDispatch();

  const { _id, name, state, price, image, updatedAt } = advert;

  const urlNoImage =
    'https://res.cloudinary.com/kangaroomailer/image/upload/v1647891889/kangaroo/adverts/noimage_deiv4x.jpg';

  //Modal delete
  const [modalDelete, setModalDelete] = useState(false);
  const handlerConfirm = () => {
    setModalDelete(modalDelete ? false : true);
  };

  const handlerDelete = (event) => {
    dispatch(deleteAdvert(_id));
    setModalDelete(false);
  };

  //Modal state
  const [selectAdvertState, setSelectAdvertState] = useState('ForSale');
  useEffect(() => {
    setSelectAdvertState(advert.state);
  }, [advert]);

  const [modalState, setModalState] = useState(false);
  const handlerModalState = () => {
    setModalState(modalState ? false : true);
  };

  const handlerChangeState = (newState) => {
    setSelectAdvertState(newState);
    dispatch(
      updateAdvert(
        {
          name: advert.name,
          nameEn: advert.nameEn,
          description: advert.description,
          descriptionEn: advert.descriptionEn,
          type: advert.type,
          advertState: advert.advertState,
          price: advert.price,
          categories: advert.categories,
          gallery: advert.gallery,
          tags: advert.tags,
          author: advert.author._id,
          image: [advert.image],
          state: newState
        },
        advert._id
      )
    );
    setModalState(false);
  };

  return (
    <>
      <article id="product-card-account">
        <div className="content-card-account">
          <Link to={`/advert/${_id}`}>
            <div className="content-flex">
              <div>
                <img alt={name} src={image ? image : urlNoImage} className="cover-image" />
              </div>
              <div className="body">
                <p>${price}</p>
                <h4 className="title">{name}</h4>
              </div>
              <div>
                <p>Published: </p>
                <time dateTime={updatedAt}> {formatDistanceToNow(new Date(updatedAt))}</time>
              </div>
              <div>
                <p>Modificado: </p>
                <time dateTime={updatedAt}> {formatDistanceToNow(new Date(updatedAt))}</time>
              </div>
            </div>
          </Link>

          <div className="actions">
            <div>
              {selectAdvertState === 'ForSale' && (
                <Button primary onClick={() => handlerModalState()}>
                  {selectAdvertState}
                </Button>
              )}
              {selectAdvertState === 'Inactive' && (
                <Button primary onClick={() => handlerModalState()}>
                  {selectAdvertState}
                </Button>
              )}
              {selectAdvertState === 'Finished' && <Button disabled>{selectAdvertState}</Button>}
            </div>

            <Link className="content-flex" to={`/account/products/edit/${_id}`}>
              <Button secondary>
                <EditIcon />
              </Button>
            </Link>

            <Button red onClick={handlerConfirm}>
              <DeleteForeverIcon />
            </Button>
          </div>
        </div>
      </article>

      {modalDelete && (
        <ModalDelete
          title={'Are you want to delete this ad?'}
          onConfirm={handlerDelete}
          onClose={handlerConfirm}
        />
      )}

      {modalState && (
        <ModelAdvertState
          title={'Change advert you want to delete this ad?'}
          onChangeState={handlerChangeState}
          onClose={handlerModalState}
          advertState={advert.state}
        />
      )}
    </>
  );
};
export default AdvertCardAccount;
