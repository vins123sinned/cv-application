import './assets/App.css';
import { General } from './components/General.jsx';
import { Education } from './components/Education.jsx';
import { Experience } from './components/Experience.jsx';
import { GenerateButton } from './components/GenerateButton.jsx';

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <form>
        <General />
        <Education />
        <Experience />
        <GenerateButton />
      </form>
    </>
  )
}

export default App
