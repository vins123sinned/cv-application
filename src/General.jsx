import { FormField } from "./FormField"

function General() {
	const fields = [{
		id: 'name',
		name: 'name',
		text: 'Name',
	}, 
	{
		id: 'email',
		name: 'email',
		text: 'Email',
		type: 'email',
	}, 
	{
		id: 'phone-number',
		name: 'phone_number',
		text: 'Phone Number',
		type: 'tel',
	}];

	return (
		<section className="general-info">
				<h2>General Info</h2>
				{fields.map((field) =>
					<FormField type={field.type} text={field.text} id={field.id} name={field.name} key={field.id} />
				)}
		</section>
	)
}

export { General }

