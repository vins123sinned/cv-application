import { FormField } from "./FormField";

function DateRange({ data, dataSectionName, setState, isSubForm }) {
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
      />
    </>
  );
}

export { DateRange };
