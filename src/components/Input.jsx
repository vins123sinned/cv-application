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
  errors,
  setErrors,
}) {
  function validateInput(event) {
    const newErrors = { ...errors };
    const acceptedTelValues = /^[0-9\-()]*$/;

    if (type === "email" && event.target.validity.typeMismatch) {
      newErrors[name] = "Must be a valid email!";
    } else if (type === "tel" && !acceptedTelValues.test(event.target.value)) {
      newErrors[name] =
        "Phone number can only contain numbers, dashes, and parentheses (dashes and parentheses optional)";
    } else if (type === "checkbox" && event.target.checked) {
      delete newErrors.endDate;
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  }

  function updateData(event) {
    validateInput(event);

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
    <>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={updateData}
          className={hasError ? "error" : ""}
        />
      ) : (
        <>
          <input
            type={type}
            id={id}
            name={name}
            onChange={updateData}
            disabled={isDisabled}
            className={hasError ? "error" : ""}
            {...(type === "checkbox" ? { checked: value } : { value })}
          />
        </>
      )}
      {hasError && <span className="error-span">{errors[name]}</span>}
    </>
  );
}

export { Input };
