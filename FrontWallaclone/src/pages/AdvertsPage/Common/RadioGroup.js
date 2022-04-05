function RadioGroup({ options, value, ...props }) {
    return (
      <div>
        {options.map(({ value: option, label }) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={option === value}
              {...props}
            />
            {label}
          </label>
        ))}
      </div>
    );
  }
  
  export default RadioGroup;
  