import { SubForm } from "./SubForm.jsx";
import { AddButton, EditButton, DeleteButton } from "./Buttons.jsx";
import "../assets/Entry.css";

function Education({
  data,
  setData,
  errors,
  setErrors,
  editingKey,
  setEditingKey,
  showSubForm,
  setShowSubForm,
  subFormData,
  setSubFormData,
}) {
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
            <h3 className="entry-heading">{entry.study}</h3>
            <h4 className="entry-subheading">{entry.school}</h4>
            <p className="entry-para">
              {entry.startDate} - {entry.ongoing ? "Present" : entry.endDate}
            </p>
            <div className="entry-buttons">
              <DeleteButton
                data={data}
                entryKey={entry.key}
                dataSectionName={dataSectionName}
                setData={setData}
              />
              <EditButton
                data={data}
                entryKey={entry.key}
                dataSectionName={dataSectionName}
                setEditingKey={setEditingKey}
                setSubFormData={setSubFormData}
              />
            </div>
          </div>
        );
      }
    });
  }

  return (
    <section className="education form-section">
      <h2 className="section-heading">Education</h2>
      {showEducationEntries()}
      {showSubForm === "education" && !editingKey && (
        <SubForm
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
      {showSubForm !== "education" && (
        <AddButton
          text="Add Education"
          dataSectionName={dataSectionName}
          setEditingKey={setEditingKey}
          setShowSubForm={setShowSubForm}
          setSubFormData={setSubFormData}
          setErrors={setErrors}
        />
      )}
    </section>
  );
}

export { Education };
