function CheckboxSelect({ options, value, onChange, ...props }) {
  console.log(options)
    const handleChange = (group) => {
      const { name, checked, value: selectedValue } = group.target;
      onChange({
        target: {
          name,
          value: checked
            ? [...value, selectedValue]
            : value.filter((e) => e !== selectedValue),
        },
      });
    };
  
    return (
      <div style={{ display: "flex" }}>
      {options.map((option) => (
        <label
          style={{
            position: "relative",
          }}
          className="checkbox-label"
          key={option}
        >
          <input
            style={{ marginRight: ".5rem" }}
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
            {...props}
          />
          {option}
        </label>
      ))}
    </div>

  );
  }
  
  export default CheckboxSelect;
  