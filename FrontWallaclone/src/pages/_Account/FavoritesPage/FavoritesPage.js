import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvertCard from '../../../components/AdvertCard/AdvertCard';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import { loadPaginatedAdverts } from '../../../store/actions';
import { getAdverts, getUi } from '../../../store/selectors/selectors';
import FiltersSection from '../../AdvertsPage/FiltersSection/FiltersSection';
import NotResultsFound from '../../../components/NotResultsFound/NotResultsFound';
import { toast } from 'react-hot-toast';

import './FavoritesPage.scss';
import CustomToaster from '../../../components/CustomToaster/CustomToaster';
import LoadingBox from '../../../components/LoadingBox/LoadingBox';

function FavoritesPage() {
  const dispatch = useDispatch();
  //TODO: load only adverts user
  const { isLoading, error } = useSelector(getUi);
  useEffect(() => {
    if (error) {
      toast.error(`${error.message}: ${error.error}`);
    }
  }, [error]);
  const limitPagination = 300;

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
  }, [dispatch]);

  const adverts = useSelector(getAdverts);
  return (
    <LayoutAccount title={'Favorites'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
      <div id="favorites-page">
        {!isLoading ? (
          <div className="account-container">
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
          </div>
        ) : (
          !isLoading && <NotResultsFound />
        )}
        {isLoading && <LoadingBox />}
        {error && <CustomToaster />}
      </div>
    </LayoutAccount>
  );
}

export default FavoritesPage;
