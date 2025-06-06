import { FormField } from "./FormField";

function DateRange() {
	return (
		<>
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
			<FormField
				type="checkbox"
				label="Ongoing?"
				id="ongoing"
				name="ongoing"
			/>
		</>
	)
}

export { DateRange }