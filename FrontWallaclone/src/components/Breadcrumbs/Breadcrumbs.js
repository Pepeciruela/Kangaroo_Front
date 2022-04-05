import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

function Breadcrumbs() {
  //TODO: Breadcrumbs mook, generate correct behavior or install a library that compliments the task
  return (
    <nav id="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <Link to="/"> Home</Link>
            <span>/</span>
          </li>
          <li>
            <Link to="/"> Home&Garden</Link>
            <span>/</span>
          </li>
          <li>
            <Link to="/"> Sofa</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
