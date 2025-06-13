function GenerateButton({ data, errors, setErrors, setGenerateCv }) {
  function checkGeneral() {
    const newErrors = { ...errors };
    let isValid = true;

    for (const property in data.general) {
      if (!data.general[property]) {
        newErrors[property] = "Required!";
        isValid = false;
      }
    }

    if (Object.keys(errors).length !== 0) isValid = false;

    setErrors(newErrors);
    return isValid;
  }

  function generateCv() {
    const isValid = checkGeneral();
    if (!isValid) return;

    setGenerateCv(true);
  }

  return (
    <button type="button" className="generate-button" onClick={generateCv}>
      Generate
    </button>
  );
}

export { GenerateButton };
