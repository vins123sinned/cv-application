import { SubForm } from "./SubForm";
import { AddButton } from "./AddButton";
import { EditButton } from "./EditButton";

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
			<EditButton />
			<AddButton text="Add Experience" />
		</section>
	)
}

export { Experience }