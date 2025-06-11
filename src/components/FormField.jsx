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
}) {
  const hasError = errors && Object.hasOwn(errors, name);
  let isDisabled = false;
  if (name === "endDate" && data.ongoing) isDisabled = true;

  return (
    <div className="form-field">
      <label htmlFor={id} className={hasError ? "error" : ""}>
        {label}
      </label>
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
        errors={errors}
      />
    </div>
  );
}

export { FormField };
