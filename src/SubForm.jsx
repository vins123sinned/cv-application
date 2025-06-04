import { FormField } from "./FormField";

// Also add a button for date to disable end date!
function SubForm({ title, fields }) {
	return (
		<section className="sub-form">
			<h2>{title}</h2>
			{fields.map((field) =>
				<FormField type={field.type} label={field.label} id={field.id} name={field.name} key={field.id} />
			)}
			{/*This could be its own component!*/}
			<FormField 
				type="date" 
				label="Start Date" 
				id="start-date" 
				name="start_date" 
			/>
			<FormField 
				type="date" 
				label="End Date" 
				id="end-date" 
				name="end_date" 
			/>
		</section>
	)
}

export { SubForm }