import { FormField } from "./FormField";
import { DateRange } from "./DateRange";
import "../assets/SubForm.css";

function SubForm({
  fields,
  data,
  dataSectionName,
  setData,
  errors,
  setErrors,
  setShowSubForm,
  subFormData,
  setSubFormData,
  editingKey,
  setEditingKey,
}) {
  function checkSubForm() {
    const newErrors = { ...errors };
    let isValid = true;

    for (const property in subFormData) {
      if (
        property === "ongoing" ||
        property === "endDate" ||
        property === "responsibilities"
      )
        continue;
      if (!subFormData[property]) {
        newErrors[property] = "Required!";
        isValid = false;
      }
    }

    if (!subFormData.endDate && !subFormData.ongoing) {
      newErrors.endDate = "Required!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function cancelSubform() {
    setSubFormData({
      school: "",
      study: "",
      startDate: "",
      endDate: "",
      ongoing: false,
      key: self.crypto.randomUUID(),
    });
    setShowSubForm(false);
    setEditingKey(null);
    setErrors({});
  }

  function updateData() {
    // Validate form before moving on
    const isValid = checkSubForm();
    if (!isValid) return;

    let newSectionData;
    if (editingKey) {
      // Replace existing entry with new data if editing
      newSectionData = data[dataSectionName].map((entry) =>
        entry.key === editingKey ? subFormData : entry,
      );
    } else {
      // Otherwise append to end of array
      newSectionData = [...data[dataSectionName], subFormData];
    }

    const newData = {
      ...data,
      [dataSectionName]: newSectionData,
    };

    setData(newData);
    setSubFormData(null);
    setShowSubForm(false);
    setEditingKey(null);
    setErrors({});
  }

  return (
    <section className="subform">
      {fields.map((field) => (
        <FormField
          type={field.type}
          label={field.label}
          id={field.id}
          name={field.name}
          value={subFormData[field.name]}
          data={subFormData}
          dataSectionName={dataSectionName}
          setState={setSubFormData}
          isSubForm={true}
          errors={errors}
          setErrors={setErrors}
          required={field.required}
          key={field.id}
        />
      ))}
      <DateRange
        data={subFormData}
        dataSectionName={dataSectionName}
        setState={setSubFormData}
        isSubForm={true}
        errors={errors}
        setErrors={setErrors}
      />
      <div className="subform-buttons">
        <button type="button" className="cancel-button" onClick={cancelSubform}>
          Cancel
        </button>
        <button type="button" className="submit-button" onClick={updateData}>
          Submit
        </button>
      </div>
    </section>
  );
}

export { SubForm };
