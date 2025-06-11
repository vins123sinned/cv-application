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
      Edit Symbol
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
      Delete
    </button>
  );
}

export { AddButton, EditButton, DeleteButton };
