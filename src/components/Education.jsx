import { SubForm } from "./SubForm";
import { AddButton } from "./AddButton.jsx";
import { EditButton } from "./EditButton.jsx";
import { useState } from "react";

function Education({ data, setData, errors, setErrors }) {
  const [showSubForm, setShowSubForm] = useState(false);
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
    return data.education.map((entry) => (
      <div className="entry" key={entry.key}>
        <h3 className="entry-heading">{entry.school}</h3>
        <p className="entry-para">{entry.study}</p>
        <p className="entry-para">{entry.startDate} - {entry.ongoing ? 'Present' : entry.endDate}</p>
        <EditButton />
      </div>
    ));
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
