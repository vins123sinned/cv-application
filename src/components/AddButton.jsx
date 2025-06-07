import { SubForm } from "./SubForm";

function AddButton({ text, stateBoolean, setState }) {
  return (
    <button
      type="button"
      className="add-button"
      onClick={() => setState(!stateBoolean)}
    >
      {text}
    </button>
  );
}

export { AddButton };
