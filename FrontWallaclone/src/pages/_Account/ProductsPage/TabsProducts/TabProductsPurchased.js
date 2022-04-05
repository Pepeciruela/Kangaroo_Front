import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvertCardAccountBuy from '../../../../components/AdvertCardAccountBuy/AdvertCardAccountBuy';
import { loadPaginatedAdverts } from '../../../../store/actions';
import { getAdverts } from '../../../../store/selectors/selectors';
import NotResultsFound from '../../../../components/NotResultsFound/NotResultsFound';

function TabProductsPurchased() {
  const dispatch = useDispatch();
  //TODO: load only adverts user

  const limitPagination = 300;

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
  }, [dispatch]);

  const adverts = useSelector(getAdverts);

  return (
    <section>
      <ul className="tab-grid-cards">
        {adverts.length > 0 ? (
          adverts.slice(0, limitPagination).map((advert) => (
            <li key={advert._id}>
              <AdvertCardAccountBuy advert={advert} />
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

export default TabProductsPurchased;
