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
  errors,
  setErrors,
}) {
  // Will add disabled styling to label too!
  const hasError = errors && Object.hasOwn(errors, name);
  let isDisabled = false;
  if (name === "endDate" && data.ongoing) isDisabled = true;

  return (
    <div className="form-field">
      <label htmlFor={id} className={hasError ? "error" : ""}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea id={id} name={name} />
      ) : (
        <>
          <Input
            type={type}
            id={id}
            name={name}
            value={value}
            data={data}
            dataSectionName={dataSectionName}
            setState={setState}
            isSubForm={isSubForm}
            isDisabled={isDisabled}
            hasError={hasError}
          />
          {hasError && <span className="error-span">{errors[name]}</span>}
        </>
      )}
    </div>
  );
}

export { FormField };
