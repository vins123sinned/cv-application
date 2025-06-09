function AddButton({ text, stateBoolean, setState }) {
  return (
    <button
      type="button"
      className="add-button"
      onClick={() => setState(!stateBoolean)}
    >
      {text}
    </button>
  );
}

function EditButton({ data, entryKey, setEditingKey, setSubFormData }) {
  function editEntry() {
    const entryData = data.education.find((entry) => entry.key === entryKey);

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
