import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import { loadCategories, loadPaginatedAdverts } from '../../store/actions';
import { getAdverts, getCategories, getUi } from '../../store/selectors/selectors';
import SectionSlider from './SectionSlider/SectionSlider';
import Header from './Header/Header';
import './HomePage.scss';
import SliderCategories from './SliderCategories/SliderCategories';
import NotResultsFound from '../../components/NotResultsFound/NotResultsFound';
import CustonToaster from '../../components/CustomToaster/CustomToaster';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import CustomToaster from '../../components/CustomToaster/CustomToaster';

function HomePage() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);

  const adverts = useSelector(getAdverts);
  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(loadPaginatedAdverts());
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <LayoutGeneral>
      <>
        {!isLoading ? (
          <>
            <Header />
            <SliderCategories categories={categories} limit={6} />
            <SectionSlider
              adverts={adverts}
              title={'Featured consoles'}
              subtitle={'Discover the most desired consoles of the moment'}
              category={'category'}
              limit={4}
            />

            <SectionSlider
              adverts={adverts}
              title={'Our home selection'}
              subtitle={'The best products for your home'}
              category={'category'}
              limit={4}
            />
          </>
        ) : (
          !isLoading && <NotResultsFound />
        )}
        {/*Loading and errors */}
        {isLoading && <LoadingBox />}
        {error && <CustomToaster />}
      </>
    </LayoutGeneral>
  );
}

export default HomePage;
