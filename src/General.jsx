import { FormField } from "./FormField"

function General() {
	const fields = [{
		id: 'name',
		name: 'name',
		label: 'Name',
	}, 
	{
		id: 'email',
		name: 'email',
		label: 'Email',
		type: 'email',
	}, 
	{
		id: 'phone-number',
		name: 'phone_number',
		label: 'Phone Number',
		type: 'tel',
	}];

	return (
		<section className="general">
				<h2>General</h2>
				{fields.map((field) =>
					<FormField type={field.type} label={field.label} id={field.id} name={field.name} key={field.id} />
				)}
		</section>
	)
}

export { General }

