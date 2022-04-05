import React, { useEffect, useState } from 'react';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import './ReviewsPage.scss';
import NotResultsFound from '../../../components/NotResultsFound/NotResultsFound';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../../store/selectors/selectors';
import { loadAdvertDetail, loadAdverts } from '../../../store/actions';

//TODO: Search no found, sustitude in map for searResult atack to reviews

function ReviewsPage() {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => getAdverts(state));

  useEffect(() => {
    dispatch(loadAdverts());
  }, [dispatch]);

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handlerSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const results = adverts.filter((advert) => advert.reviews.includes(searchText));
    setSearchResults(results);
  }, [searchText]);

  return (
    <LayoutAccount title={'Reviews'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
      <div id="reviews-page">
        <div className="account-container">
          {/*Search and order */}
          <div className="input-item">
            <label>
              Search:{' '}
              <input
                className="input"
                name="search"
                type="text"
                id="search"
                placeholder="Product name, category..."
                value={searchText}
                onChange={handlerSearch}
              ></input>
            </label>
          </div>

          <ul className="grid-cards-reviews">
            {adverts?.length > 0 ? (
              adverts.map((advert) =>
                advert.reviews.map((review) => (
                  <li key={review._id}>
                    <ReviewCard review={review} />
                  </li>
                ))
              )
            ) : (
              <div>
                <NotResultsFound />
              </div>
            )}
          </ul>
        </div>
      </div>
    </LayoutAccount>
  );
}

export default ReviewsPage;
