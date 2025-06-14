import { FormField } from "./FormField";

function General({ data, setData, errors, setErrors }) {
  const dataSectionName = "general";
  const fields = [
    {
      id: "name",
      name: "name",
      label: "Name",
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      id: "phone-number",
      name: "phoneNumber",
      label: "Phone Number",
      type: "tel",
    },
  ];

  return (
    <section className="general form-section">
      <h2 className="section-heading">General</h2>
      {fields.map((field) => (
        <FormField
          type={field.type}
          label={field.label}
          id={field.id}
          name={field.name}
          value={data[dataSectionName][field.name]}
          data={data}
          dataSectionName={dataSectionName}
          setState={setData}
          errors={errors}
          setErrors={setErrors}
          required="true"
          key={field.id}
        />
      ))}
    </section>
  );
}

export { General };
