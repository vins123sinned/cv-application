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

  return (
    <>
      <h1>CV Application</h1>
      <form>
        <General data={data} setData={setData} />
        <Education
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
        />
        <Experience data={data} setData={setData} />
        <GenerateButton />
      </form>
    </>
  );
}

export default App;
