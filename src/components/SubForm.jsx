import { FormField } from "./FormField";
import { DateRange } from "./DateRange";

// Also add a button for date to disable end date!
function SubForm({ title, fields }) {
	return (
		<section className="sub-form">
			<h2>{title}</h2>
			{fields.map((field) =>
				<FormField type={field.type} label={field.label} id={field.id} name={field.name} key={field.id} />
			)}
			<DateRange />
		</section>
	)
}

export { SubForm }