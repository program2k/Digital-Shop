const CustomInput = ({
  type,
  name,
  placeholder,
  classname,
  onChange,
  value,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CustomInput;
