import { FormField } from "./FormField";
import { DateRange } from "./DateRange";
import { useState } from "react";

function SubForm({
  fields,
  data,
  dataSectionName,
  setData,
  errors,
  setErrors,
  setShowSubForm,
}) {
  const [subFormData, setSubformData] = useState({
    school: "",
    study: "",
    startDate: "",
    endDate: "",
    ongoing: false,
    key: self.crypto.randomUUID(),
  });

  function checkSubForm() {
    const newErrors = { ...errors };
    let isValid = true;

    for (const property in subFormData) {
      if (property === 'ongoing') continue;
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
    const isValid =  checkSubForm();
    if (!isValid) return;

    const newData = {
      ...data,
      [dataSectionName]: [...data.education, subFormData],
    };

    // remove subform component and render new education section
    setData(newData);
    setShowSubForm(false);
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
          setState={setSubformData}
          isSubForm={true}
          errors={errors}
          setErrors={setErrors}
          key={field.id}
        />
      ))}
      <DateRange
        data={subFormData}
        dataSectionName={dataSectionName}
        setState={setSubformData}
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
