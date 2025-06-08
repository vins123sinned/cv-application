function Input({
  type,
  id,
  name,
  value,
  data,
  dataSectionName,
  setState,
  isSubForm,
  isDisabled,
  hasError,
}) {
  function updateData(event) {
    // check for value or checked depending on the input
    const newValue =
      name === "ongoing" ? event.target.checked : event.target.value;

    if (isSubForm) {
      // Note: data is subFormData in this case
      const newSubFormData = {
        ...data,
        [name]: newValue,
      };

      setState(newSubFormData);
      return;
    }
    const newData = {
      ...data,
      [dataSectionName]: {
        ...data[dataSectionName],
        [name]: newValue,
      },
    };

    setState(newData);
  }

  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={updateData}
      disabled={isDisabled}
      className={hasError ? "error" : ""}
      {...(type === "checkbox" ? { checked: value } : { value })}
    />
  );
}

export { Input };
