import React from 'react';
import CategorieIconCard from '../../../components/CategorieIconCard/CategorieIconCard';
import NotResultsFound from '../../../components/NotResultsFound/NotResultsFound';
import './SliderCategories.scss';

function SliderCategories({ categories, limit }) {
  return (
    <section id="slider-categories">
      <div className="container">
        <div className="header">
          <h3>Top Categories</h3>
          <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
        </div>
        <ul className="categories">
          {categories.length > 0 ? (
            categories.slice(0, limit).map((category) => (
              <li key={category._id}>
                <CategorieIconCard category={category} />
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

export default SliderCategories;
