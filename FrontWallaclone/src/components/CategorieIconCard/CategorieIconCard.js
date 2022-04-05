import React from 'react';
import './CategorieIconCard.scss';
import iconSample from '../../resources/svg/icon-sample.svg';
import { Link } from 'react-router-dom';

function CategorieIconCard({ category }) {
  const url = '/adverts/categories';
  const link = `${url}/${category._id}`;
  return (
    <Link to={link} /*categoryId={category._id}*/ category_id={category._id}>
      <div id="categorie-icon-card">
        <img className="icon-category" alt={`icon ${category?.name}`} src={category?.icon}></img>
        <h5>{category?.name}</h5>
        {/* <p>+ {Math.floor(Math.random() * 100)} Products</p> */}
        <p>+ {category.adverts.length} Products</p>
      </div>
    </Link>
  );
}

export default CategorieIconCard;
