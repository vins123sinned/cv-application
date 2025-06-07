import { Input } from "./Input.jsx";

function FormField({
  type = "text",
  label,
  id,
  name,
  value,
  data,
  dataSectionName,
  setState,
  isSubForm,
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea id={id} name={name} />
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          data={data}
          dataSectionName={dataSectionName}
          setState={setState}
          isSubForm={isSubForm}
        />
      )}
    </div>
  );
}

export { FormField };
