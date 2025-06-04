import { FormField } from "./FormField";

// Also add a button for date to disable end date!
function SubForm({ title, fields }) {
	return (
		<section className="sub-form">
			<h2>{title}</h2>
			{fields.map((field) =>
				<FormField type={field.type} text={field.text} id={field.id} name={field.name} />
			)}
			<FormField 
				type="date" 
				text="Start Date" 
				id="start-date" 
				name="start_date" 
			/>
			<FormField 
				type="date" 
				text="End Date" 
				id="end-date" 
				name="end_date" 
			/>
		</section>
	)
}

export { SubForm }