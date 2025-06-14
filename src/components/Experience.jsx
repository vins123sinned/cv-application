import { SubForm } from "./SubForm";
import { AddButton, EditButton, DeleteButton } from "./Buttons";
import "../assets/Entry.css";

function Experience({
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
  const dataSectionName = "experience";
  const fields = [
    {
      id: "company",
      name: "company",
      label: "Company",
      required: true,
    },
    {
      id: "position",
      name: "position",
      label: "Position",
      required: true,
    },
    {
      id: "responsibilities",
      name: "responsibilities",
      label: "Responsibilities",
      type: "textarea",
      required: false,
    },
  ];

  function showExperienceEntries() {
    return data.experience.map((entry) => {
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
            <h3 className="entry-heading">{entry.position}</h3>
            <h4 className="entry-subheading">{entry.company}</h4>
            <p className="entry-para">{entry.responsibilities}</p>
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
                setShowSubForm={setShowSubForm}
              />
            </div>
          </div>
        );
      }
    });
  }

  return (
    <section className="experience form-section">
      <h2 className="section-heading">Experience</h2>
      {showExperienceEntries()}
      {showSubForm === "experience" && !editingKey && (
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
      {showSubForm !== "experience" && (
        <AddButton
          text="Add Experience"
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

export { Experience };
