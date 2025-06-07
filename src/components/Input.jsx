function Input({
  type,
  id,
  name,
  value,
  data,
  dataSectionName,
  setState,
  isSubForm,
}) {
  function updateData(event) {
    if (isSubForm) {
      // Note: data is subFormData in this case
      const newSubFormData = {
        ...data,
        [name]: event.target.value,
      };

      setState(newSubFormData);
      return;
    }
    const newData = {
      ...data,
      [dataSectionName]: {
        ...data[dataSectionName],
        [name]: event.target.value,
      },
    };

    setState(newData);
  }

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={updateData}
    />
  );
}

export { Input };
