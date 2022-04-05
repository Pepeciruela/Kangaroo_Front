import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { loadAdvertDetail } from '../../store/actions';
import { getAdvertDetail } from '../../store/selectors/selectors';

const AdvertDetail = (...props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const advert = useSelector((state) => getAdvertDetail(state, id));

  useEffect(() => {
    dispatch(loadAdvertDetail(id));
  }, [dispatch, id]);

  return advert ? (
    <article id="advert-detail">
      <div className="header">
        {advert.gallery.length > 0 ? (
          advert.gallery.slice(0, 3).map((item, index) => <img key={index} src={item} />)
        ) : (
          <div>
            <h2>image not available</h2>
          </div>
        )}
      </div>
    </article>
  ) : (
    <div>El anuncio no existe</div>
  );
};

export default AdvertDetail;
