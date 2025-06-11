import { FormField } from "./FormField";

function DateRange({
  data,
  dataSectionName,
  setState,
  isSubForm,
  errors,
  setErrors,
}) {
  return (
    <>
      <FormField
        type="date"
        label="Start Date"
        id="start-date"
        name="startDate"
        value={data.startDate}
        data={data}
        dataSectionName={dataSectionName}
        setState={setState}
        isSubForm={isSubForm}
        errors={errors}
        setErrors={setErrors}
      />
      <FormField
        type="date"
        label="End Date"
        id="end-date"
        name="endDate"
        value={data.endDate}
        data={data}
        dataSectionName={dataSectionName}
        setState={setState}
        isSubForm={isSubForm}
        errors={errors}
        setErrors={setErrors}
      />
      <FormField
        type="checkbox"
        label="Ongoing?"
        id="ongoing"
        name="ongoing"
        value={data.ongoing}
        data={data}
        dataSectionName={dataSectionName}
        setState={setState}
        isSubForm={isSubForm}
        errors={errors}
        setErrors={setErrors}
      />
    </>
  );
}

export { DateRange };
