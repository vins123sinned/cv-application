import { FormField } from "./FormField";
import { DateRange } from "./DateRange";

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
      if (property === "ongoing" || property === "endDate") continue;
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
  }

  return (
    <section className="sub-form">
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
      <button type="button" className="cancel">
        Cancel
      </button>
      <button type="button" className="submit" onClick={updateData}>
        Submit
      </button>
    </section>
  );
}

export { SubForm };
