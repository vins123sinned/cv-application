import { useState } from "react";
import { General } from "./components/General.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { GenerateButton } from "./components/Buttons.jsx";
import { Resume } from "./components/Resume.jsx";
import "./assets/App.css";

function Form({ data, setData, setGenerateCv }) {
  const [errors, setErrors] = useState({});
  const [editingKey, setEditingKey] = useState(null);
  const [showSubForm, setShowSubForm] = useState(false);
  const [subFormData, setSubFormData] = useState(null);

  return (
    <form>
      <h1 className="form-section">CV Application</h1>
      <General
        data={data}
        setData={setData}
        errors={errors}
        setErrors={setErrors}
      />
      <Education
        data={data}
        setData={setData}
        errors={errors}
        setErrors={setErrors}
        editingKey={editingKey}
        setEditingKey={setEditingKey}
        showSubForm={showSubForm}
        setShowSubForm={setShowSubForm}
        subFormData={subFormData}
        setSubFormData={setSubFormData}
      />
      <Experience
        data={data}
        setData={setData}
        errors={errors}
        setErrors={setErrors}
        editingKey={editingKey}
        setEditingKey={setEditingKey}
        showSubForm={showSubForm}
        setShowSubForm={setShowSubForm}
        subFormData={subFormData}
        setSubFormData={setSubFormData}
      />
      <div className="generate-container">
        <GenerateButton
          data={data}
          errors={errors}
          setErrors={setErrors}
          setGenerateCv={setGenerateCv}
        />
      </div>
    </form>
  );
}

function App() {
  // Each array will store a section's data
  const [data, setData] = useState({
    general: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    education: [],
    experience: [],
  });
  const [generateCv, setGenerateCv] = useState(false);

  return (
    <>
      {generateCv ? (
        <Resume data={data} setGenerateCv={setGenerateCv} />
      ) : (
        <Form data={data} setData={setData} setGenerateCv={setGenerateCv} />
      )}
    </>
  );
}

export default App;
