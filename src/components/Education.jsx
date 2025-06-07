import { SubForm } from "./SubForm";
import { AddButton } from "./AddButton.jsx";
import { EditButton } from "./EditButton.jsx";
import { useState } from "react";

function Education({ data, setData }) {
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

  return (
    <section className="education">
      <h2 className="section-heading">Education</h2>
      {showSubForm && (
        <SubForm
          title="Education"
          fields={fields}
          data={data}
          dataSectionName={dataSectionName}
          setData={setData}
        />
      )}
      <EditButton />
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
