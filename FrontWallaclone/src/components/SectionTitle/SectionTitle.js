import React from 'react';
import './SectionTitle.scss';

function SectionTitle({ title, subtitle, ...props }) {
  return (
    <section id="title-section">
      <div className="container">
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
      </div>
    </section>
  );
}

export default SectionTitle;
