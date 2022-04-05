import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvertCard from '../../../components/AdvertCard/AdvertCard';
import { loadUserAdverts } from '../../../store/actions';
import { getAdverts } from '../../../store/selectors/selectors';
import NotResultsFound from '../../../components/NotResultsFound/NotResultsFound';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function TabUserForSale() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const limitPagination = 300;

  useEffect(() => {
    dispatch(loadUserAdverts(id));
  }, [dispatch]);

  const adverts = useSelector(getAdverts);
  console.log(adverts);
  return (
    <section>
      <ul className="tab-grid-cards">
        {adverts.length > 0 ? (
          adverts.slice(0, limitPagination).map((advert) => (
            <li key={advert._id}>
              <AdvertCard advert={advert} />
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

export default TabUserForSale;
