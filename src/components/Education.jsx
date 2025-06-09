import { SubForm } from "./SubForm";
import { AddButton, EditButton, DeleteButton } from "./Buttons.jsx";
import { useState } from "react";

function Education({
  data,
  setData,
  errors,
  setErrors,
  editingKey,
  setEditingKey,
}) {
  const [showSubForm, setShowSubForm] = useState(false);
  const [subFormData, setSubFormData] = useState({
    school: "",
    study: "",
    startDate: "",
    endDate: "",
    ongoing: false,
    key: self.crypto.randomUUID(),
  });
  const dataSectionName = "education";
  const fields = [
    {
      id: "school",
      name: "school",
      label: "School",
    },
    {
      id: "study",
      name: "study",
      label: "Field of Study",
    },
  ];

  function showEducationEntries() {
    return data.education.map((entry) => {
      if (editingKey === entry.key) {
        return (
          <SubForm
            title="Education"
            fields={fields}
            data={data}
            dataSectionName={dataSectionName}
            setData={setData}
            errors={errors}
            setErrors={setErrors}
            setShowSubForm={setShowSubForm}
            subFormData={subFormData}
            setSubFormData={setSubFormData}
            editingKey={editingKey}
            setEditingKey={setEditingKey}
            key={entry.key}
          />
        );
      } else {
        return (
          <div className="entry" key={entry.key}>
            <h3 className="entry-heading">{entry.school}</h3>
            <p className="entry-para">{entry.study}</p>
            <p className="entry-para">
              {entry.startDate} - {entry.ongoing ? "Present" : entry.endDate}
            </p>
            <DeleteButton
              data={data}
              entryKey={entry.key}
              dataSectionName={dataSectionName}
              setData={setData}
            />
            <EditButton
              data={data}
              entryKey={entry.key}
              setEditingKey={setEditingKey}
              setSubFormData={setSubFormData}
            />
          </div>
        );
      }
    });
  }

  return (
    <section className="education">
      <h2 className="section-heading">Education</h2>
      {showEducationEntries()}
      {showSubForm && (
        <SubForm
          title="Education"
          fields={fields}
          data={data}
          dataSectionName={dataSectionName}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
          setShowSubForm={setShowSubForm}
          subFormData={subFormData}
          setSubFormData={setSubFormData}
          editingKey={editingKey}
          setEditingKey={setEditingKey}
        />
      )}
      {!showSubForm && (
        <AddButton
          text="Add Education"
          stateBoolean={showSubForm}
          setState={setShowSubForm}
        />
      )}
    </section>
  );
}

export { Education };
