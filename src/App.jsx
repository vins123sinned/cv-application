import { useState } from "react";
import "./assets/App.css";
import { General } from "./components/General.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { GenerateButton } from "./components/GenerateButton.jsx";

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
  const [errors, setErrors] = useState({});
  const [editingKey, setEditingKey] = useState(null);
  const [showSubForm, setShowSubForm] = useState(false);
  const [subFormData, setSubFormData] = useState(null);

  return (
    <>
      <h1>CV Application</h1>
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
        <GenerateButton data={data} errors={errors} setErrors={setErrors} />
      </form>
    </>
  );
}

export default App;
