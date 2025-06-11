function GenerateButton({ data, errors, setErrors }) {
  function checkGeneral() {
    const newErrors = { ...errors };
    let isValid = true;

    for (const property in data.general) {
      if (!data.general[property]) {
        newErrors[property] = "Required!";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }

  return (
    <button type="button" className="generate-button" onClick={checkGeneral}>
      Generate
    </button>
  );
}

export { GenerateButton };
