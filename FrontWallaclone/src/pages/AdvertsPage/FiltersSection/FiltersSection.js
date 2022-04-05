import './FiltersSection.scss';
import { useState } from 'react';
import RangeSlider from '../Common/Slider';
import RadioGroup from '../Common/RadioGroup';
import SelectTags from '../SelectTags';
import { filterSale } from '../service';
import Button from '../../../components/Button/Button';

function FiltersSection({ initialFilters, defaultFilters, onFilter, prices }) {
  const [filter, setFilter] = useState(initialFilters);

  const handleChange = (ev) => {
    let value;
    value = ev.target.value;

    setFilter({
      ...filter,
      [ev.target.name]: value
    });
  };

  const handleSubmit = (onSubmit) => (ev) => {
    ev.preventDefault();
    onSubmit(filter);
  };

  const handleResetClick = () => {
    setFilter(defaultFilters);
  };

  const { name, price, sale, tags } = filter;
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return (
    <div id="filters-section">
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onFilter)}>
          <div className="input-item">
            <label className="search-label">
              <input
                className="filter-name"
                placeholder="Name"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="input-item price">
            <label className="range-label">
              Price
              <RangeSlider
                min={min}
                max={max}
                value={price}
                name="price"
                onChange={handleChange}
                marks={{ [min]: min, [max]: max }}
              />
            </label>
          </div>

          <div className="input-item type">
            <RadioGroup
              className="radio-group"
              options={Object.values(filterSale)}
              name="sale"
              value={sale}
              onChange={handleChange}
              marks={{ [min]: min, [max]: max }}
            />
          </div>

          <div className="input-item">
            <SelectTags className="tags" name="tags" value={tags} onChange={handleChange} />
          </div>

          <div className="buttons">
            <Button primaryOutline type="submit">
              🔎 Filter
            </Button>
            <Button primaryOutline onClick={handleResetClick}>
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FiltersSection;
