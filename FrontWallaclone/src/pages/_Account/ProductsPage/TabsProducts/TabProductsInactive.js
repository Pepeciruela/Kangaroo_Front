import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import AdvertCardAccount from '../../../../components/AdvertCardAccount/AdvertCardAccount';
import { loadUserAdverts } from '../../../../store/actions';
import { getAdverts } from '../../../../store/selectors/selectors';
import NotResultsFound from '../../../../components/NotResultsFound/NotResultsFound';

function TabProductsInactive() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const limitPagination = 300;

  useEffect(() => {
    dispatch(loadUserAdverts(userId));
  }, [dispatch]);

  const preloadedAdverts = useSelector(getAdverts);
  const adverts = preloadedAdverts.filter((advert) => advert.state === 'Inactive');

  return (
    <section>
      <ul className="tab-grid-cards">
        {adverts.length > 0 ? (
          adverts.slice(0, limitPagination).map((advert) => (
            <li key={advert._id}>
              <AdvertCardAccount advert={advert} />
            </li>
          ))
        ) : (
          <div>
            <NotResultsFound />
          </div>
        )}
      </ul>
    </section>
  );
}

export default TabProductsInactive;
