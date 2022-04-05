import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvertCardAccount from '../../../../components/AdvertCardAccount/AdvertCardAccount';
import { loadUserAdverts } from '../../../../store/actions';
import { getAdverts } from '../../../../store/selectors/selectors';
import NotResultsFound from '../../../../components/NotResultsFound/NotResultsFound';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function TabProductsFinished() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const limitPagination = 300;

  useEffect(() => {
    dispatch(loadUserAdverts(userId));
  }, [dispatch]);

  const preloadedAdverts = useSelector(getAdverts);
  const adverts = preloadedAdverts.filter((advert) => advert.state === 'Finished');
  return (
    <section>
      <ul className="tab-grid-cards">
        {adverts.length > 0 ? (
          adverts
            .slice(0, limitPagination)

            .map((advert) => (
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

export default TabProductsFinished;
