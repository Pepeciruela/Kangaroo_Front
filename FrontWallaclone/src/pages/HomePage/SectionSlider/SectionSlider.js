import AdvertCard from '../../../components/AdvertCard/AdvertCard';
import './SectionSlider.scss';
import NotResultsFound from '../../../components/NotResultsFound/NotResultsFound';

function SectionSlider({ adverts, title, subtitle, limit }) {
  return (
    <section id="section-slider">
      <div className="container">
        <div className="header">
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
        <ul className="content">
          {adverts.length > 0 ? (
            adverts.slice(0, limit).map((advert) => (
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
      </div>
    </section>
  );
}

export default SectionSlider;
