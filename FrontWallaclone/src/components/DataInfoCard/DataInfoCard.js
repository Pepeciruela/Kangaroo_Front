import React from 'react';
import './DataInfoCard.scss';

function DataInfoCard({ title, data, resume, icon, ...props }) {
  return (
    <div id="data-info-card">
      <div className="col-data-card-left">
        <p className="header-info">{title}</p>
        <p className="data">{data}</p>
        <p className="footer-info">{resume}</p>
      </div>
      <div className="col-data-card-right">{icon}</div>
    </div>
  );
}

export default DataInfoCard;
