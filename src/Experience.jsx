import { SubForm } from "./SubForm";

function Experience() {
	const fields = [
		{
			id: 'company',
			name: 'company',
			label: 'Company',
		},
		{
			id: 'position',
			name: 'position',
			label: 'Position',
		},
		{
			id: 'responsibilities',
			name: 'responsibilities',
			label: 'Responsibilities',
			type: 'textarea',
		},
	]
	return (
		<section className="experience">
			<SubForm title="Experience" fields={fields} />
		</section>
	)
}

export { Experience }