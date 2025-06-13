import { useState } from "react";
import "./assets/App.css";
import { General } from "./components/General.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { GenerateButton } from "./components/GenerateButton.jsx";
import { Resume } from "./components/Resume.jsx";

function Form({ data, setData, setGenerateCv }) {
  const [errors, setErrors] = useState({});
  const [editingKey, setEditingKey] = useState(null);
  const [showSubForm, setShowSubForm] = useState(false);
  const [subFormData, setSubFormData] = useState(null);

  return (
    <form>
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
      <GenerateButton
        data={data}
        errors={errors}
        setErrors={setErrors}
        setGenerateCv={setGenerateCv}
      />
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
      <h1>CV Application</h1>
      {generateCv ? (
        <Resume data={data} setGenerateCv={setGenerateCv} />
      ) : (
        <Form data={data} setData={setData} setGenerateCv={setGenerateCv} />
      )}
    </>
  );
}

export default App;
