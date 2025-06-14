import "../assets/Buttons.css";

function AddButton({
  text,
  dataSectionName,
  setEditingKey,
  setShowSubForm,
  setSubFormData,
  setErrors,
}) {
  function addClicked() {
    if (dataSectionName === "education") {
      setSubFormData({
        school: "",
        study: "",
        startDate: "",
        endDate: "",
        ongoing: false,
        key: self.crypto.randomUUID(),
      });
    } else {
      setSubFormData({
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
        ongoing: false,
        key: self.crypto.randomUUID(),
      });
    }

    setShowSubForm(dataSectionName);
    setEditingKey(null);
    setErrors({});
  }

  return (
    <button type="button" className="add-button" onClick={addClicked}>
      <span className="material-symbols-outlined">add</span>
      {text}
    </button>
  );
}

function EditButton({
  data,
  entryKey,
  dataSectionName,
  setEditingKey,
  setSubFormData,
}) {
  function editEntry() {
    const entryData = data[dataSectionName].find(
      (entry) => entry.key === entryKey,
    );

    setEditingKey(entryKey);
    setSubFormData(entryData);
  }

  return (
    <button type="button" className="edit-button" onClick={editEntry}>
      <span className="material-symbols-outlined">edit</span>
    </button>
  );
}

function DeleteButton({ data, entryKey, dataSectionName, setData }) {
  function deleteEntry() {
    const newSectionData = data[dataSectionName].filter(
      (entry) => entry.key !== entryKey,
    );
    const newData = {
      ...data,
      [dataSectionName]: newSectionData,
    };

    setData(newData);
  }

  return (
    <button type="button" className="delete-button" onClick={deleteEntry}>
      <span className="material-symbols-outlined">delete</span>
    </button>
  );
}

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

export { AddButton, EditButton, DeleteButton, GenerateButton };
