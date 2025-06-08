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

export { EditButton };
