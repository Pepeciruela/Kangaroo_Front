import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutAccount from '../../../../components/LayoutAccount/LayoutAccount';
import AdvertImage from '../../../../components/AdvertImage/AdvertImage';
import './AdvertEdit.scss';
import {
  getCategories,
  getTags,
  getUi,
  getAdvertDetail,
  getUserAuth,
  getUserData
} from '../../../../store/selectors/selectors';
import { updateAdvert } from '../../../../store/actions';
import { loadAdvertDetail } from '../../../../store/actions';
import NotResultsFound from '../../../../components/NotResultsFound/NotResultsFound';
import Button from '../../../../components/Button/Button';
import InputFileUpload from '../../../../components/InputFileUpload/InputFileUpload';
import { useHistory, useParams } from 'react-router-dom';
import imageNoPhoto from '../../../../resources/images/no-image.png';
import { loadCategories } from '../../../../store/actions';
import { TagsInput } from 'react-tag-input-component';
import DropFileUpload from '../../../../components/DropFileUpload/DropFileUpload';

const urlNoImage =
  'https://res.cloudinary.com/kangaroomailer/image/upload/v1647891889/kangaroo/adverts/noimage_deiv4x.jpg';

function AdvertEdit({ ...props }) {
  const navigate = useHistory();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);
  const userData = useSelector(getUserData);
  const userIsAuth = useSelector(getUserAuth);

  const advert = useSelector((state) => getAdvertDetail(state, id));

  useEffect(() => {
    if (advert) {
      dispatch(loadAdvertDetail(id));
    }
  }, [dispatch, advert, id]);

  const [advertConfigData, setAdvertConfigData] = useState({
    name: '',
    nameEn: '',
    description: '',
    descriptionEn: '',
    price: 0
  });

  const handleChange = ({ target: { value, name } }) => {
    setAdvertConfigData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const [advertState, setAdvertState] = useState('');
  const handlerState = (event) => {
    setAdvertState(event.target.value);
  };

  const [type, setType] = useState('');
  const handlerType = (event) => {
    setType(event.target.value);
  };

  const categories = useSelector(getCategories);
  const [selectCategories, setSelectCategories] = useState([]);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleCheckCategories = (event) => {
    var listCategories = [...selectCategories];
    if (event.target.checked) {
      listCategories = [...selectCategories, event.target.value];
    } else {
      listCategories.splice(selectCategories.indexOf(event.target.value), 1);
    }
    setSelectCategories(listCategories);
  };

  const [selectTags, setSelectTags] = useState(advert?.tags);
  useEffect(() => {
    setSelectTags(advert?.tags);
  }, [advert]);

  const [image, setImage] = useState('');
  const updateFeaturedImage = (listUrls) => {
    setImage(listUrls);
  };

  const [gallery, setGallery] = useState(0);

  useEffect(() => {
    if (advert) {
      setAdvertConfigData({
        name: advert.name,
        nameEn: advert.nameEn,
        description: advert.description,
        descriptionEn: advert.descriptionEn,
        price: advert.price
      });

      setType(advert.type);
      setAdvertState(advert.state);
      setSelectCategories(advert.categories);
      setSelectTags(advert.tags);
      setImage(advert.image);
    }
  }, [advert]);

  //Send form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectCategories.length) {
      alert('Select one categorie'); //TODO: Create error
    } else {
      dispatch(
        updateAdvert(
          {
            name: advertConfigData.name,
            nameEn: advertConfigData.nameEn,
            description: advertConfigData.description,
            descriptionEn: advertConfigData.descriptionEn,
            type: advertConfigData.type,
            advertState: advertConfigData.advertState,
            price: advertConfigData.price,
            categories: selectCategories,
            gallery,
            tags: selectTags,
            author: userData._id,
            image: image
          },
          id
        )
      );
    }
  };

  return (
    <LayoutAccount title={'Edit Product'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
      <div id="advert-create">
        <div className="account-container">
          <form className="form" onSubmit={handleFormSubmit}>
            {!isLoading ? (
              <>
                <section className="grid-two-cols">
                  {/* Spanish title */}
                  <div className="input-item">
                    <label>Spanish Title</label>
                    <input
                      className="input"
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Enter Spanish Title"
                      value={advertConfigData.name}
                      onChange={handleChange}
                    ></input>
                  </div>

                  {/* Spanish Description */}
                  <div className="input-item">
                    <label>Spanish Description</label>
                    <textarea
                      className="input"
                      name="description"
                      type="text"
                      id="description"
                      placeholder="Enter a product description"
                      rows="6"
                      cols="50"
                      value={advertConfigData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* English Description */}
                  <div className="input-item">
                    <label>English Title</label>
                    <input
                      className="input"
                      name="nameEn"
                      type="text"
                      id="nameEn"
                      placeholder="Enter English Title"
                      value={advertConfigData.nameEn}
                      onChange={handleChange}
                    ></input>
                  </div>

                  {/* English Description */}
                  <div className="input-item">
                    <label>English Description</label>
                    <textarea
                      className="input"
                      name="descriptionEn"
                      type="text"
                      id="descriptionEn"
                      placeholder="Enter a product description"
                      rows="6"
                      cols="50"
                      value={advertConfigData.descriptionEn}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="radio-options">
                    <p className="options-title">State:</p>
                    <div className="radio-container">
                      <input
                        type="radio"
                        name="state"
                        id="ForSale"
                        value="ForSale"
                        checked={advertState === 'ForSale' ? true : false}
                        onChange={handlerState}
                      />
                      <label className="label-radio" htmlFor="ForSale">
                        <p>+ </p>
                        <p>ForSale</p>
                      </label>
                      <input
                        type="radio"
                        name="state"
                        id="Inactive"
                        value="Inactive"
                        checked={advertState === 'Inactive' ? true : false}
                        onChange={handlerState}
                      />
                      <label className="label-radio" htmlFor="Inactive">
                        <p>+ </p>
                        <p>Inactive</p>
                      </label>
                      <input
                        type="radio"
                        name="state"
                        id="Finished"
                        value="Finished"
                        checked={advertState === 'Finished' ? true : false}
                        onChange={handlerState}
                      />
                      <label className="label-radio" htmlFor="Finished">
                        <p>+ </p>
                        <p>Finished</p>
                      </label>
                    </div>
                  </div>

                  {/* Type Sale  */}
                  <div className="radio-options">
                    <p className="options-title">Type:</p>
                    <div className="radio-container">
                      <input
                        type="radio"
                        name="type"
                        id="Sale"
                        value="Sale"
                        checked={type === 'Sale' && true}
                        onChange={handlerType}
                      />
                      <label className="label-radio" htmlFor="Sale">
                        <p>+ </p>
                        <p>Sale</p>
                      </label>
                      <input
                        type="radio"
                        name="type"
                        id="Purchase"
                        value="Purchase"
                        checked={type === 'Purchase' && true}
                        onChange={handlerType}
                      />
                      <label className="label-radio" htmlFor="Purchase">
                        <p>+ </p>
                        <p>Purchase</p>
                      </label>
                    </div>
                  </div>
                </section>

                {/* Tags */}
                <section className="section grid-two-cols">
                  <div className="input-item">
                    {/*TODO:Implement library react-tag-input */}
                    <label>Aditional Tags</label>
                    <TagsInput
                      value={selectTags}
                      onChange={setSelectTags}
                      name="tags"
                      placeHolder="Enter tags related your product"
                    />
                  </div>

                  {/* Price*/}
                  <div className="input-item">
                    <label>Price</label>
                    <input
                      className="input"
                      name="price"
                      min="0"
                      step="any"
                      type="number"
                      id="price"
                      placeholder="Enter price"
                      value={advertConfigData.price}
                      onChange={handleChange}
                    ></input>
                  </div>
                </section>

                {/*TODO: Add library react-dropzone load images*/}
                {/* Categories */}
                <section className="section">
                  <div className="input-container">
                    <p className="title">Categories: </p>
                    <ul className="categories">
                      {categories.map((category, index) => (
                        <li key={category._id}>
                          <input
                            name="type"
                            type="checkbox"
                            onChange={(e) => handleCheckCategories(e)}
                            value={category._id}
                            checked={selectCategories.includes(category._id) ? true : false}
                          />
                          {category.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                {/* Image */}

                <section className="section">
                  <div className="input-container">
                    <label>Old Image: </label>
                    <div>
                      <img
                        className="image-preview"
                        alt={''}
                        src={advert ? advert.image : urlNoImage}
                      />
                    </div>
                    <div>
                      <label>Cover Image</label>
                      <DropFileUpload updateFeaturedImage={updateFeaturedImage} />
                      <p>{image}</p>
                    </div>
                  </div>
                </section>
                <section className="footer">
                  <Button primaryOutline onClick={() => navigate(-1)}>
                    Cancel
                  </Button>
                  <Button secondary type="submit">
                    Save Product
                  </Button>
                </section>
              </>
            ) : (
              !isLoading && <NotResultsFound />
            )}
          </form>
        </div>
      </div>
    </LayoutAccount>
  );
}

export default AdvertEdit;
