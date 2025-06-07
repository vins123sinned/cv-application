import { FormField } from "./FormField";
import { DateRange } from "./DateRange";
import { useState } from "react";

// TODO: disable date when ongoing checked and add validation styling!!
function SubForm({ fields, data, dataSectionName, setData }) {
  const [subFormData, setSubformData] = useState({
    school: "",
    study: "",
    startDate: "",
    endDate: "",
    ongoing: false,
  });

  function updateData() {
    // Validate form before moving on
    if (!subFormData.endDate && !subFormData.ongoing)
      return console.log("none first!");
    for (const property in subFormData) {
      if (property === "endDate" || property === "ongoing") continue;
      if (!subFormData[property]) return console.log("none!");
    }

    const newData = {
      ...data,
      [dataSectionName]: subFormData,
    };

    setData(newData);
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
          key={field.id}
        />
      ))}
      <DateRange
        data={subFormData}
        dataSectionName={dataSectionName}
        setState={setSubformData}
        isSubForm={true}
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
